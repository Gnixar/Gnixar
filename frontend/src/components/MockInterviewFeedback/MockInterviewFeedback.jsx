import React from "react";
import "./MockInterviewFeedback.css";

const feedbacks = [
  {
    id: 1,
    name: "Aman Verma",
    role: "Final Year Student",
    rating: 5,
    feedback:
      "Mock interviews helped me identify my weak areas and improve my confidence. The feedback was extremely detailed and practical.",
  },
  {
    id: 2,
    name: "Sneha Kapoor",
    role: "Software Engineer",
    rating: 4,
    feedback:
      "The interviewers were very experienced and guided me on system design and DSA. Highly recommended for serious preparation.",
  },
  {
    id: 3,
    name: "Rohit Mehta",
    role: "Computer Science Student",
    rating: 4,
    feedback:
      "It felt like a real interview. The structured feedback helped me crack my product-based company interview.",
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "Placement Coordinator",
    rating: 5,
    feedback:
      "We recommended mock interviews to our students, and the results were outstanding. Great mentors and real-world questions.",
  },
];

const MockInterviewFeedback = () => {
  return (
    <section id="feedback-page">
      {/* Header */}
      <div className="feedback-header">
        <h2>What Learners & Institutions Say</h2>
        <p>Real experiences from students and professionals</p>
      </div>

      {/* Grid */}
      <div className="feedback-grid">
        {feedbacks.map((item) => (
          <div key={item.id} className="feedback-card">
            {/* Card Header */}
            <div className="feedback-card-header">
              {/* <img
                className="feedback-avatar"
                src={item.image}
                alt={item.name}
              /> */}

              <div className="feedback-user">
                <h3>{item.name}</h3>
                <span>
                  {item.role} {item.institute}
                </span>
              </div>
            </div>

            {/* Feedback Text */}
            <p className="feedback-text">“{item.feedback}”</p>

            {/* Rating */}
            <div className="feedback-rating">
              {"★".repeat(item.rating)}
              {"☆".repeat(5 - item.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MockInterviewFeedback;
