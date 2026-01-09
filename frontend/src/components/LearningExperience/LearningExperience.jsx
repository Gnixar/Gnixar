import { useState, useEffect } from "react";
import Forms from "../Forms/Forms";
import "./LearningExperience.css";

const steps = [
  {
    step: "01",
    title: "Apply & Get Selected",
    desc: "Apply online and go through a short screening process to ensure fit."
  },
  {
    step: "02",
    title: "Learn with Mentors",
    desc: "Attend live sessions and learn directly from industry professionals."
  },
  {
    step: "03",
    title: "Build Real Projects",
    desc: "Work on industry-grade projects and case studies."
  },
  {
    step: "04",
    title: "Launch Your Career",
    desc: "Get placement support, referrals, and long-term career guidance."
  }
];

export default function LearningExperience() {
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    document.body.style.overflow = openForm ? "hidden" : "auto";
  }, [openForm]);

  return (
    <section className="gnixar-learn">
      {/* ================= FORM OVERLAY ================= */}
      {openForm && (
        <div className="form-overlay">
          <Forms
            onCancel={() => setOpenForm(false)}
            onSuccess={() => setOpenForm(false)}
          />
        </div>
      )}

      {/* ================= HEADER ================= */}
      <div className="gnixar-learn-header">
        <span className="gnixar-kicker">Learning Experience</span>
        <h2 className="gnixar-title">
          How Gnixar <span>works</span>
        </h2>
      </div>

      {/* ================= INNER ================= */}
      <div className="gnixar-learn-inner">
        {/* DESCRIPTION */}
        <p className="gnixar-desc">
          A structured, outcome-driven learning journey designed to get you
          industry-ready.
        </p>

        {/* STATS */}
        <div className="gnixar-stats">
          <div>
            <h4>200+</h4>
            <span>Hours of Learning</span>
          </div>
          <div>
            <h4>10+</h4>
            <span>Industry Projects</span>
          </div>
          <div>
            <h4>1:1</h4>
            <span>Mentorship</span>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="gnixar-cta">
          <button onClick={() => setOpenForm(true)}>
            Start Your Journey
          </button>
        </div>

        {/* STEPS GRID */}
        <div className="gnixar-learn-steps">
          {steps.map((item, i) => (
            <div className="gnixar-learn-card" key={i}>
              <span className="gnixar-step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
