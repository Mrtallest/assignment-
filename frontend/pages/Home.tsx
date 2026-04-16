import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/home.css";

const features = [
  {
    title: "Secure Banking",
    description:
      "Your accounts are protected with strong encryption and real-time fraud checks."
  },
  {
    title: "Fast Transfers",
    description:
      "Send money quickly between accounts and manage payments with no stress."
  },
  {
    title: "Simple Dashboard",
    description:
      "See your balance, track transactions, and stay in control from one place."
  }
];

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const sectionByPath: Record<string, string> = {
      "/features": "features",
      "/benefits": "benefits"
    };

    const sectionId = sectionByPath[location.pathname];
    if (!sectionId) {
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.pathname]);

  return (
    <div className="landing-page">
      <Navbar />

      <main className="landing-main">
        <section className="hero-section">
          <p className="eyebrow">Welcome to Harmony Bank</p>
          <h1>Simple, Secure Banking for Everyday Life.</h1>
          <p className="hero-subtitle">
            Harmony Bank helps you save, spend, and manage your money with
            confidence. Built for speed, designed for clarity.
          </p>
          <div className="hero-actions">
            <Link className="primary-btn" to="/signup">
              Open an Account
            </Link>
            <Link className="secondary-btn" to="/login">
              Log In
            </Link>
          </div>
        </section>

        <section className="stats-section" id="benefits">
          <article className="stat-card">
            <h3>99.99%</h3>
            <p>Platform Uptime</p>
          </article>
          <article className="stat-card">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </article>
          <article className="stat-card">
            <h3>500k+</h3>
            <p>Active Customers</p>
          </article>
        </section>

        <section className="features-section" id="features">
          <h2>Why Choose Harmony Bank?</h2>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section" id="contact">
          <h2>Ready to Get Started?</h2>
          <p>Join Harmony Bank today and experience modern banking made simple.</p>
          <Link className="primary-btn" to="/signup">
            Create Free Account
          </Link>
        </section>
      </main>

      <footer className="footer">
        <p>Harmony Bank</p>
        <span>Simple banking you can trust.</span>
      </footer>
    </div>
  );
}
