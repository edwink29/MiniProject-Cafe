import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface PropTypes {
  children: ReactNode;
}

const ProtectedRoute = (props: PropTypes) => {
  const { children } = props;
  const auth = localStorage.getItem("auth"); // user login
  const currentRoute = useLocation().pathname; // user halaman


  if (!auth && currentRoute !== "/login") {
    return <Navigate to="/login" replace />;
  }

  if (auth && currentRoute === "/login") {
    return <Navigate to="/orders" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
