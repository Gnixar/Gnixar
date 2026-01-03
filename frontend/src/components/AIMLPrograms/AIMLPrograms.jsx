import React from "react";
import { useNavigate } from "react-router-dom";
import './AIMLPrograms.css'

const PROGRAMS = [
  {
    id: 1,
    title: "Advanced Certification Program in AIML",
    logo: "/logo.png",
    image: "/AIML.png",
    startDate: "15 Jan 2026",
    duration: "3 Months",
    mode: "Online",
    route: "/aiml/advanced-aiml",
  },
  {
    id: 2,
    title: "Advanced AI & Deep Learning",
    logo: "/logo.png",
    image: "/commingsoon.png",
    startDate: "01 Feb 2026",
    duration: "4 Months",
    mode: "Online Live",
    route: "/programs/aiml/advanced",
  },
];

const AIMLPrograms = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="aiml-page">
        <header className="aiml-header">
          <h1>AI & Machine Learning Programs</h1>
          <p>
            Become a job-ready AI & Machine Learning professional with hands-on
            projects, structured learning paths, and expert mentorship.
          </p>
        </header>

        <section className="aiml-programs">
          {PROGRAMS.map((program) => (
            <div key={program.id} className="program-card">
              <div className="program-image-wrapper">
                <img
                  src={program.image}
                  alt={program.title}
                  className="program-image"
                />

                <div className="program-overlay">
                  <button
                    className="register-btn"
                    onClick={() => navigate(program.route)}
                  >
                    Register Now
                  </button>
                </div>
              </div>

              <div className="program-content">
                <div className="program-header">
                  <div className="program-logo-wrapper">
                    <img
                      src={program.logo}
                      alt={`${program.title} logo`}
                      className="program-logo"
                    />
                  </div>
                  <h2 className="program-title">{program.title}</h2>
                </div>

                <div className="program-meta">
                  <div className="meta-item">
                    <span className="meta-label">Start Date</span>
                    <span className="meta-value">{program.startDate}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Duration</span>
                    <span className="meta-value">{program.duration}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Mode</span>
                    <span className="meta-value">{program.mode}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default AIMLPrograms;
