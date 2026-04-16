import React from "react";
import Navbar from "../components/Navbar";
import "../styles/login.css";

export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="auth-container">
        <div className="auth-card">
          <h1>Login</h1>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}
