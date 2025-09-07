// PublicRoute.js
import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
  const loggedIn = JSON.parse(sessionStorage.getItem("loggedIn"));
  const notExpired = loggedIn && Date.now() < loggedIn.expiry;

  if (loggedIn && notExpired) {
    return <Navigate to="/" />;
  }
  return children;
}

export default PublicRoute;
