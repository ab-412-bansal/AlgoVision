import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    async function verifyToken() {
      const url = "http://localhost:8000/users/authenticate";
      const options = {
        credentials: "include",
        method: "GET",
      };
      try {
        const response = await fetch(url, options);
        if (response.status === 200) {
          console.log("Valid");
          setIsValid(true);
        } else {
          console.log("Invalid");
        }
      } catch (error) {
        console.error("Error verifying token:", error);
      } finally {
        setLoading(false); // Mark the loading as complete
      }
    }
    verifyToken();
  }, []);

  // If loading, render nothing or a loader
  if (loading) {
    return <div>Loading...</div>; // Add a loader or spinner here
  }

  // Return children if valid; otherwise, redirect
  return isValid ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
