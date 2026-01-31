import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CourseEnroll.css";

const CourseEnroll = () => {
  const { course } = useParams();
  const navigate = useNavigate();

  const courseName = course
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const handleEnroll = () => {
    alert(`Successfully Enrolled in ${courseName} 🎉`);
    // navigate("/student-dashboard");
  };

  return (
    <div className="enroll-page">

      {/* HERO */}
      <div className="enroll-hero">
        <h1>{courseName}</h1>
        <p>Master in-demand skills with industry-focused curriculum.</p>
      </div>

      {/* CONTENT */}
      <div className="enroll-container">

        {/* LEFT */}
        <div className="enroll-main">

          <section className="enroll-section">
            <h2>Course Description</h2>
            <p>
              This course is designed to take you from beginner to advanced level
              with hands-on projects, real-world use cases, and expert guidance.
              You will gain practical knowledge and industry-level experience.
            </p>
          </section>

          <section className="enroll-section">
            <h2>What You Will Learn</h2>
            <ul>
              <li>✔ Core fundamentals & advanced concepts</li>
              <li>✔ Real-time project development</li>
              <li>✔ Industry best practices</li>
              <li>✔ Debugging, testing & deployment</li>
              <li>✔ Interview preparation</li>
            </ul>
          </section>

          <section className="enroll-section">
            <h2>Course Highlights</h2>
            <div className="highlights-grid">
              <div className="highlight-card">📚 120+ Video Lessons</div>
              <div className="highlight-card">🛠 10+ Real Projects</div>
              <div className="highlight-card">🎓 Certificate</div>
              <div className="highlight-card">👨‍🏫 Expert Mentors</div>
              <div className="highlight-card">💼 Career Guidance</div>
              <div className="highlight-card">📈 Lifetime Access</div>
            </div>
          </section>

        </div>

        {/* RIGHT */}
        <div className="enroll-sidebar">
          <div className="info-box">
            <h3>Course Info</h3>
            <p><strong>Duration:</strong> 12 Weeks</p>
            <p><strong>Level:</strong> Beginner → Advanced</p>
            <p><strong>Projects:</strong> 10+</p>
            <p><strong>Certificate:</strong> Yes</p>
            <p><strong>Access:</strong> Lifetime</p>

            <button className="enroll-btn-large" onClick={handleEnroll}>
              Enroll Now
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default CourseEnroll;
