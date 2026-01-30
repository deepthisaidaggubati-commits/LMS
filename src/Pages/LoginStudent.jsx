import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function LoginStudent() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary validation (replace with backend later)
    if (email && password) {
      alert("Student Login Successful ✅");
      navigate("/student-dashboard");   // 🔥 Redirect here
    } else {
      alert("Please enter all details");
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Student Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginStudent;

