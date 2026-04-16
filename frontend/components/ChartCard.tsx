import React from "react";
import "../styles/ChartCard.css";

interface ChartCardProps {
  title: string;
  value: string;
}

export default function ChartCard({ title, value }: ChartCardProps) {
  return (
    <div className="chart-card">
      <h3>{title}</h3>
      <p>{value}</p>
      <div className="chart-placeholder">Chart goes here</div>
    </div>
  );
}
