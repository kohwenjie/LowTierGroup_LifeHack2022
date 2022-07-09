import { useLocation } from "react-router-dom";
import { ROUTES, EMPTY_ROUTES } from "common/routes/routes";
import DefaultNavbar from "components/DefaultNavbar";
import MKBox from "components/MKBox";

export default function RootLayout({ children }) {
  const { pathname } = useLocation();

  const handleLogout = () => {
    localStorage.clear();
  };

  var loggedin = localStorage.getItem("user");
  if (loggedin) {
    return (
      <>
        <MKBox
          display="flex"
          flexDirection="column"
          bgColor="white"
          minHeight="100vh"
        >
          <MKBox bgColor="white" shadow="sm" py={0.25} onClick={handleLogout}>
            {pathname !== "/login" ? (
              <DefaultNavbar
                routes={ROUTES}
                action={{
                  type: "external",
                  route: "/",
                  label: "Logout",
                  color: "info",
                }}
                transparent
                relative
              />
            ) : null}
          </MKBox>
          {children}
        </MKBox>
      </>
    );
  }
  // when a user is not logged in
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
            routes={EMPTY_ROUTES}
              action={{
                type: "external",
                route: "/login",
                label: "Login",
                color: "info",
              }}
              transparent
              relative
            />
          ) : null}
        </MKBox>
        {children}
      </MKBox>
    </>
  );

}
