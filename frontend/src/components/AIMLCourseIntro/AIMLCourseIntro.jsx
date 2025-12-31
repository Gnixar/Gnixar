import React from "react";
import { Cpu, Layers, Code } from "lucide-react";

const FEATURES = [
  {
    id: 1,
    icon: Cpu,
    title: "Industry-Grade AI & ML Projects",
    description:
      "Work on real-world Artificial Intelligence and Machine Learning projects to build a strong, job-ready portfolio."
  },
  {
    id: 2,
    icon: Layers,
    title: "Expert-Led Mentorship",
    description:
      "Learn directly from experienced AI & ML professionals working in top product and tech companies."
  },
  {
    id: 3,
    icon: Code,
    title: "Career & Placement Support",
    description:
      "Get end-to-end career support including resume building, interview preparation, and placement guidance."
  },
];

const AIMLCourseIntro = () => {
  return (
    <section className="course-intro">
      <div className="course-card">
        {/* HEADER */}
        <div className="intro-header">
          <h1>
            Artificial Intelligence & Machine Learning
          </h1>
          <p>
            GNIXAR’s Advanced AI & ML Certification Program is designed to help you
            master cutting-edge technologies through hands-on learning, expert mentorship,
            and real-world problem solving — making you industry-ready from day one.
          </p>
        </div>

        {/* FEATURES */}
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

export default AIMLCourseIntro;
