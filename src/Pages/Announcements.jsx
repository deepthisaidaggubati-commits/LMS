import React from "react";
import "./Auth.css"; 

function Announcements() {
  const announcements = [
    {
      title: "Enrollment for New Batch",
      date: "12 Feb 2026",
      message: "Enrollment for new courses started."
    },
    {
      title: "New Course Added",
      date: "08 Feb 2026",
      message: "AI & Machine Learning course is now available."
    },
    {
      title: "IMP Notice",
      date: "02 Feb 2026",
      message: "MERN stack course enrollment is being closed."
    }
  ];

  return (
    <div className="container">
      <div className="main">
        <h2>📢 Announcements</h2>

        <div className="cards">
          {announcements.map((a, i) => (
            <div key={i} className="card glass">
              <h3>{a.title}</h3>
              <p style={{ opacity: 0.7 }}>{a.date}</p>
              <p>{a.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Announcements;
