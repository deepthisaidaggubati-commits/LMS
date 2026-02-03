import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

// Course Images
import img1 from "../assets/bg.mp4/img1.png";
import img2 from "../assets/bg.mp4/img2.png";
import img3 from "../assets/bg.mp4/img3.png";
import img4 from "../assets/bg.mp4/img4.png";
import img5 from "../assets/bg.mp4/img5.jpg";
import img6 from "../assets/bg.mp4/img6.jpg";

// Feature Images
import imgFeature1 from "../assets/bg.mp4/imgFeature1.jpg";
import imgFeature2 from "../assets/bg.mp4/imgFeature2.png";
import imgFeature3 from "../assets/bg.mp4/imgFeature3.jpg";
import imgFeature4 from "../assets/bg.mp4/imgFeature4.jpg";
import imgFeature15 from "../assets/bg.mp4/imgFeature15.jpg";
import imgFeature6 from "../assets/bg.mp4/imgFeature6.jpg";

function Home() {
  const navigate = useNavigate();

  const statsData = [
    { label: "Students", value: 500 },
    { label: "Courses", value: 50 },
    { label: "Instructors", value: 20 },
    { label: "Ongoing Courses", value: 15 },
    { label: "Incoming Courses", value: 10 },
    { label: "Projects Completed", value: 120 },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));
  const statsRef = useRef();

  useEffect(() => {
    let observer;
    if (statsRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            statsData.forEach((stat, i) => {
              let start = 0;
              const end = stat.value;
              const duration = 2000;
              const increment = end / (duration / 20);

              const counter = setInterval(() => {
                start += increment;
                if (start >= end) {
                  start = end;
                  clearInterval(counter);
                }
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[i] = Math.floor(start);
                  return newCounts;
                });
              }, 20);
            });
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(statsRef.current);
    }
    return () => observer && observer.disconnect();
  }, []);

  const coursesData = [
    { img: img1, title: "Web Development", progress: 45 },
    { img: img2, title: "Machine Learning", progress: 60 },
    { img: img3, title: "Data Structures", progress: 30 },
    { img: img4, title: "React Development", progress: 75 },
    { img: img5, title: "Python Programming", progress: 50 },
    { img: img6, title: "Cloud Computing", progress: 20 },
  ];

  const instructors = [
    { img: "https://via.placeholder.com/300x160?text=Instructor+1", name: "Alice Johnson", expertise: "Web Development" },
    { img: "https://via.placeholder.com/300x160?text=Instructor+2", name: "Bob Smith", expertise: "Data Science" },
    { img: "https://via.placeholder.com/300x160?text=Instructor+3", name: "Carol Lee", expertise: "Cloud Computing" },
  ];

  const testimonials = [
    { text: "LearnSphere transformed my career! Highly recommend.", author: "Ravi K." },
    { text: "Amazing courses and interactive content.", author: "Ananya S." },
    { text: "The instructors are very supportive and experienced.", author: "Mohit P." },
  ];

  return (
    <div className="home">
      {/* Navbar */}
      <header className="navbar">
  <div className="logo-box">
    <div className="logo-circle">L</div>
    <h2>LearnSphere</h2>
  </div>

  {/* ALL MENU ITEMS IN ONE LINE */}
  <div className="nav-right">

    <Link to="/" className="nav-item">Home</Link>
    <Link to="/courses" className="nav-item">Courses</Link>
    <Link to="/about" className="nav-item">About</Link>
    <Link to="/contact" className="nav-item">Contact</Link>

    <button className="login-btn" onClick={() => navigate("/login")}>
      Login
    </button>

    <button className="register-btn" onClick={() => navigate("/register")}>
      Register
    </button>

  </div>
</header>


      {/* Hero */}
      <section className="hero">
        <div className="floating-shapes">
          <span className="shape circle"></span>
          <span className="shape triangle"></span>
          <span className="shape square"></span>
        </div>
        <div className="hero-box">
          <h1 className="hero-title">Dream. Discover. Explore. Inspire.</h1>
          <p className="hero-sub">Learn anytime, anywhere. Build your skills with expert-led courses.</p>
          <button className="primary hero-btn" onClick={() => navigate("/courses")}>Browse Courses</button>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <h2 className="section-title">Transform Your Learning Experience</h2>
        <p className="about-sub">Build skills. Gain confidence. Shape your future.</p>
        <div className="about-box">
          <div className="about-card">Learn at your own pace with expert-designed content.</div>
          <div className="about-card">Track progress, earn certificates and grow professionally.</div>
          <div className="about-card">Industry focused courses with real projects.</div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats" ref={statsRef}>
        {statsData.map((stat, i) => (
          <div className="stat" key={i}>
            <h2>{counts[i]}+</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Features */}
      <div className="feature-cards">
        {[ [imgFeature1,"Online Courses","Access high-quality courses anytime."],
           [imgFeature2,"Track Progress","Monitor your learning journey easily."],
           [imgFeature3,"Certificates","Earn certificates after completion."],
           [imgFeature4,"Live Classes","Interact with instructors in real time."],
           [imgFeature15,"Projects","Build portfolio-ready projects."],
           [imgFeature6,"Flexible Learning","Learn anytime, anywhere."]
        ].map(([img,title,desc],i) => (
          <div className="card" key={i}>
            <img src={img} alt={title} className="feature-img"/>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      {/* Courses */}
      <section className="courses">
        <h2 className="section-title">Popular Courses</h2>
        <div className="course-list">
          {coursesData.map((course,i)=>(
            <div className="course-card" key={i}>
              <img src={course.img} alt={course.title}/>
              <h4>{course.title}</h4>
              <div className="progress-bar">
                <div className="progress" style={{width:`${course.progress}%`}}></div>
              </div>
              <p>{course.progress}% Complete</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instructors */}
      <section className="instructors">
        <h2 className="section-title">Meet Our Instructors</h2>
        <div className="instructor-list">
          {instructors.map((ins,i)=>(
            <div className="instructor-card" key={i}>
              <img src={ins.img} alt={ins.name}/>
              <h4>{ins.name}</h4>
              <p>{ins.expertise}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 className="section-title">What Students Say</h2>
        <div className="testimonial-list">
          {testimonials.map((t,i)=>(
            <div className="testimonial-card" key={i}>
              <p>"{t.text}"</p>
              <h5>- {t.author}</h5>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2 className="section-title">Start Your Learning Journey Today</h2>
        <p>Join thousands of learners and build your future.</p>
        <button className="primary" onClick={() => navigate("/register-student")}>Join Now</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h3>LearnSphere</h3>
            <p>LearnSphere is a modern LMS designed to help students learn smarter, faster, and better.</p>
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
        <p className="copyright">© 2026 LearnSphere. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
