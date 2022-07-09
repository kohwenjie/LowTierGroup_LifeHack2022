import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";

import "./App.css";
import RootLayout from "Layout/RootLayout";
import { ROUTES } from "common/routes/routes";
import Login from "features/Auth/Login/Login";
import Home from "features/Home/Home";

function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RootLayout>
        <Routes>
          {getRoutes(ROUTES)}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes> 
      </RootLayout>
    </ThemeProvider>
  );
}

export default App;
