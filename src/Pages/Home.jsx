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




function Home() {
  return (
    <div className="home">
      {/* Navbar */}
    
  

      {/* Hero */}<header className="navbar">

  <div className="logo-box">
    <div className="logo-circle">L</div>
    <h2>LearnSphere</h2>
  </div>

  <nav className="nav-links">
    <a href="#">Home</a>
    <a href="#">Courses</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>

  <div className="nav-actions">
    <button className="login-btn">Login</button>
    <button className="register-btn">Register</button>
  </div>

</header>

      <section className="hero">
        <div className="hero-box">
          <h1>Dream. Discover. Explore. Inspire.</h1>
          <p>Learn anytime, anywhere. Build your skills with expert-led courses.</p>
          <button className="primary">Browse Courses</button>
        </div>
      </section>

      {/* About LMS (NEW) */}
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

      {/* What’s in store (NEW) */}
      
        <section className="store">
  <h2>Designed for Your Success</h2>


  <div className="store-cards">

    <div className="store-card">
      <h3>🚀 Diverse Learning</h3>
      <p>
        Explore Web, AI, ML and more. Build cross-domain expertise with guided content.
      </p>
    </div>

    <div className="store-card">
      <h3>📈 Career Progression</h3>
      <p>
        Follow structured paths, real projects, and assessments to become job-ready.
      </p>
    </div>

    <div className="store-card">
      <h3>🎯 Training & Development</h3>
      <p>
        Hands-on practice, certifications, and continuous mentor support.
      </p>
    </div>

  </div>
</section>


        
      {/* Features */}
      <div className="feature-cards">
  <div className="card">
    <img src={imgFeature1} alt="Online Courses" className="feature-img"/>
    <h3>Online Courses</h3>
    <p>Access high-quality courses anytime.</p>
  </div>

  <div className="card">
    <img src={imgFeature2} alt="Track Progress" className="feature-img"/>
    <h3>Track Progress</h3>
    <p>Monitor your learning journey easily.</p>
  </div>

  <div className="card">
    <img src={imgFeature3} alt="Certificates" className="feature-img"/>
    <h3>Certificates</h3>
    <p>Earn certificates after completion.</p>
  </div>

  <div className="card">
    <img src={imgFeature4} alt="Live Classes" className="feature-img"/>
    <h3>Live Classes</h3>
    <p>Interact with instructors in real time.</p>
  </div>

  <div className="card">
    <img src={imgFeature15} alt="Projects" className="feature-img"/>
    <h3>Projects</h3>
    <p>Build portfolio-ready projects.</p>
  </div>
  <div className="card">
  <img src={imgFeature6} alt="Flexible Learning" className="feature-img" />
  <h3>Flexible Learning</h3>
  <p>Learn anytime, anywhere with mobile-friendly access.</p>
</div>

</div>


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
          <div className="course-card">
  <img src={img4} alt="React Development" />
  <h4>React Development</h4>
</div>
<div className="course-card">
  <img src={img5} alt="Python Programming" />
  <h4>Python Programming</h4>
</div>
<div className="course-card">
  <img src={img6} alt="Cloud Computing" />
  <h4>Cloud Computing</h4>
</div>


        </div>
      </section>

      {/* Call To Action (NEW) */}
      <section className="cta">
        <h2>Start Your Learning Journey Today</h2>
        <p>Join thousands of learners and build your future.</p>
        <button className="primary">Join Now</button>
      </section>

      {/* Footer */}
     <footer className="footer">

  <div className="footer-grid">

    {/* Brand */}
    <div>
      <h3>LearnSphere</h3>
      <p>
        LearnSphere is a modern Learning Management System designed to help
        students learn smarter, faster, and better through interactive courses,
        expert guidance, and real-world projects.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4>Quick Links</h4>
      <ul>
        <li>Home</li>
        <li>Courses</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>

    {/* Features */}
    <div>
      <h4>Platform</h4>
      <ul>
        <li>Interactive Learning</li>
        <li>Certificates</li>
        <li>Live Classes</li>
        <li>Progress Tracking</li>
      </ul>
    </div>

    {/* Social */}
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
