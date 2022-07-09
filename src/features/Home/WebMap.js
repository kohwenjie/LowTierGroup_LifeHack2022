import MKBox from "components/MKBox";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { getBinsLocation } from "api/Api";

const markerIcon = new L.icon({
	iconUrl: require("../../assets/images/recyclingBin.png"),
	iconSize: [30, 30],
});
const userLocationIcon = new L.icon({
	iconUrl: require("../../assets/images/userLocationIcon.png"),
	iconSize: [30, 30],
});

function WebMap(props) {
	//lng, latitude, this is the centre of singapore
	const userLocation = props.userLocation;
	const position = [1.3521, 103.8198];
	const [binList, setBinList] = useState([]);

	useEffect(() => {
		getBinsLocation(setBinList);
	}, []);

        function nearestBins(userLat, userLon, distanceX) {
        var selectedBins = [];
        binList.map(loc => {
            var binLat = loc.data.Location._lat;
            var binLon = loc.data.Location._long;
            var distance = getGeodesicDistance(userLat, userLon, binLat, binLon);
            if (distance <= distanceX) {
                console.log([binLat, binLon])
                selectedBins.push([binLat, binLon]);
            }
        })
        return selectedBins;
    }

    function getGeodesicDistance(userLat, userLon, binsLat, binsLon) {
        var radius = function(x) {
            return x * Math.PI / 180;
        };
          
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = radius(userLat - binsLat);
        var dLong = radius(userLon - binsLon);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(radius(userLat)) * Math.cos(radius(binsLat)) *
            Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d; // returns the distance in metres
    }

	return (
		<MKBox sx={{ width: "1000px", height: "1000px" }}>
			<MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: "100%", height: "100%" }}>
				<TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

				{userLocation.latitude !== null && (
					<Marker position={[userLocation.latitude,userLocation.longitude]} icon={userLocationIcon}>
						<Popup>You Are Here</Popup>
					</Marker>
				)}

				{binList.length > 0 &&
					binList.map((bin) => {
						const markerPosition = [bin.data.Location._lat, bin.data.Location._long];
						const binName = bin.id;
						return (
							<Marker position={markerPosition} icon={markerIcon}>
								<Popup>{binName}</Popup>
							</Marker>
						);
					})}
			</MapContainer>
		</MKBox>
	);
}

export default WebMap;
