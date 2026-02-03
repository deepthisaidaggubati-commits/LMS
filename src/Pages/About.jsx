import React from "react";
import "./Home.css"; // reuse existing styles

function About() {
  return (
    <div className="home" style={{ paddingTop: "160px" }}>
      <h1>About LearnSphere</h1>

      <p style={{ maxWidth: "800px", margin: "20px auto", lineHeight: "1.7" }}>
        LearnSphere is a modern Learning Management System designed to empower
        students with industry-ready skills. Our platform combines expert-led
        courses, real-world projects, and interactive learning tools to ensure
        every learner achieves their full potential.
      </p>

      <section className="about" style={{ background: "transparent" }}>
        <h2>Our Mission</h2>
        <p style={{ maxWidth: "700px", margin: "15px auto" }}>
          To make quality education accessible to everyone by providing flexible,
          affordable, and engaging learning experiences.
        </p>

        <div className="about-box">
          <div className="about-card">
            <h3>📚 Quality Content</h3>
            Expert-curated courses aligned with industry standards.
          </div>

          <div className="about-card">
            <h3>🎯 Career Focused</h3>
            Hands-on projects and mentorship to prepare you for jobs.
          </div>

          <div className="about-card">
            <h3>🌍 Global Access</h3>
            Learn anytime, anywhere with lifetime access.
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat">
          <h2>10K+</h2>
          <p>Active Learners</p>
        </div>
        <div className="stat">
          <h2>200+</h2>
          <p>Courses</p>
        </div>
        <div className="stat">
          <h2>95%</h2>
          <p>Success Rate</p>
        </div>
      </section>
    </div>
  );
}

export default About;
