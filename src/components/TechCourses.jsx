import React from "react";
import { Link } from "react-router-dom";
import "./TechCourses.css"; // Import CSS for styling
import reactImage from "../assets/react-course.jpg";
import nodejsImage from "../assets/nodejs-course.jpg";
import javascriptImage from "../assets/javascript-course.jpg";
import pythonImage from "../assets/python-course.jpg";
import javaImage from "../assets/java-course.jpg";
import fullstackImage from "../assets/fullstack-course.jpg";
import htmlImage from "../assets/html-course.jpg";
import dataScienceImage from "../assets/data-science-course.jpg";
import cybersecurityImage from "../assets/cybersecurity-course.jpg";
import cloudComputingImage from "../assets/cloud-computing-course.jpg";
import devopsImage from "../assets/devops-course.jpg";
import aiImage from "../assets/ai-course.jpg";
import { FaLaptopCode } from "react-icons/fa";

const TechCourses = () => {
  // Updated list of courses with 4 additional courses
  const courses = [
    {
      id: 1,
      name: "React Development",
      description: "Learn how to build dynamic websites with React.",
      price: "$99",
      image: reactImage,
    },
    {
      id: 2,
      name: "Node.js Basics",
      description: "Master the backend with Node.js and Express.",
      price: "$79",
      image: nodejsImage,
    },
    {
      id: 3,
      name: "JavaScript Mastery",
      description: "Deep dive into JavaScript concepts and techniques.",
      price: "$89",
      image: javascriptImage,
    },
    {
      id: 4,
      name: "Python for Beginners",
      description: "Start your journey into programming with Python.",
      price: "$69",
      image: pythonImage,
    },
    {
      id: 5,
      name: "Java Essentials",
      description: "Learn the fundamentals of Java programming.",
      price: "$89",
      image: javaImage,
    },
    {
      id: 6,
      name: "Full-Stack Development",
      description:
        "Build end-to-end web applications with Full-Stack expertise.",
      price: "$149",
      image: fullstackImage,
    },
    {
      id: 7,
      name: "HTML Complete Guide",
      description: "Master HTML and start building websites from scratch.",
      price: "$49",
      image: htmlImage,
    },
    {
      id: 8,
      name: "Data Science Basics",
      description: "Introduction to Data Science concepts and tools.",
      price: "$109",
      image: dataScienceImage,
    },
    {
      id: 9,
      name: "Cybersecurity Fundamentals",
      description:
        "Understand the basics of cybersecurity and learn to protect systems and networks.",
      price: "$119",
      image: cybersecurityImage,
    },
    {
      id: 10,
      name: "Cloud Computing Essentials",
      description:
        "Learn the fundamentals of cloud services and deployment models.",
      price: "$129",
      image: cloudComputingImage,
    },
    {
      id: 11,
      name: "DevOps Practices",
      description:
        "Master continuous integration and delivery with DevOps tools.",
      price: "$139",
      image: devopsImage,
    },
    {
      id: 12,
      name: "Artificial Intelligence Basics",
      description: "Dive into AI concepts, algorithms, and applications.",
      price: "$149",
      image: aiImage,
    },
  ];

  return (
    <div className="tech-courses">
      <h2>
        <FaLaptopCode />
        Tech Courses
      </h2>
      <p>
        Explore our range of tech courses that will help you advance your career
        in software development.
      </p>

      <div className="courses-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img
              src={course.image}
              alt={course.name}
              className="course-image"
            />
            <h3 className="course-title">{course.name}</h3>
            <p className="course-description">{course.description}</p>
            <p className="course-price">{course.price}</p>
            <Link to={`/course/${course.id}`} className="view-course-btn">
              View Course
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCourses;
