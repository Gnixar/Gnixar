import React from "react";
import {useNavigate} from "react-router-dom";
import CourseIntro from "../CourseIntro/CourseIntro.jsx";
import "./DataSciencePage.css";
import Navbar from "../../../../components/Navbar/Navbar.jsx";

const PROGRAMS = [
  {
    id: 1,
    title: "Data Science Foundation Program",
    logo: "/logo.png",          // <-- change path as needed
    image: "/DataScience.png",  // <-- change path as needed
    startDate: "15 Jan 2026",
    duration: "3 Months",
    mode: "Online",
  },
  {
    id: 2,
    title: "Advanced Machine Learning",
    logo: "/logo.png",
    image: "/commingsoon.png",
    startDate: "01 Feb 2026",
    duration: "4 Months",
    mode: "Online Live",
  },
  {
    id: 2,
    title: "Advanced Machine Learning",
    logo: "/logo.png",
    image: "/commingsoon.png",
    startDate: "01 Feb 2026",
    duration: "4 Months",
    mode: "Online Live",
  },
  
  
];

const DataSciencePage = () => {
  const navigate = useNavigate(); 

  return (
    <>
    <Navbar />
      <CourseIntro />
      <div className="ds-page">
        <header className="ds-header">
          <h1>Data Science Programs</h1>
          <p>
            Become a job-ready Data Scientist with hands-on projects,
            structured learning paths and expert mentorship.
          </p>
        </header>

        <section className="ds-programs">
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
                    onClick={() => navigate("/data-science/foundation")}  
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

export default DataSciencePage;
