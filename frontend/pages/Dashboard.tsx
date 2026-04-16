import React from "react";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";
import ChartCard from "../components/ChartCard";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <h1>Welcome back</h1>

        <div className="cards">
          <div className="card">
            <h3>Account Balance</h3>
            <p>NGN 1,250,000.00</p>
          </div>

          <div className="card">
            <h3>Savings</h3>
            <p>NGN 540,000.00</p>
          </div>

          <div className="card">
            <h3>Transactions</h3>
            <p>24 this month</p>
          </div>
        </div>

        <h2 style={{ marginTop: "3rem" }}>Analytics</h2>
        <div className="cards">
          <ChartCard title="Income" value="NGN 2,400,000.00" />
          <ChartCard title="Expenses" value="NGN 1,200,000.00" />
          <ChartCard title="Investments" value="NGN 500,000.00" />
        </div>
      </div>
    </div>
  );
}
