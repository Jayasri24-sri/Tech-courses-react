// import React from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaPlusCircle, FaInfoCircle } from "react-icons/fa"; // Import icons from React Icons
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h1>Simple Blog</h1>
//       <div className="navbar-links">
//         <Link to="/">
//           <FaHome /> Home {/* Add icon */}
//         </Link>
//         <Link to="/create">
//           <FaPlusCircle /> Create Post {/* Add icon */}
//         </Link>
//         <Link to="/about">
//           <FaInfoCircle /> About {/* Add icon */}
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom"; // useNavigate for programmatically navigating
// import {
//   FaHome,
//   FaUserPlus,
//   FaSignInAlt,
//   FaPhone,
//   FaLaptopCode,
//   FaSignOutAlt, // Import logout icon
// } from "react-icons/fa"; // Importing icons
// import "./Navbar.css";

// const Navbar = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate(); // Hook for programmatically navigating

//   // Check if user is logged in by checking localStorage
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//       setUser(storedUser); // Set user state if storedUser exists
//     }
//   }, []);

//   // Logout function to clear localStorage and redirect
//   const handleLogout = () => {
//     localStorage.removeItem("user"); // Remove user data from localStorage
//     setUser(null); // Clear user state
//     navigate("/"); // Redirect to login page after logout
//   };

//   return (
//     <nav className="navbar">
//       <h1>Tech Courses</h1>
//       <div className="navbar-links">
//         <Link to="/" className="navbar-link">
//           <FaHome /> Home
//         </Link>

//         {/* Conditional rendering based on user authentication */}
//         {user ? (
//           <>
//             <Link to="/tech-courses" className="navbar-link">
//               <FaLaptopCode /> Tech Courses
//             </Link>

//             {/* Logout button */}
//             <button onClick={handleLogout} className="navbar-link logout-btn">
//               <FaSignOutAlt /> Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/signup" className="navbar-link">
//               <FaUserPlus /> Signup
//             </Link>
//             <Link to="/login" className="navbar-link">
//               <FaSignInAlt /> Login
//             </Link>
//           </>
//         )}

//         <Link to="/contact" className="navbar-link">
//           <FaPhone /> Contact
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserPlus,
  FaSignInAlt,
  FaPhone,
  FaLaptopCode,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ user, setUser }) => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null); // Clear user state
  };

  return (
    <nav className="navbar">
      <h1>Tech Courses</h1>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          <FaHome /> Home
        </Link>
        {user ? (
          <>
            <Link to="/tech-courses" className="navbar-link">
              <FaLaptopCode /> Tech Courses
            </Link>
            <button onClick={handleLogout} className="navbar-link logout-btn">
              <FaSignOutAlt /> Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signup" className="navbar-link">
              <FaUserPlus /> Signup
            </Link>
            <Link to="/login" className="navbar-link">
              <FaSignInAlt /> Login
            </Link>
          </>
        )}
        <Link to="/contact" className="navbar-link">
          <FaPhone /> Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
