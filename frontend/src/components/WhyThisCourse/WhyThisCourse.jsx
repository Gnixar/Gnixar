import React from "react";
import "./WhyThisCourse.css";

function WhyThisCourse() {
  return (
    <section className="why-section">
      <div className="why-inner">
        {/* Left: copy */}
        <header className="why-header">
          <p className="why-kicker">Why Should You Do This Course?</p>

          <h2 className="why-title">
            Move from manual reporting
            <span className="why-title-highlight">
              {" "}
              to enterprise-grade cloud analytics
            </span>
          </h2>

          <p className="why-intro">
            Most people associate data analytics with basic reporting or
            spreadsheet work — but that only scratches the surface. This
            course is designed to move you far beyond manual data handling
            into the world of enterprise-grade cloud analytics.
          </p>

          <p className="why-intro">
            By the end of the program, you’ll not only know how to analyze
            data, but also how to engineer and automate data systems that power
            real business decisions at scale.
          </p>
        </header>

        {/* Right: themed “reason” card stack */}
        <div className="why-card">
          <div className="why-card-header">
            <div className="why-card-icon-orbit">
              <span className="why-card-icon-dot" />
              <span className="why-card-icon-ring" />
            </div>
            <div>
              <h3 className="why-card-title">What this course helps you become</h3>
              <p className="why-card-subtitle">
                Not just a “report builder”, but a cloud-native data professional.
              </p>
            </div>
          </div>

          <ul className="why-list">
            <li className="why-list-item">
              <span className="why-list-bullet" />
              <div>
                <h4 className="why-list-label">From spreadsheets to pipelines</h4>
                <p className="why-list-text">
                  Learn how to build automated data flows instead of manually
                  exporting, cleaning, and copying data between tools.
                </p>
              </div>
            </li>

            <li className="why-list-item">
              <span className="why-list-bullet" />
              <div>
                <h4 className="why-list-label">Think like an engineer</h4>
                <p className="why-list-text">
                  Understand how data is ingested, stored, transformed, and
                  served on modern cloud platforms like AWS.
                </p>
              </div>
            </li>

            <li className="why-list-item">
              <span className="why-list-bullet" />
              <div>
                <h4 className="why-list-label">Built for real-world impact</h4>
                <p className="why-list-text">
                  Every concept connects back to enterprise use-cases so you can
                  talk confidently about business value in interviews and on the job.
                </p>
              </div>
            </li>
          </ul>

          <div className="why-footnote">
            <span className="why-footnote-dot" />
            <p>
              Ideal for analysts, engineers, and career switchers who want to
              operate at{" "}
              <span className="why-footnote-strong">cloud & production scale</span>,
              not just in local files.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyThisCourse;
