import React from "react";

function LoginAdmin() {
  return (
    <div className="page">
      <div className="card">
        <h2>Admin Login</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Login</button>
      </div>
    </div>
  );
}

export default LoginAdmin;
