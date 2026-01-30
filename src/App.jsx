import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import LoginAdmin from "./Pages/LoginAdmin";
import LoginStudent from "./Pages/LoginStudent";
import RegisterAdmin from "./Pages/RegisterAdmin";
import RegisterStudent from "./Pages/RegisterStudent";
import StudentProfile from "./components/StudentProfile";

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

      {/* LMS Info Bar */}
      <div className="lms-info-bar">
        <span>📚 Learning Management System</span>
        <span>🔔 Notifications</span>
      </div>

      {/* Navbar */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login-admin">Admin Login</Link>
        <Link to="/login-student">Student Login</Link>
        <Link to="/register-admin">Admin Register</Link>
        <Link to="/register-student">Student Register</Link>
        <Link to="/student-profile">Student Profile</Link> 
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/login-student" element={<LoginStudent />} />
        <Route path="/register-admin" element={<RegisterAdmin />} />
        <Route path="/register-student" element={<RegisterStudent />} />
        <Route path="/student-profile" element={<StudentProfile />} /> 
      </Routes>
    </Router>
  );
}

export default App;
