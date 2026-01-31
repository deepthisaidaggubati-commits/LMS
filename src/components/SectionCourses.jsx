// import React from "react";
// import { useParams } from "react-router-dom";

// const SectionCourses = () => {
//   const { section } = useParams();

//   return (
//     <div className="courses-page">
//       <h1 className="page-title">
//         {section.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase()} COURSES
//       </h1>

//       <p style={{ textAlign: "center", opacity: 0.7 }}>
//         Showing all courses under this category
//       </p>
//     </div>
//   );
// };

// export default SectionCourses;



// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "./Courses.css";

// import web from "../assets/bg.mp4/web.jpg";
// import mern from "../assets/bg.mp4/mern.jpg";
// import dsa from "../assets/bg.mp4/dsa.jpg";
// import java from "../assets/bg.mp4/java.jpg";
// import ai from "../assets/bg.mp4/ai.jpg";
// import devops from "../assets/bg.mp4/devops.jpg";
// import cloud from "../assets/bg.mp4/cloud.jpg";
// import system from "../assets/bg.mp4/system.jpg";
// import python from "../assets/bg.mp4/python.jpg";
// import html from "../assets/bg.mp4/html.jpg";
// import git from "../assets/bg.mp4/git.jpg";
// import sql from "../assets/bg.mp4/sql.jpg";
// import react from "../assets/bg.mp4/react.jpg";
// import ml from "../assets/bg.mp4/ml.jpg";

// const sections = {
//   trending: [
//     { name: "Full Stack Web Development", img: web },
//     { name: "MERN Stack", img: mern },
//     { name: "DSA with Java", img: dsa },
//     { name: "Java Full Stack", img: java },
//   ],
//   upcoming: [
//     { name: "AI & Deep Learning", img: ai },
//     { name: "DevOps Engineering", img: devops },
//     { name: "Cloud Architecture", img: cloud },
//     { name: "System Design", img: system },
//   ],
//   beginner: [
//     { name: "Beginner Python", img: python },
//     { name: "HTML & CSS", img: html },
//     { name: "Git & GitHub", img: git },
//     { name: "SQL Basics", img: sql },
//   ],
//   popular: [
//     { name: "Python Programming", img: python },
//     { name: "React Development", img: react },
//     { name: "Cloud Computing", img: cloud },
//     { name: "Machine Learning", img: ml },
//   ],
// };

// const SectionCourses = () => {
//   const { section } = useParams();
//   const navigate = useNavigate();

//   const courses = sections[section] || [];

//   return (
//     <div className="courses-page">
//       <h1 className="page-title">
//         {section.toUpperCase()} COURSES
//       </h1>

//       <div className="course-grid">
//         {courses.map((course, index) => (
//           <div className="course-card" key={index}>
//             <img src={course.img} alt={course.name} />
//             <h4>{course.name}</h4>

//             <button
//               className="enroll-btn"
//               onClick={() =>
//                 navigate(`/enroll/${course.name.replace(/\s+/g, "-").toLowerCase()}`)
//               }
//             >
//               Enroll
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionCourses;



import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Courses.css";

import web from "../assets/bg.mp4/web.jpg";
import mern from "../assets/bg.mp4/mern.jpg";
import dsa from "../assets/bg.mp4/dsa.jpg";
import java from "../assets/bg.mp4/java.jpg";
import ai from "../assets/bg.mp4/ai.jpg";
import devops from "../assets/bg.mp4/devops.jpg";
import cloud from "../assets/bg.mp4/cloud.jpg";
import system from "../assets/bg.mp4/system.jpg";
import python from "../assets/bg.mp4/python.jpg";
import html from "../assets/bg.mp4/html.jpg";
import git from "../assets/bg.mp4/git.jpg";
import sql from "../assets/bg.mp4/sql.jpg";
import react from "../assets/bg.mp4/react.jpg";
import ml from "../assets/bg.mp4/ml.jpg";

const sections = {
  trending: [
    { name: "Full Stack Web Development", img: web },
    { name: "MERN Stack", img: mern },
    { name: "DSA with Java", img: dsa },
    { name: "Java Full Stack", img: java },
    { name: "React Complete Guide", img: react },
    { name: "Node.js Masterclass", img: mern },
    { name: "MongoDB Bootcamp", img: cloud },
    { name: "Frontend Developer Track", img: html },
  ],

  upcoming: [
    { name: "AI & Deep Learning", img: ai },
    { name: "DevOps Engineering", img: devops },
    { name: "Cloud Architecture", img: cloud },
    { name: "System Design", img: system },
    { name: "Kubernetes", img: devops },
    { name: "Docker Essentials", img: devops },
    { name: "AWS Advanced", img: cloud },
    { name: "Microservices Architecture", img: cloud },
  ],

  beginner: [
    { name: "Beginner Python", img: python },
    { name: "HTML & CSS", img: html },
    { name: "Git & GitHub", img: git },
    { name: "SQL Basics", img: sql },
    { name: "Java Basics", img: java },
    { name: "C Programming", img: system },
    { name: "Linux Fundamentals", img: cloud },
    { name: "Programming Logic", img: system },
  ],

  popular: [
    { name: "Python Programming", img: python },
    { name: "React Development", img: react },
    { name: "Cloud Computing", img: cloud },
    { name: "Machine Learning", img: ml },
    { name: "Next.js", img: react },
    { name: "DSA Mastery", img: dsa },
    { name: "Java Advanced", img: java },
    { name: "Full Stack Track", img: web },
  ],

  career: [
    { name: "Full Stack Developer Track", img: web },
    { name: "Data Scientist Track", img: ml },
    { name: "DevOps Engineer Track", img: devops },
    { name: "Java Backend Track", img: java },
    { name: "Frontend Specialist Track", img: html },
    { name: "Cloud Engineer Track", img: cloud },
    { name: "AI Engineer Track", img: ai },
    { name: "System Architect Track", img: system },
  ],

  intermediate: [
    { name: "React Intermediate", img: react },
    { name: "Node.js Backend", img: mern },
    { name: "Java OOP & JDBC", img: java },
    { name: "Advanced SQL", img: sql },
    { name: "Spring Boot", img: java },
    { name: "REST APIs", img: cloud },
    { name: "GraphQL", img: react },
    { name: "Docker Basics", img: devops },
  ],

  advanced: [
    { name: "Advanced React", img: react },
    { name: "Microservices", img: cloud },
    { name: "System Design Advanced", img: system },
    { name: "Cloud DevOps", img: devops },
    { name: "Kubernetes Advanced", img: devops },
    { name: "AWS Solutions Architect", img: cloud },
    { name: "ML Engineering", img: ml },
    { name: "Big Data Systems", img: system },
  ],
};

const SectionCourses = () => {
  const { section } = useParams();
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(4);

  const courses = sections[section] || [];
  const visibleCourses = courses.slice(0, visibleCount);

  return (
    <div className="courses-page">
      <h1 className="page-title">
        {section.toUpperCase()} COURSES
      </h1>

      <div className="course-grid">
        {visibleCourses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.img} alt={course.name} />
            <h4>{course.name}</h4>

            <button
              className="enroll-btn"
              onClick={() =>
                navigate(`/enroll/${course.name.replace(/\s+/g, "-").toLowerCase()}`)
              }
            >
              Enroll
            </button>
          </div>
        ))}
      </div>

      {/* LOAD MORE BUTTON */}
      {visibleCount < courses.length && (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            className="more-btn"
            onClick={() => setVisibleCount(prev => prev + 4)}
          >
            Load More ↓
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionCourses;
