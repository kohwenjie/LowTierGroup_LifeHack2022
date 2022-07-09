import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import MKBox from "components/MKBox";
import { useState } from "react";
import SearchBar from "./SearchBar";

import WebMap from "./WebMap";

export default function Home() {
	const [userLocation, setUserLocation] = useState({ latitude: null, longitude: null });

	function getUserLocationHandler(locationData) {
		setUserLocation(locationData);
	}

	return (
		<>

			<Grid container spacing={2}>
				<Grid item xs={4} lg={7} justifyContent="right" mx="auto">
					<SearchBar getUserLocationHandler={getUserLocationHandler} />
				</Grid>
				<Grid item xs={8} lg={7} justifyContent="left" mx="auto">
					<MKBox sx={{ textAlign: "center" }}>
						<WebMap userLocation={userLocation} />
					</MKBox>
				</Grid>
			</Grid>
		</>
	);
}
