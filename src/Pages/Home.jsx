import React from "react";
import "./Home.css";

import img1 from "../assets/bg.mp4/img1.png";
import img2 from "../assets/bg.mp4/img2.png";
import img3 from "../assets/bg.mp4/img3.png";
import img4 from "../assets/bg.mp4/img4.png";
import img5 from "../assets/bg.mp4/img5.jpg";
import img6 from "../assets/bg.mp4/img6.jpg";
import imgFeature1 from "../assets/bg.mp4/imgFeature1.jpg";
import imgFeature2 from "../assets/bg.mp4/imgFeature2.png";
import imgFeature3 from "../assets/bg.mp4/imgFeature3.jpg";
import imgFeature4 from "../assets/bg.mp4/imgFeature4.jpg";
import imgFeature15 from "../assets/bg.mp4/imgFeature15.jpg";
import imgFeature6 from "../assets/bg.mp4/imgFeature6.jpg";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* Navbar */}
      <header className="navbar">
        <div className="logo-box">
          <div className="logo-circle">L</div>
          <h2>LearnSphere</h2>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="nav-actions">
          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button
            className="register-btn"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-box">
          <h1>Dream. Discover. Explore. Inspire.</h1>
          <p>Learn anytime, anywhere. Build your skills with expert-led courses.</p>

          <button
            className="primary"
            onClick={() => navigate("/courses")}
          >
            Browse Courses
          </button>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <h2>Transform Your Learning Experience</h2>
        <p className="about-sub">
          Build skills. Gain confidence. Shape your future.
        </p>

        <div className="about-box">
          <div className="about-card">
            Learn at your own pace with expert-designed content.
          </div>

          <div className="about-card">
            Track progress, earn certificates and grow professionally.
          </div>

          <div className="about-card">
            Industry focused courses with real projects.
          </div>
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
        <div className="stat">
          <h2>15+</h2>
          <p>Ongoing Courses</p>
        </div>
        <div className="stat">
          <h2>10+</h2>
          <p>Incoming Courses</p>
        </div>
        <div className="stat">
          <h2>120+</h2>
          <p>Projects Completed</p>
        </div>
      </section>

      {/* Store */}
      <section className="store">
        <h2>Designed for Your Success</h2>

        <div className="store-cards">
          <div className="store-card">
            <h3>🚀 Diverse Learning</h3>
            <p>
              Explore Web, AI, ML and more. Build cross-domain expertise.
            </p>
          </div>

          <div className="store-card">
            <h3>📈 Career Progression</h3>
            <p>
              Follow structured paths, real projects, and assessments.
            </p>
          </div>

          <div className="store-card">
            <h3>🎯 Training & Development</h3>
            <p>
              Hands-on practice, certifications, and mentor support.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="feature-cards">
        {[
          [imgFeature1, "Online Courses", "Access high-quality courses anytime."],
          [imgFeature2, "Track Progress", "Monitor your learning journey easily."],
          [imgFeature3, "Certificates", "Earn certificates after completion."],
          [imgFeature4, "Live Classes", "Interact with instructors in real time."],
          [imgFeature15, "Projects", "Build portfolio-ready projects."],
          [imgFeature6, "Flexible Learning", "Learn anytime, anywhere."]
        ].map(([img, title, desc], i) => (
          <div className="card" key={i}>
            <img src={img} alt={title} className="feature-img" />
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      {/* Courses */}
      <section className="courses">
        <h2>Popular Courses</h2>

        <div className="course-list">
          {[
            [img1, "Web Development"],
            [img2, "Machine Learning"],
            [img3, "Data Structures"],
            [img4, "React Development"],
            [img5, "Python Programming"],
            [img6, "Cloud Computing"]
          ].map(([img, title], i) => (
            <div className="course-card" key={i}>
              <img src={img} alt={title} />
              <h4>{title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Your Learning Journey Today</h2>
        <p>Join thousands of learners and build your future.</p>

        <button
          className="primary"
          onClick={() => navigate("/register-student")}
        >
          Join Now
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h3>LearnSphere</h3>
            <p>
              LearnSphere is a modern Learning Management System designed to help
              students learn smarter, faster, and better.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Courses</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4>Platform</h4>
            <ul>
              <li>Interactive Learning</li>
              <li>Certificates</li>
              <li>Live Classes</li>
              <li>Progress Tracking</li>
            </ul>
          </div>

          <div>
            <h4>Connect</h4>
            <div className="socials">
              <span>Instagram</span>
              <span>Facebook</span>
              <span>WhatsApp</span>
              <span>LinkedIn</span>
            </div>
          </div>
        </div>

        <p className="copyright">
          © 2026 LearnSphere. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;