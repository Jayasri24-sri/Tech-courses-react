// hooks/useAuth.js
import { useState, useEffect } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);

  // Check if user is logged in by checking localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Login method
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Logout method
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Return user data and login/logout functions
  return {
    user,
    login,
    logout,
  };
};

export default useAuth;
