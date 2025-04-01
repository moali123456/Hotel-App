import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AuthProtectedRoute({ children }){
  const userData = useSelector((state) => state.auth.userData);
  //const isLogged = useSelector((state) => state.auth.isLogged);
  const userRole = userData?.user?.role;

  if (userRole === "user") {
    return <Navigate to="/home" />;
  }

  // If the user is not an admin, redirect to home
  if (userRole === "admin") {
    return <Navigate to="/dashboard" />;
  }

  // If token exists, render the children (the protected component)
  return children;

}

export default AuthProtectedRoute;
