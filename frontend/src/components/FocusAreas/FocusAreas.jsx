import React from "react";
import { Bot, Home, Zap } from "lucide-react";
import "./FocusAreas.css";

const focusAreas = [
  {
    id: 1,
    title: "AI & Product Focus",
    description:
      "Build real AI products, launch on Product Hunt, and get paying customers.",
    IconComponent: Bot,
    metrics: [
      { value: "150+ hrs", label: "AI Curriculum" },
      { value: "25+", label: "AI Tools" },
      { value: "Build", label: "AI Agents" },
    ],
  },
  {
    id: 2,
    title: "In-house Incubator",
    description:
      "Build your own startup and get incubated at Mesa with funding.",
    IconComponent: Home,
    metrics: [
      { value: "₹5 Cr", label: "Startup Fund" },
      { value: "1:1", label: "Mentorship" },
      { value: "50+", label: "VCs" },
    ],
  },
  {
    id: 3,
    title: "Sales by Doing Sales",
    description:
      "Achieve real revenue through hands-on B2B and D2C sales challenges.",
    IconComponent: Zap,
    metrics: [
      { value: "D2C", label: "Sales" },
      { value: "B2B", label: "Sprints" },
      { value: "Real", label: "Revenue" },
    ],
  },
];

const FocusAreas = () => {
  return (
    <section className="focus-areas-section">
      <div className="focus-areas-wrapper">
        <div className="focus-areas-section-main">
          <h2 className="focus-heading">Specialized Focus Areas</h2>
          <p className="focus-subheading">
            Experience-driven learning designed to help you build, launch, and
            scale real-world products.
          </p>

          <div className="focus-cards-container">
            {focusAreas.map((area) => (
              <div className="focus-card" key={area.id}>
                <div className="card-header">
                  <area.IconComponent className="card-icon" />
                  <h3 className="card-title">{area.title}</h3>
                </div>

                <p className="card-description">{area.description}</p>

                <div className="card-metrics">
                  {area.metrics.map((metric, idx) => (
                    <div className="metric-item" key={idx}>
                      <span className="metric-value">{metric.value}</span>
                      <span className="metric-label">{metric.label}</span>
                    </div>
                  ))}
                </div>

                <button className="card-cta">Know More</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
