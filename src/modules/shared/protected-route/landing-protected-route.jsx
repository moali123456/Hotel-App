import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function LandingProtectedRoute({ children }) {
  const isLogged = useSelector((state) => state.auth.isLogged);

  // If the user is not logged in, redirect to login
  if (!isLogged) {
    return <Navigate to="/" />;
  }

  // If token exists and the user is an admin, render the children (the protected component)
  return children;
}

export default LandingProtectedRoute;
