import React from "react";

function RegisterStudent() {
  return (
    <div className="page">
      <div className="card">
        <h2>Student Register</h2>

        <input placeholder="Name" />
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Register</button>
      </div>
    </div>
  );
}

export default RegisterStudent;
