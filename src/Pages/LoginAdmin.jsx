import React from "react";
import "./Auth.css";

function LoginAdmin() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Admin Login Successful ✅");
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Admin Login</h2>

        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginAdmin;
