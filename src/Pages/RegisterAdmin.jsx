import React from "react";
import "./Auth.css"
function RegisterStudent() {

  const handleSubmit = (e) => {
    e.preventDefault();   
    alert("Student Registered Successfully ✅");
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Student Register</h2>

        <form onSubmit={handleSubmit}>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterStudent;
