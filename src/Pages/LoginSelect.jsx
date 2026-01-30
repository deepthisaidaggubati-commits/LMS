import React from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function LoginSelect() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="card">
        <h2>Login As</h2>

        <button onClick={() => navigate("/login-student")}>
          Student
        </button>

        <button onClick={() => navigate("/login-admin")}>
          Admin
        </button>
      </div>
    </div>
  );
}

export default LoginSelect;
