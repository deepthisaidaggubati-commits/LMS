import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import LoginAdmin from "./Pages/LoginAdmin";
import LoginStudent from "./Pages/LoginStudent";
import RegisterAdmin from "./Pages/RegisterAdmin";
import RegisterStudent from "./Pages/RegisterStudent";

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

      {/* Navbar */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login-admin">Admin Login</Link>
        <Link to="/login-student">Student Login</Link>
        <Link to="/register-admin">Admin Register</Link>
        <Link to="/register-student">Student Register</Link>
      </nav>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/login-student" element={<LoginStudent />} />
        <Route path="/register-admin" element={<RegisterAdmin />} />
        <Route path="/register-student" element={<RegisterStudent />} />
      </Routes>
    </Router>
  );
}

export default App;