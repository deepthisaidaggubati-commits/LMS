import React from "react";
import conBg from "../assets/bg.mp4/conbg.mp4";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      {/* 🎥 Background Video */}
      <video className="contact-video" autoPlay loop muted playsInline>
        <source src={conBg} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="contact-overlay"></div>

      <section className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          Have questions or need support? We’re always here for you.
        </p>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>📍 Get in Touch</h3>

            <p><strong>Email:</strong> support@lmsportal.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Location:</strong> India</p>
            <p><strong>Office Hours:</strong> Mon – Fri (9 AM – 6 PM)</p>
            <p><strong>Support:</strong> Student & Admin Assistance</p>

            <div className="social-links">
              <span>🌐 Follow Us</span>
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="#">Instagram</a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
