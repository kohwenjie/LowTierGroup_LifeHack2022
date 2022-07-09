import MKBox from "components/MKBox";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"

const markerIcon = new L.icon({
    iconUrl: require("../../assets/images/recyclingBin.png"),
    iconSize: [30,30]
})

function WebMap() {
    //lng, lat, this is the centre of singapore
	const position = [1.3521, 103.8198];

	return (
		<MKBox sx={{ width: "1000px", height: "1000px" }}>
			<MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: "100%", height: "100%" }}>
				<TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<Marker position={position} icon={markerIcon}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</MKBox>
	);
}

export default WebMap;
