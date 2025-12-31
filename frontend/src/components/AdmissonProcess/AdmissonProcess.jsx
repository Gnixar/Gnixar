import React from "react";
import "./AdmissonProcess.css";

const steps = [
  {
    id: 1,
    label: "Register",
    title: "Register",
    description:
      "Sign up for the program with your basic details and pay the admission fee.",
    position: "left",
  },
  {
    id: 2,
    label: "Join",
    title: "Join",
    description: "Join the program and attend your demo class.",
    position: "right",
  },
  {
    id: 3,
    label: "Pay",
    title: "Pay",
    description:
      "Pay the upfront fee of ₹49,000 and the remaining amount after successful job placement.",
    position: "left",
  },
];

function AdmissionProcess() {
  return (
    <section className="admission-section">
      <div className="admission-inner">
        <header className="admission-header">
          <p className="admission-kicker">Admission Process</p>
          <h2 className="admission-title">
            Simple, outcome-linked enrollment journey
          </h2>
          <p className="admission-intro">
            Follow these three straightforward steps to secure your seat in the
            program.
          </p>
        </header>

        <div className="admission-flow">
          {/* decorative vertical line */}
          <div className="admission-flow-rail" />

          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`admission-step admission-step-${step.position}`}
            >
              <div className="admission-step-arrow">
                <div className="admission-arrow-curve" />
                <div className="admission-arrow-head" />
              </div>

              <div className="admission-step-card">
                <div className="admission-step-pill">
                  <span className="admission-step-index">
                    {String(step.id).padStart(2, "0")}
                  </span>
                  <span className="admission-step-label">{step.label}</span>
                </div>

                <h3 className="admission-step-title">{step.title}</h3>
                <p className="admission-step-body">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdmissionProcess;
