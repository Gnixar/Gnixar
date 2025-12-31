import React from "react";
import { useNavigate } from "react-router-dom";
import "./DSFHeading.css";

const DSFHeading = () => {
  const navigate = useNavigate();

  const course = {
    title: "Data Science Foundation Program",
    provider: "Study Now, Pay Later with Gnixar",
    logo: "/logo.png", 
  };

  return (
    <div className="course-main">
      <div className="course-header">
        <div className="course-header-left">
          <div className="course-logo-wrapper">
            <img
              src={course.logo}
              alt={`${course.title} logo`}
              className="course-logo"
            />
          </div>

          <div className="course-text">
            <p className="course-provider">{course.provider}</p>
            <h1 className="course-title">{course.title}</h1>
          </div>
        </div>

        <div className="course-header-right">
          <button
            className="course-register-btn"
            onClick={() => navigate("/register")}
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DSFHeading;
