import React from "react";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import "../styles/navbar.css";

export default function Navbar() {
  const location = useLocation();
  const marketingPaths = ["/", "/features", "/benefits", "/contact"];
  const isMarketingPage = marketingPaths.includes(location.pathname);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link className="logo" to="/">
          Harmony Bank
        </Link>
      </div>

      <div className="nav-links">
        {isMarketingPage ? (
          <>
            <Link to="/features">Features</Link>
            <Link to="/benefits">Benefits</Link>
            <Link to="/contact">Contact</Link>
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>

      <div className="nav-actions">
        <Link className="nav-text-link" to="/login">
          Log in
        </Link>
        <Link className="nav-cta" to="/signup">
          Open Account
        </Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
}
