import React from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function LoginSelect() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="card">
        <h2>Login</h2>

        <button onClick={() => navigate("/register-student")}>
          Student
        </button>

        <button onClick={() => navigate("/register-admin")}>
          Admin
        </button>
      </div>
    </div>
  );
}

export default LoginSelect;