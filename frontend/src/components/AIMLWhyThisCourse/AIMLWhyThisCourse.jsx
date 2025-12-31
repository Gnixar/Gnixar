import React from "react";
import "./AIMLWhyThisCourse.css";

function AIMLWhyThisCourse() {
  return (
    <section className="aiml1-why-section">
      <div className="aiml1-why-inner">
        {/* Left: copy */}
        <header className="aiml1-why-header">
          <p className="aiml1-why-kicker">Why Should You Do This Course?</p>

          <h2 className="aiml1-why-title">
            Move from basic coding
            <span className="aiml1-why-title-highlight">
              {" "}
              to intelligent AI & ML systems
            </span>
          </h2>

          <p className="aiml1-why-intro">
            Many learners associate Artificial Intelligence and Machine Learning
            with complex math or black-box models — but that’s only part of the story.
            This program is designed to take you from fundamentals to building
            real, explainable, and scalable AI systems.
          </p>

          <p className="aiml1-why-intro">
            By the end of the program, you’ll not only understand how ML models work,
            but also how to train, evaluate, deploy, and improve intelligent systems
            that drive real-world decisions.
          </p>
        </header>

        {/* Right: themed “reason” card stack */}
        <div className="aiml1-why-card">
          <div className="aiml1-why-card-header">
            <div className="aiml1-why-card-icon-orbit">
              <span className="aiml1-why-card-icon-dot" />
              <span className="aiml1-why-card-icon-ring" />
            </div>
            <div>
              <h3 className="aiml1-why-card-title">
                What this course helps you become
              </h3>
              <p className="aiml1-why-card-subtitle">
                Not just a coder, but an AI-ready Machine Learning professional.
              </p>
            </div>
          </div>

          <ul className="aiml1-why-list">
            <li className="aiml1-why-list-item">
              <span className="aiml1-why-list-bullet" />
              <div>
                <h4 className="aiml1-why-list-label">
                  From rules to learning systems
                </h4>
                <p className="aiml1-why-list-text">
                  Learn how machines learn from data instead of relying on
                  hard-coded rules and manual logic.
                </p>
              </div>
            </li>

            <li className="aiml1-why-list-item">
              <span className="aiml1-why-list-bullet" />
              <div>
                <h4 className="aiml1-why-list-label">
                  Think like an ML engineer
                </h4>
                <p className="aiml1-why-list-text">
                  Understand data preparation, feature engineering, model training,
                  evaluation, and optimization used in real AI workflows.
                </p>
              </div>
            </li>

            <li className="aiml1-why-list-item">
              <span className="aiml1-why-list-bullet" />
              <div>
                <h4 className="aiml1-why-list-label">
                  Built for real-world AI applications
                </h4>
                <p className="aiml1-why-list-text">
                  Every concept is tied to practical use-cases such as prediction,
                  classification, recommendation, and intelligent automation.
                </p>
              </div>
            </li>
          </ul>

          <div className="aiml1-why-footnote">
            <span className="aiml1-why-footnote-dot" />
            <p>
              Ideal for students, professionals, and career switchers who want to
              build skills in{" "}
              <span className="aiml1-why-footnote-strong">
                Artificial Intelligence & Machine Learning
              </span>,
              not just theoretical knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIMLWhyThisCourse;
