import React from "react";
import "./Home.css";

import img1 from "../assets/bg.mp4/img1.png";
import img2 from "../assets/bg.mp4/img2.png";
import img3 from "../assets/bg.mp4/img3.png";

function Home() {
  return (
    <div className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero-box">
          <h1>Welcome to LMS Portal</h1>
          <p>Learn anytime, anywhere. Build your skills with expert-led courses.</p>
          <button className="primary">Browse Courses</button>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stat">
          <h2>500+</h2>
          <p>Students</p>
        </div>
        <div className="stat">
          <h2>50+</h2>
          <p>Courses</p>
        </div>
        <div className="stat">
          <h2>20+</h2>
          <p>Instructors</p>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Why Choose Our LMS?</h2>

        <div className="feature-cards">
          <div className="card">
            <h3>Online Courses</h3>
            <p>Access high-quality courses anytime.</p>
          </div>

          <div className="card">
            <h3>Track Progress</h3>
            <p>Monitor your learning journey easily.</p>
          </div>

          <div className="card">
            <h3>Certificates</h3>
            <p>Earn certificates after completion.</p>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="courses">
        <h2>Popular Courses</h2>

        <div className="course-list">
          <div className="course-card">
            <img src={img1} alt="Web Development" />
            <h4>Web Development</h4>
          </div>

          <div className="course-card">
            <img src={img2} alt="Machine Learning" />
            <h4>Machine Learning</h4>
          </div>

          <div className="course-card">
            <img src={img3} alt="Data Structures" />
            <h4>Data Structures</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <h3>LMS Portal</h3>
        <p>Empowering learners everywhere.</p>
        <span>© 2026 All Rights Reserved</span>
      </footer>

    </div>
  );
}

export default Home;
