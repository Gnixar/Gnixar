import React from "react";
import "./FutureScope.css";

function FutureScope() {
  return (
    <section className="future-section">
      <div className="future-inner">
        {/* Left: copy */}
        <header className="future-header">
          <p className="future-kicker">Future Scope</p>

          <h2 className="future-title">
            Become a{" "}
            <span className="future-title-highlight">
              cloud-ready, multi-platform data professional
            </span>
          </h2>

          <p className="future-intro">
            This program prepares learners for some of the most in-demand roles
            in the global analytics and cloud ecosystem. By completing this
            course, you will not only master the technical stack but also gain
            the strategic ability to design, automate, and scale data systems
            that power real-world business decisions.
          </p>

          <p className="future-intro">
            Because the curriculum covers the entire end-to-end data journey —
            from ingestion and modelling to orchestration, visualization, and
            automation — you will be able to operate across all layers of the
            analytics lifecycle.
          </p>

          <p className="future-intro">
            Furthermore, since the course includes comparative exposure to AWS,
            Azure, and GCP, you’ll find it effortless to adapt to other
            environments and eventually evolve into a multi-cloud solution
            provider — a capability that is exceptionally rare in the industry
            and offers superior employability with attractive remuneration.
          </p>

          <p className="future-intro">
            Whether you choose to specialize vertically in one technology stack
            or expand horizontally across platforms, this course makes you
            future-ready on both fronts.
          </p>
        </header>

        {/* Right: timeline-ish vertical roles/paths card */}
        <div className="future-card">
          <div className="future-card-header">
            <div className="future-card-pill">Post-course trajectory</div>
            <h3 className="future-card-title">
              Roles & growth paths you can target
            </h3>
            <p className="future-card-subtitle">
              Move from tool-operator to architecture-level contributor.
            </p>
          </div>

          <div className="future-paths">
            <div className="future-path-rail" />

            <div className="future-path-item">
              <div className="future-path-node">1</div>
              <div className="future-path-content">
                <h4 className="future-path-label">
                  Cloud Data / Analytics Engineer
                </h4>
                <p className="future-path-text">
                  Build and maintain end-to-end cloud data pipelines, data
                  models, and analytics layers on AWS, Azure, or GCP.
                </p>
              </div>
            </div>

            <div className="future-path-item">
              <div className="future-path-node">2</div>
              <div className="future-path-content">
                <h4 className="future-path-label">
                  BI & Analytics Solution Architect
                </h4>
                <p className="future-path-text">
                  Design data platforms that integrate ingestion, warehousing,
                  transformation, and visualization for enterprise stakeholders.
                </p>
              </div>
            </div>

            <div className="future-path-item">
              <div className="future-path-node">3</div>
              <div className="future-path-content">
                <h4 className="future-path-label">
                  Multi-Cloud Data Consultant
                </h4>
                <p className="future-path-text">
                  Leverage your exposure to AWS, Azure, and GCP to advise
                  teams, migrate workloads, and build vendor-agnostic solutions.
                </p>
              </div>
            </div>

            <div className="future-path-item">
              <div className="future-path-node future-path-node-glow">
                ★
              </div>
              <div className="future-path-content">
                <h4 className="future-path-label">
                  Long-term growth: Lead & Architect roles
                </h4>
                <p className="future-path-text">
                  With solid foundations across the analytics lifecycle, you
                  can progressively grow into Lead Engineer, Data Platform
                  Owner, or Enterprise Architect roles.
                </p>
              </div>
            </div>
          </div>

          <div className="future-footnote">
            <span className="future-footnote-dot" />
            <p>
              Your skill set won’t be locked to a single tool — it’s built
              around{" "}
              <span className="future-footnote-strong">
                principles that transfer across stacks and clouds
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FutureScope;
