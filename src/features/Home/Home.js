import { useNavigate } from "react-router-dom";
import DefaultNavbar from "components/DefaultNavbar";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import { useState } from "react";
import SearchBar from "./SearchBar";

import WebMap from "./WebMap";
import { ROUTES } from "common/routes/routes";
import bgImage from "assets/images/city-profile.jpg";

export default function Home() {
  const navigate = useNavigate();
  const [userLocation, setUserLocation] = useState({
    latitude: null,
    longitude: null,
  });

  function getUserLocationHandler(locationData) {
    setUserLocation(locationData);
  }

  const loginAction = {
    type: "internal",
    label: "Login",
    color: "info",
    onClick: () => {
      navigate("/login");
    },
  };
  const logoutAction = {
    type: "internal",
    label: "Logout",
    color: "info",
    onClick: () => {
      localStorage.removeItem("user");
      navigate("/");
    },
  };

  let isUserLoggedIn = localStorage.getItem("user") ? true : false;
  return (
    <>
      <MKBox bgColor="white" shadow="sm">
        <DefaultNavbar
          routes={isUserLoggedIn ? ROUTES : []}
          action={isUserLoggedIn ? logoutAction : loginAction}
          transparent
          relative
          center
        />
      </MKBox>
      <MKBox
        minHeight="20vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      ></MKBox>
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
