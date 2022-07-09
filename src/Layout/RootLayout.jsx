import { useLocation } from "react-router-dom";
import { ROUTES } from "common/routes/routes";
import DefaultNavbar from "components/DefaultNavbar";
import MKBox from "components/MKBox";

export default function RootLayout({ children }) {
  const { pathname } = useLocation();

  console.log(pathname);

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
              routes={ROUTES}
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
