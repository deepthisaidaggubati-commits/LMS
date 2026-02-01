import React from "react";
import abtBg from "../assets/bg.mp4/abtbg.mp4";
import "./About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      
      {/* Background Video */}
      <video className="about-video" autoPlay loop muted playsInline>
        <source src={abtBg} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="about-overlay"></div>

      {/* Content */}
      <section className="about-container">
        <h1 className="title">About Our LMS</h1>
        <p className="subtitle">
          Empowering students and educators through smart digital learning.
        </p>

        <div className="cards">
          <div className="card">
            <h3>🎓 Our Mission</h3>
            <p>
              To provide an interactive, reliable, and user-friendly learning
              platform for students and educators.
            </p>
          </div>

          <div className="card">
            <h3>📚 Features</h3>
            <p>
              Course management, student dashboards, secure authentication,
              and modern UI experience.
            </p>
          </div>

          <div className="card">
            <h3>🚀 Our Vision</h3>
            <p>
              Making digital education accessible, engaging, and efficient for
              everyone.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
