import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contact from "./components/Contact";
import TechCourses from "./components/TechCourses";
import "./App.css";
import blog from "./assets/blog3.jpg";

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();

  const showBlogImage = location.pathname === "/";

  return (
    <div className="app">
      <Navbar />
      {/* Define routes for different pages */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="home">
              <h1>Welcome to Tech Courses</h1>
              <p>Your one-stop destination for tech learning!</p>
              <div className="intro-box">
                <h2>Start learning today!</h2>
                <p>
                  Sign up now to get full access to all our courses, tutorials,
                  and more!
                </p>
                {showBlogImage && (
                  <img src={blog} alt="Blog" className="blog_img" />
                )}
              </div>
            </div>
          }
        />
        <Route path="/signup" element={<Signup />} /> {/* Signup page */}
        <Route path="/login" element={<Login />} /> {/* Login page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        <Route path="/tech-courses" element={<TechCourses />} />{" "}
        {/* Courses page */}
      </Routes>
    </div>
  );
};

export default App;
