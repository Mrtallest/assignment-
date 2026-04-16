import React from "react";
import "../styles/featureCard.css";

interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="feature-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}