import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "assets/theme";

import "./App.css";
import RootLayout from "Layout/RootLayout";
import Login from "features/Auth/Login/Login";
import SignUpAcc from "features/Auth/SignUp/SignUpAcc";
import Home from "features/Home/Home";
import EditRecyclingPoint from "features/RecyclingPoints/EditRecyclingPoint/EditRecyclingPoint";
import ManageRecyclingPoints from "features/RecyclingPoints/ManageRecyclingPoints/ManageRecyclingPoints";
import AddRecyclingPoints from "features/RecyclingPoints/AddRecyclingPoints/AddRecyclingPoints";
import { AdminRoute } from "common/routes/AdminRoute/AdminRoute";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signupacc" element={<SignUpAcc />} />
          <Route
            path="admin"
            element={
              <AdminRoute>
                <RootLayout />
              </AdminRoute>
            }
          >
            <Route
              exact
              path="recyclingPoints"
              element={<ManageRecyclingPoints />}
            />
            <Route
              exact
              path="recyclingPoints/add"
              element={<AddRecyclingPoints />}
            />
            <Route
              exact
              path="recyclingPoints/edit/:id"
              element={<EditRecyclingPoint />}
            />
          </Route>
        </Routes>
    </ThemeProvider>
  );
}

export default App;
