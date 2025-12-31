import React, { useState } from "react";
import "./CourseCurriculum.css";

const curriculumData = [
  {
    id: 1,
    module: "Chapter 1",
    title: "Data",
    duration: "1.5 hrs",
    level: "Beginner",
    topics: [
      "Data - knowledge - information - insight – wisdom",
      "Why data is a gold mine",
      "Data Journey",
      "Data Analytics vs Data Engineering vs Data Science"
    ]
  },
  {
    id: 2,
    module: "Chapter 2",
    title: "Data Engineering Basics",
    duration: "3 hrs",
    level: "Beginner",
    topics: [
      "ETL Concepts",
        "ETL vs ELT",
        "Data Lake vs Data Warehouse",
        "Batch vs Streaming Processing"
    ]
  },
  {
    id: 3,
    module: "Chapter 3",
    title: "Cloud Introduction",
    duration: "4 hrs",
    level: "Beginner – Intermediate",
    topics: [
      "What does it mean",
       "Why it came into existence - evolution",
        "Common Principles",
        "Potential players - Amazon, Microsoft, Google"
    ]
  },
  {
    id: 4,
    module: "Chapter 4",
    title: "Pre-Requisite Technologies",
    duration: "4 hrs",
    level: "Beginner – Intermediate",
    topics: [
      "SQL",
      "Python Pandas",
      "Data Formats - CSV, Json, parquet, etc."
    ]
  },
  {
    id: 5,
    module: "Chapter 5",
    title: "Familiarity with AWS interface",
    duration: "3 hrs",
    level: "Intermediate",
    topics: [
      "AWS Console Tour",
      "Billing and Cost Monitoring",
      "CLI & SDK (Boto3)"
    ]
  },
  {
    id: 6,
    module: "Chapter 6",
    title: "Basic Pipeline - Creating your 1st Pipeline",
    duration: "3 hrs",
    level: "Intermediate",
    topics: [
      "S3 - CSV",
      "Amazon RDS + Query Editor",
      "Principles of data Engineering"
    ]
  },
  {
    id: 7,
    module: "Chapter 7",
    title: "Intermediate Pipeline - Scalability",
    duration: "2.5 hrs",
    level: "Intermediate",
    topics: [
      "Sources (RDS, CSV)",
      "Redshift - Large Scale Columnar DW",
      "Athena/ Redshift Spectrum - Query Services",
      "PowerBI - Visualization"
    ]
  },
  {
    id: 8,
    module: "Chapter 8",
    title: "Advanced Pipeline - Automation & Notification",
    duration: "5 hrs",
    level: "Intermediate",
    topics: [
      "Sources (RDS, CSV, Parquet)",
      "AWS Lambda Pipeline scripts - Serverless Solution",
      "AWS Redshift",
      "AWS Eventbridge - Orchestration (Timebased Event-based)",
      "AWS CloudWatch + SNS - Notification"
    ]
  },
  
  {
    id: 9,
    module: "Chapter 9",
    title: "Next Steps in Data Engineering",
    duration: "6 hrs",
    level: "Intermediate",
    topics: [
      "Big Data",
      "Corresponding services on Azure and GCP",
      "CI/CD"
    ]
  },
];

const CourseCurriculum = () => {
  const [activeId, setActiveId] = useState(curriculumData[0]?.id || null);

  const handleToggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="curriculum-section">
      <div className="curriculum-inner">
        <div className="curriculum-header">
          <p className="curriculum-kicker">Course Curriculum</p>
          <h2 className="curriculum-title">
            What you’ll learn in this program
          </h2>
          <p className="curriculum-intro">
            A structured, beginner-friendly roadmap that walks you from
            fundamentals to hands-on data projects. Each chapter builds on the
            previous one, with practical exercises and real-world context.
          </p>
        </div>

        <div className="curriculum-layout">
          {/* Left rail summary */}
          <div className="curriculum-summary-card">
            <h3>Program Snapshot</h3>
            <ul>
              <li>
                <span className="summary-label">Total Chapters</span>
                <span className="summary-value"> {curriculumData.length}</span>
              </li>
              <li>
                <span className="summary-label">Learning Mode</span>
                <span className="summary-value"> Live + Hands-on</span>
              </li>
              <li>
                <span className="summary-label">Capstone </span>
                <span className="summary-value">
                  Real dataset + presentation
                </span>
              </li>
            </ul>
            <p className="summary-note">
              ⭐ Designed for absolute beginners — no coding background required.
            </p>
          </div>

          {/* Right side accordion */}
          <div className="curriculum-accordion">
            {curriculumData.map((block) => {
              const isActive = block.id === activeId;
              return (
                <div
                  key={block.id}
                  className={`curriculum-item ${isActive ? "active" : ""}`}
                >
                  <button
                    className="curriculum-item-header"
                    onClick={() => handleToggle(block.id)}
                    type="button"
                  >
                    <div className="curriculum-item-left">
                      <span className="curriculum-module"> {block.module}</span>
                      <span className="curriculum-item-title">
                        {block.title}
                      </span>
                      <span className="curriculum-chip-level">
                        {block.level}
                      </span>
                    </div>

                    <div className="curriculum-item-meta">
                      <span className="curriculum-duration">
                        ⏱ {block.duration}
                      </span>
                      <span
                        className={`curriculum-toggle-icon ${
                          isActive ? "open" : ""
                        }`}
                      >
                        {isActive ? "–" : "+"}
                      </span>
                    </div>
                  </button>

                  {isActive && (
                    <div className="curriculum-item-body">
                      <ul className="curriculum-topic-list">
                        {block.topics.map((topic, idx) => (
                          <li key={idx}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCurriculum;
