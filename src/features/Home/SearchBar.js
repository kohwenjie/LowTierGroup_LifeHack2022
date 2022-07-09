import { useGeolocated } from "react-geolocated";
import React, { useEffect } from "react";

const SearchBar = (props) => {

	const {
		coords = { latitude: null, longitude: null, altitude: null, heading: null, speed: null },
		isGeolocationAvailable,
		isGeolocationEnabled,
	} = useGeolocated({
		positionOptions: {
			enableHighAccuracy: false,
		},
		userDecisionTimeout: 5000,
	});

	useEffect(() => {
		if (coords !== undefined) {
			props.getUserLocationHandler({ latitude: coords.latitude, longitude: coords.longitude });
		}
	}, [coords])
    

	return !isGeolocationAvailable ? (
		<div>Your browser does not support Geolocation</div>
	) : !isGeolocationEnabled ? (
		<div>Geolocation is not enabled</div>
	) : coords ? (
		<table>
			<tbody>
				<tr>
					<td>latitude</td>
					<td>{coords?.latitude}</td>
				</tr>
				<tr>
					<td>longitude</td>
					<td>{coords?.longitude}</td>
				</tr>
			</tbody>
		</table>
	) : (
		<div>Getting the location data&hellip; </div>
	);
};

export default SearchBar;
