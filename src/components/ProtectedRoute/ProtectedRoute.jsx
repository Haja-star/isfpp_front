import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = !!sessionStorage.getItem("token"); // Vérifie si la session est active

  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
