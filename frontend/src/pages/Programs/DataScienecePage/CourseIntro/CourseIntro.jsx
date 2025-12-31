import React from "react";
import { Cpu, Layers, Code, Users } from "lucide-react";
import "./CourseIntro.css";

const FEATURES = [
  {
    id: 1,
    icon: Cpu,
    title: "Hands-on Projects",
    description: "Real-world data science projects to build a strong portfolio."
  },
  {
    id: 2,
    icon: Layers,
    title: "Expert Mentorship",
    description: "Learn from industry professionals and experienced mentors."
  },
  {
    id: 3,
    icon: Code,
    title: "Career Support",
    description: "Resume building, interview prep, and career guidance."
  },
];

const CourseIntro = () => {
  return (
    <section className="course-intro">
      <div className="course-card">
        <div className="intro-header">
          <h1>Data Science Program by GNIXAR</h1>
          <p>
            GNIXAR provides a comprehensive Data Science curriculum designed to make you job-ready.
            Learn with hands-on projects, expert mentorship, career support, and a strong community.
          </p>
        </div>

        <div className="features-list">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} className="feature-item">
                <div className="feature-icon-wrapper">
                  {Icon && <Icon className="feature-icon" size={28} />}
                </div>
                <div className="feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseIntro;
