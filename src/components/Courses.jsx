// import React from "react";
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

// const sections = [
//   {
//     title: "🔥 Trending Courses",
//     courses: [
//       { name: "Full Stack Web Development", img: web },
//       { name: "MERN Stack", img: mern },
//       { name: "DSA with Java", img: dsa },
//       { name: "Java Full Stack", img: java },
//     ],
//   },
//   {
//     title: "🚀 Upcoming Courses",
//     courses: [
//       { name: "AI & Deep Learning", img: ai },
//       { name: "DevOps Engineering", img: devops },
//       { name: "Cloud Architecture", img: cloud },
//       { name: "System Design", img: system },
//     ],
//   },
//   {
//     title: "🌱 Beginner Friendly",
//     courses: [
//       { name: "Beginner Python", img: python },
//       { name: "HTML & CSS", img: html },
//       { name: "Git & GitHub", img: git },
//       { name: "SQL Basics", img: sql },
//     ],
//   },
//   {
//     title: "⭐ Popular Courses",
//     courses: [
//       { name: "Python Programming", img: python },
//       { name: "React Development", img: react },
//       { name: "Cloud Computing", img: cloud },
//       { name: "Machine Learning", img: ml },
//     ],
//   },
//   {
//     title: "🎯 Career Tracks",
//     courses: [
//       { name: "Full Stack Developer Track", img: web },
//       { name: "Data Scientist Track", img: ml },
//       { name: "DevOps Engineer Track", img: devops },
//       { name: "Java Backend Track", img: java },
//     ],
//   },
//   {
//     title: "📈 Intermediate Level",
//     courses: [
//       { name: "React Intermediate", img: react },
//       { name: "Node.js Backend", img: mern },
//       { name: "Java OOP & JDBC", img: java },
//       { name: "Advanced SQL", img: sql },
//     ],
//   },
//   {
//     title: "🚀 Advanced Level",
//     courses: [
//       { name: "Advanced React", img: react },
//       { name: "Microservices", img: cloud },
//       { name: "System Design Advanced", img: system },
//       { name: "Cloud DevOps", img: devops },
//     ],
//   },
// ];

// function Courses() {
//   return (
//     <div className="courses-page">
//       <h1 className="page-title">Explore Courses</h1>

//       {sections.map((section, idx) => (
//         <div className="course-section" key={idx}>
//           <div className="section-header">
//             <h2>{section.title}</h2>
//             <button className="more-btn">More →</button>
//           </div>

//           <div className="course-grid">
//             {section.courses.map((course, index) => (
//               <div className="course-card" key={index}>
//                 <img src={course.img} alt={course.name} />
//                 <h4>{course.name}</h4>
//                 <button className="enroll-btn">Enroll</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Courses;


import React from "react";
import { useNavigate } from "react-router-dom";
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

const sections = [
  {
    title: "🔥 Trending Courses",
    slug: "trending",
    courses: [
      { name: "Full Stack Web Development", img: web },
      { name: "MERN Stack", img: mern },
      { name: "DSA with Java", img: dsa },
      { name: "Java Full Stack", img: java },
    ],
  },
  {
    title: "🚀 Upcoming Courses",
    slug: "upcoming",
    courses: [
      { name: "AI & Deep Learning", img: ai },
      { name: "DevOps Engineering", img: devops },
      { name: "Cloud Architecture", img: cloud },
      { name: "System Design", img: system },
    ],
  },
  {
    title: "🌱 Beginner Friendly",
    slug: "beginner",
    courses: [
      { name: "Beginner Python", img: python },
      { name: "HTML & CSS", img: html },
      { name: "Git & GitHub", img: git },
      { name: "SQL Basics", img: sql },
    ],
  },
  {
    title: "⭐ Popular Courses",
    slug: "popular",
    courses: [
      { name: "Python Programming", img: python },
      { name: "React Development", img: react },
      { name: "Cloud Computing", img: cloud },
      { name: "Machine Learning", img: ml },
    ],
  },
  {
    title: "🎯 Career Tracks",
    slug: "career",
    courses: [
      { name: "Full Stack Developer Track", img: web },
      { name: "Data Scientist Track", img: ml },
      { name: "DevOps Engineer Track", img: devops },
      { name: "Java Backend Track", img: java },
    ],
  },
  {
    title: "📈 Intermediate Level",
    slug: "intermediate",
    courses: [
      { name: "React Intermediate", img: react },
      { name: "Node.js Backend", img: mern },
      { name: "Java OOP & JDBC", img: java },
      { name: "Advanced SQL", img: sql },
    ],
  },
  {
    title: "🚀 Advanced Level",
    slug: "advanced",
    courses: [
      { name: "Advanced React", img: react },
      { name: "Microservices", img: cloud },
      { name: "System Design Advanced", img: system },
      { name: "Cloud DevOps", img: devops },
    ],
  },
];

function Courses() {
  const navigate = useNavigate();

  const handleMore = (slug) => {
    navigate(`/courses/${slug}`);
  };

  const handleEnroll = (courseName) => {
    const slug = courseName.replace(/\s+/g, "-").toLowerCase();
    navigate(`/enroll/${slug}`);
  };

  return (
    <div className="courses-page">
      <h1 className="page-title">Explore Courses</h1>

      {sections.map((section, idx) => (
        <div className="course-section" key={idx}>
          <div className="section-header">
            <h2>{section.title}</h2>

            <button
              className="more-btn"
              onClick={() => handleMore(section.slug)}
            >
              More →
            </button>
          </div>

          <div className="course-grid">
            {section.courses.map((course, index) => (
              <div className="course-card" key={index}>
                <img src={course.img} alt={course.name} />

                <h4>{course.name}</h4>

                <button
                  className="enroll-btn"
                  onClick={() => handleEnroll(course.name)}
                >
                  Enroll
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Courses;
