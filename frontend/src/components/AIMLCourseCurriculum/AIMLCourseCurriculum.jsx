import React, { useState } from "react";
import "./AIMLCourseCurriculum.css";

const curriculumData = [
  {
    id: 1,
    module: "Chapter 1",
    title: "Introduction to AI, ML & Python Basics",
    duration: "3 hrs",
    level: "Beginner",
    topics: [
      "Session 1: Introduction to Artificial Intelligence & Machine Learning",
      "Session 2: Python Basics",
      "Session 3: Python Packages & Environment Setup"
    ]
  },
  {
    id: 2,
    module: "Chapter 2",
    title: "Python Language Fundamentals",
    duration: "3 hrs",
    level: "Beginner",
    topics: [
      "Session 4: Variables & Identifiers",
      "Session 5: Keywords & Comments",
      "Session 6: Operators",
      "Session 7: Conditional Statements",
      "Session 8: Loops"
    ]
  },
  {
    id: 3,
    module: "Chapter 3",
    title: "Python Data Structures",
    duration: "3 hrs",
    level: "Beginner",
    topics: [
      "Session 9: Lists",
      "Session 10: Tuples",
      "Session 11: Dictionaries",
      "Session 12: Sets"
    ]
  },
  {
    id: 4,
    module: "Chapter 4",
    title: "Functions & Core Python Concepts",
    duration: "3 hrs",
    level: "Beginner",
    topics: [
      "Session 13: User Defined Functions",
      "Session 14: Built-in Functions",
      "Session 15: Lambda Functions",
      "Session 16: Comprehensions",
      "Session 17: File Handling",
      "Session 18: Exception Handling"
    ]
  },
  {
    id: 5,
    module: "Chapter 5",
    title: "NumPy Fundamentals",
    duration: "3 hrs",
    level: "Beginner",
    topics: [
      "Session 19: NumPy Introduction",
      "Session 20: Arrays & NumPy Functions"
    ]
  },
  {
    id: 6,
    module: "Chapter 6",
    title: "Advanced NumPy",
    duration: "2.5 hrs",
    level: "Beginner – Intermediate",
    topics: [
      "Session 21: NumPy Operations",
      "Session 22: Statistics, Reshape & Random Module"
    ]
  },
  {
    id: 7,
    module: "Chapter 7",
    title: "Pandas Fundamentals",
    duration: "3 hrs",
    level: "Beginner",
    topics: [
      "Session 23: Pandas Series",
      "Session 24: DataFrames & Indexing"
    ]
  },
  {
    id: 8,
    module: "Chapter 8",
    title: "Data Analysis with Pandas",
    duration: "3 hrs",
    level: "Beginner – Intermediate",
    topics: [
      "Session 25: Data Reading & EDA",
      "Session 26: Missing Values, Joins & Merges"
    ]
  },
  {
    id: 9,
    module: "Chapter 9",
    title: "Data Visualization",
    duration: "3 hrs",
    level: "Beginner",
    topics: [
      "Session 27: Matplotlib",
      "Session 28: Seaborn – Advanced Visualization"
    ]
  },
  {
    id: 10,
    module: "Chapter 10",
    title: "Statistics Fundamentals",
    duration: "3 hrs",
    level: "Beginner",
    topics: [
      "Session 29: Statistics Basics & Sampling Techniques",
      "Session 30: Variables & Types of Data"
    ]
  },
  {
    id: 11,
    module: "Chapter 11",
    title: "Descriptive Statistics",
    duration: "3 hrs",
    level: "Beginner",
    topics: [
      "Session 31: Central Tendency & Dispersion",
      "Session 32: Quartiles, Percentiles & Outliers"
    ]
  },
  {
    id: 12,
    module: "Chapter 12",
    title: "Inferential Statistics",
    duration: "3 hrs",
    level: "Intermediate",
    topics: [
      "Session 33: Normal Distribution & CLT",
      "Session 34: Correlation Analysis"
    ]
  },
  {
    id: 13,
    module: "Chapter 13",
    title: "Hypothesis Testing & Regression",
    duration: "3 hrs",
    level: "Intermediate",
    topics: [
      "Session 35: Hypothesis Testing",
      "Session 36: Regression Basics"
    ]
  },
  {
    id: 14,
    module: "Chapter 14",
    title: "Database Fundamentals",
    duration: "3 hrs",
    level: "Beginner",
    topics: [
      "Session 37: Database Concepts",
      "Session 38: Relational Databases"
    ]
  },
  {
    id: 15,
    module: "Chapter 15",
    title: "Database Design & SQL",
    duration: "4 hrs",
    level: "Beginner – Intermediate",
    topics: [
      "Session 39: Normalization, ER Diagrams & ACID",
      "Session 40: MySQL Setup & Data Types",
      "Session 41: CRUD Operations",
      "Session 42: Keys, Joins & Subqueries"
    ]
  },
  {
    id: 16,
    module: "Chapter 16",
    title: "Machine Learning Foundations",
    duration: "4 hrs",
    level: "Intermediate",
    topics: [
      "Session 43: Machine Learning Concepts & Types",
      "Session 44: Scikit-Learn, Bias–Variance & ML Workflow"
    ]
  }
];

const AIMLCourseCurriculum = () => {
  const [activeId, setActiveId] = useState(curriculumData[0]?.id || null);

  const handleToggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="aiml1-curriculum-section">
      <div className="aiml1-curriculum-inner">
        <div className="aiml1-curriculum-header">
          <p className="aiml1-curriculum-kicker">Course Curriculum</p>
          <h2 className="aiml1-curriculum-title">
            What you’ll learn in this program
          </h2>
          <p className="aiml1-curriculum-intro">
            A complete end-to-end Artificial Intelligence & Machine Learning
            roadmap with Python, Statistics, SQL, and Machine Learning.
          </p>
        </div>

        <div className="aiml1-curriculum-layout">
          <div className="aiml1-curriculum-summary-card">
            <h3>Program Snapshot</h3>
            <ul>
              <li>
                <span className="aiml1-summary-label">Total Sessions </span>
                <span className="aiml1-summary-value">44</span>
              </li>
              <li>
                <span className="aiml1-summary-label">Learning Mode </span>
                <span className="aiml1-summary-value">Live + Hands-on</span>
              </li>
              <li>
                <span className="aiml1-summary-label">Capstone </span>
                <span className="aiml1-summary-value">
                  End-to-End ML Project
                </span>
              </li>
            </ul>
            <p className="aiml1-summary-note">
              ⭐ Structured for beginners with strong industry relevance.
            </p>
          </div>

          <div className="aiml1-curriculum-accordion">
            {curriculumData.map((block) => {
              const isActive = block.id === activeId;
              return (
                <div
                  key={block.id}
                  className={`aiml1-curriculum-item ${
                    isActive ? "aiml1-active" : ""
                  }`}
                >
                  <button
                    className="aiml1-curriculum-item-header"
                    onClick={() => handleToggle(block.id)}
                    type="button"
                  >
                    <div className="aiml1-curriculum-item-left">
                      <span className="aiml1-curriculum-module">
                        {block.module}
                      </span>
                      <span className="aiml1-curriculum-item-title">
                        {block.title}
                      </span>
                      <span className="aiml1-curriculum-chip-level">
                        {block.level}
                      </span>
                    </div>

                    <div className="aiml1-curriculum-item-meta">
                      <span className="aiml1-curriculum-duration">
                        ⏱ {block.duration}
                      </span>
                      <span
                        className={`aiml1-curriculum-toggle-icon ${
                          isActive ? "aiml1-open" : ""
                        }`}
                      >
                        {isActive ? "–" : "+"}
                      </span>
                    </div>
                  </button>

                  {isActive && (
                    <div className="aiml1-curriculum-item-body">
                      <ul className="aiml1-curriculum-topic-list">
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

export default AIMLCourseCurriculum;
