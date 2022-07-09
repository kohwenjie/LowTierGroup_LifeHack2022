import { Navigate } from "react-router-dom";

export const AdminRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/" />;
};
