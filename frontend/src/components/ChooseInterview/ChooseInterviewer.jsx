import React from "react";
import "./ChooseInterviewer.css";

const interviewers = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Senior Software Engineer",
    company: "Google",
    experience: "8+ Years",
    image: "",
  },
  {
    id: 2,
    name: "Ananya Verma",
    role: "Frontend Engineer",
    company: "Amazon",
    experience: "6+ Years",
    image: "",
  },
  {
    id: 3,
    name: "Siddharth Jain",
    role: "Backend Engineer",
    company: "Microsoft",
    experience: "7+ Years",
    image: "",
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "Full Stack Engineer",
    company: "Flipkart",
    experience: "5+ Years",
    image: "",
  },
];

const ChooseInterviewer = () => {
  return (
    <section className="choose-interviewer">
      <h2>Choose Your Interviewer</h2>
      <p>Practice with industry professionals from top tech companies</p>

      <div className="interviewer-grid">
        {interviewers.map((item) => (
          <div key={item.id} className="interviewer-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <span className="role">{item.role}</span>
            <span className="company">{item.company}</span>
            <span className="experience">{item.experience}</span>

            <button className="select-btn">Select Interviewer</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseInterviewer;
