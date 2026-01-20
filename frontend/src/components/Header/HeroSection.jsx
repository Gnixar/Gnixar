import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero" id="header">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight-blue">Study Now,</span> <br />
            <span className="highlight-yellow">Pay Later</span>
          </h1>

          <p className="hero-subtitle">
            Welcome to Gnixar — your one-stop destination for cutting-edge
            courses, expert mentors, and career-focused learning paths. Upskill
            and achieve your dreams!
          </p>

          <button className="hero-cta">
            <a href="#programs-page">Explore Courses</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
