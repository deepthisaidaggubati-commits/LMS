import React from "react";

function LoginStudent() {
  return (
    <div className="page">
      <div className="card">
        <h2>Student Login</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Login</button>
      </div>
    </div>
  );
}

export default LoginStudent;
