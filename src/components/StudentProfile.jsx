import React, { useState } from "react";
import "./StudentProfile.css";

const StudentProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <>
            <h2 className="page-title">👤 My Profile</h2>
            <div className="completion">
              <span>Profile Completion: 0%</span>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>

            <div className="profile-header">
              <div className="profile-pic">
                <span>Photo</span>
              </div>

              <div className="profile-info">
                <p><strong>Name:</strong> —</p>
                <p><strong>Student ID:</strong> —</p>
                <p><strong>Program:</strong> —</p>
                <p><strong>Status:</strong> —</p>
              </div>
            </div>

            <div className="cards">
              <div className="card">
                <h3>—</h3>
                <p>Completed Courses</p>
              </div>
              <div className="card">
                <h3>—</h3>
                <p>Registered Courses</p>
              </div>
              <div className="card">
                <h3>—</h3>
                <p>Total Credits</p>
              </div>
            </div>

            {/* Registered Courses Table */}
            <div className="section">
              <h3>Registered Courses</h3>
              <table>
                <thead>
                  <tr>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Schedule</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="4" className="empty-row">
                      No courses registered yet
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

    
            <div className="section">
              <h3>Attendance</h3>
              <div className="attendance">
                <p><strong>Attendance:</strong> —%</p>
                <p><strong>Missed Classes:</strong> —</p>
              </div>
            </div>
          </>
        );

      case "courses":
        return (
          <div className="section">
            <h3>My Courses</h3>
            <table>
              <thead>
                <tr>
                  <th>Course Code</th>
                  <th>Course Name</th>
                  <th>Schedule</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4" className="empty-row">
                    No courses registered yet
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "attendance":
        return (
          <div className="section">
            <h3>Attendance Records</h3>
            <div className="attendance-stats">
              <p><strong>Overall Attendance:</strong> —%</p>
              <p><strong>Total Classes:</strong> —</p>
              <p><strong>Classes Attended:</strong> —</p>
              <p><strong>Classes Missed:</strong> —</p>
            </div>
            
            <div className="section" style={{ marginTop: "20px" }}>
              <h3>Course-wise Attendance</h3>
              <table>
                <thead>
                  <tr>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Attendance</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="4" className="empty-row">
                      No attendance records available
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case "grades":
        return (
          <div className="section">
            <h3>Academic Performance</h3>
            <div className="gpa-info">
              <p><strong>Current GPA:</strong> —</p>
              <p><strong>Cumulative GPA:</strong> —</p>
            </div>

            <div className="section" style={{ marginTop: "20px" }}>
              <h3>Course Grades</h3>
              <table>
                <thead>
                  <tr>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Grade</th>
                    <th>Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="4" className="empty-row">
                      No grades available yet
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case "logout":
        return (
          <div className="section">
            <h3>Logout</h3>
            <p>Are you sure you want to logout?</p>
            <button className="logout-btn">Confirm Logout</button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li 
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </li>
          <li 
            className={activeTab === "courses" ? "active" : ""}
            onClick={() => setActiveTab("courses")}
          >
            Courses
          </li>
          <li 
            className={activeTab === "attendance" ? "active" : ""}
            onClick={() => setActiveTab("attendance")}
          >
            Attendance
          </li>
          <li 
            className={activeTab === "grades" ? "active" : ""}
            onClick={() => setActiveTab("grades")}
          >
            Grades
          </li>
          <li 
            className={activeTab === "logout" ? "active" : ""}
            onClick={() => setActiveTab("logout")}
          >
            Logout
          </li>
        </ul>
      </aside>

    
      <main className="main">
        {renderContent()}
      </main>
    </div>
  );
};

export default StudentProfile;
