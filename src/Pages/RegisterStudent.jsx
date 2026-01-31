import React from "react";
import "./Auth.css";

function RegisterStudent() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Student Registration Successful ✅");
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Student Register</h2>

        <form onSubmit={handleSubmit}>
          <input placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterStudent;
