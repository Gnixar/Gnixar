import React, { useState } from "react";
import "./Admission.css";

const admissionSteps = [
  {
    step: "STEP 1",
    title: "Complete the Application Online",
    content: [
      "Explore Courses: Understand our offerings in Full Stack Web Development and Data Science.",
      "Choose Your Path: Learn the differences between Primero and Launchpad to match your goals.",
      "Register: Fill out the registration form using the provided link and our team will get back to you."
    ]
  },
  {
    step: "STEP 2",
    title: "Take the Online Assessment",
    content: [
      "Purpose: Determines suitability for Full Stack Web Development and Data Science.",
      "Requirement: Mandatory for all candidates.",
      "Evaluation: Critical thinking, ability skills, communication, and behavioral traits.",
      "Download Sample Online Assessment Paper"
    ]
  },
  {
    step: "STEP 3",
    title: "Appear for the Virtual Interview",
    content: [
      "Assessment Evaluation: Results are reviewed by our admissions team.",
      "Interview Invitation: Shortlisted candidates attend a 30-minute virtual interview.",
      "Discussion: Assessment topics and behavioral insights to understand aspirations."
    ]
  },
  {
    step: "STEP 4",
    title: "Final Admission Decision",
    content: [
      "Decision Notification: After the interview, we'll promptly inform you of our admission decision.",
      "Admission Offer: Accepted students receive course details, fee structure, and cohort dates.",
      "Confirmation Window: You'll have 7 days to secure your spot by paying the admission fee.",
      "Keep an eye on your email for updates, including if further action is needed."
    ]
  }
];

const Admission = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="gnixar-admission">
      <div className="gnixar-admission-inner">
        <h2 className="admission-main-title">Admission Process</h2>

        {/* Step Navigation Bar */}
        <div className="steps-container">
          {admissionSteps.map((item, index) => (
            <div
              key={index}
              className={`step-box ${activeStep === index ? "active" : ""}`}
              onClick={() => setActiveStep(index)}
            >
              <div className="step-label">{item.step}</div>
              <div className="step-title">{item.title}</div>
            </div>
          ))}
        </div>

        {/* Content Box */}
        <div className="content-display-box">
          <h3 className="content-header">{admissionSteps[activeStep].title}</h3>
          <hr className="content-divider" />
          <ol className="content-list">
            {admissionSteps[activeStep].content.map((point, i) => {
               // Logic to split the bold prefix from the rest of the text
               const [label, ...rest] = point.split(':');
               return (
                 <li key={i}>
                   {rest.length > 0 ? (
                     <><strong>{label}:</strong>{rest.join(':')}</>
                   ) : point}
                 </li>
               );
            })}
          </ol>
        </div>

        <p className="gnixar-support">
          Need Clarity? Contact us at{" "}
          <a href="mailto:support@gnixar.com">contact@gnixar.com</a>
        </p>
      </div>
    </section>
  );
};

export default Admission;