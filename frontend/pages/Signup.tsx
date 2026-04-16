import React from "react";
import Navbar from "../components/Navbar";
import "../styles/login.css";

export default function Signup() {
  return (
    <div>
      <Navbar />
      <div className="auth-container">
        <div className="auth-card">
          <h1>Sign Up</h1>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
