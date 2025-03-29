import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Check for the token

  // Redirect to the login page if the token is not found
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Render the protected component if the token exists
  return children;
};

export default ProtectedRoute;