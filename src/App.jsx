import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import LoginAdmin from "./Pages/LoginAdmin";
import LoginStudent from "./Pages/LoginStudent";
import RegisterAdmin from "./Pages/RegisterAdmin";
import RegisterStudent from "./Pages/RegisterStudent";
import LoginSelect from "./Pages/LoginSelect";
import RegisterSelect from "./Pages/RegisterSelect";
import Courses from "./Components/Courses";
import StudentProfile from "./Components/StudentProfile";

import bgVideo from "./assets/bg.mp4/bgvideo.mp4";
import CourseEnroll from "./Pages/CourseEnroll";
import SectionCourses from "./Components/SectionCourses";

function App() {
  return (
    <Router>
      
      <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      
      <Routes>
        <Route path="/" element={<Home />} />

        
        <Route path="/login" element={<LoginSelect />} />
        <Route path="/register" element={<RegisterSelect />} />

       
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/login-student" element={<LoginStudent />} />

        
        <Route path="/register-admin" element={<RegisterAdmin />} />
        <Route path="/register-student" element={<RegisterStudent />} />

        
        <Route path="/student-dashboard" element={<StudentProfile />} />

        
        <Route path="/courses" element={<Courses />} />
        
        <Route path="/enroll/:course" element={<CourseEnroll />} />
        <Route path="/courses/:section" element={<SectionCourses />} />



      </Routes>
    </Router>
  );
}

export default App;
