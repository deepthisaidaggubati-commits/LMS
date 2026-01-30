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

function App() {
  return (
    <Router>
      {/* Video Background */}
      <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Role Selection */}
        <Route path="/login" element={<LoginSelect />} />
        <Route path="/register" element={<RegisterSelect />} />

        {/* Login Pages */}
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/login-student" element={<LoginStudent />} />

        {/* Register Pages */}
        <Route path="/register-admin" element={<RegisterAdmin />} />
        <Route path="/register-student" element={<RegisterStudent />} />

        {/* Dashboard */}
        <Route path="/student-dashboard" element={<StudentProfile />} />

        {/* Other Pages */}
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Router>
  );
}

export default App;
