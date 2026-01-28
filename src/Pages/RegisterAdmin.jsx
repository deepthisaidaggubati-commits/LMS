import React from "react";

function RegisterAdmin() {
  return (
    <div className="page">
      <div className="card">
        <h2>Admin Register</h2>

        <input placeholder="Name" />
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Register</button>
      </div>
    </div>
  );
}

export default RegisterAdmin;
