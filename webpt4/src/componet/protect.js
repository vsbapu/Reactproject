import React from "react";
import { Navigate } from "react-router-dom";

let ProtectedRoute  = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
      // If the user is not authenticated, redirect to the login page
      return <Navigate to="/LoginPage" />;
    }
  
    // Otherwise, render the children (the protected component)
    return children;
};
export default ProtectedRoute ;
  