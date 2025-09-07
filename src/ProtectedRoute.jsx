// ProtectedRoute.js
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const loggedIn = JSON.parse(sessionStorage.getItem("loggedIn"));
  const notExpired = loggedIn && Date.now() < loggedIn.expiry;

  if (!loggedIn || !notExpired) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
