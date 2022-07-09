import { ROUTES, EMPTY_ROUTES } from "common/routes/routes";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import DefaultNavbar from "components/DefaultNavbar";
import MKBox from "components/MKBox";

export default function RootLayout({ children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

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

  var loggedin = localStorage.getItem("user");
  return (
    <>
      <MKBox
        display="flex"
        flexDirection="column"
        bgColor="white"
        minHeight="100vh"
      >
        <MKBox bgColor="white" shadow="sm" py={0.25}>
          {pathname !== "/login" ? (
            <DefaultNavbar
              routes={loggedin ? ROUTES : EMPTY_ROUTES}
              action={loggedin ? logoutAction : loginAction}
              transparent
              relative
            />
          ) : null}
        </MKBox>
        <Outlet />
      </MKBox>
    </>
  );

}
