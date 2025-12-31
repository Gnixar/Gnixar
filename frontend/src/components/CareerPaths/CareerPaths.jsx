import React from "react";
import "./CareerPaths.css";

const careerPaths = [
  "AWS Data Engineer / Cloud Data Architect",
  "Data Analyst / Business Intelligence Analyst",
  "Data Visualization Engineer / BI Developer",
  "Analytics Engineer / Reporting Specialist",
  "DataOps / Automation Engineer",
  "Multi-Cloud Solution Architect",
  "Big Data Engineer (Spark, EMR, Databricks)",
  "Cloud Integration Engineer (ETL / ELT)",
  "Data Platform Administrator",
  "Machine Learning Data Pipeline Engineer",
];

function CareerPaths() {
  return (
    <section className="career-section">
      <div className="career-inner">
        {/* LEFT: copy + narrative */}
        <div className="career-copy">
          <p className="career-kicker">Potential Career Paths</p>

          <h2 className="career-title">
            Shape a{" "}
            <span className="career-title-highlight">
              high-growth, cloud-first data career
            </span>
          </h2>

          <p className="career-intro">
            This program is designed to open doors across the analytics and
            cloud data ecosystem — from hands-on engineering roles to
            architecture and platform ownership.
          </p>

          <p className="career-intro">
            Whether you&apos;re coming from a reporting background or starting
            fresh, the blend of data engineering, analytics, and automation
            skills you gain here maps directly to multiple high-impact roles.
          </p>

          <p className="career-conclusion">
            In essence, this course positions you not just for your first job,
            but for a sustainable, high-growth career in data analytics, cloud
            engineering, and enterprise solution architecture — fields where the
            demand for skilled, cloud-ready professionals continues to surge
            globally.
          </p>
        </div>

        {/* RIGHT: career grid */}
        <div className="career-card">
          <div className="career-card-header">
            <div className="career-card-pill">Roles you can target</div>
            <h3 className="career-card-title">
              Cloud & data careers unlocked by this program
            </h3>
            <p className="career-card-subtitle">
              Each role leverages a different slice of your skills across data
              engineering, analytics, and automation.
            </p>
          </div>

          <div className="career-grid-wrapper">
            <div className="career-rail" />
            <div className="career-grid">
              {careerPaths.map((path, index) => (
                <div className="career-pill" key={path}>
                  <div className="career-pill-badge">
                    <span className="career-pill-dot" />
                    <span className="career-pill-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="career-pill-label">{path}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="career-footnote">
            <span className="career-footnote-glow" />
            <p>
              As you grow, you can evolve from{" "}
              <span className="career-footnote-strong">
                hands-on implementer to platform owner or architect
              </span>
              , guiding end-to-end cloud data solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerPaths;
