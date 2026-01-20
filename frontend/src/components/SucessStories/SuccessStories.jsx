import React, { useContext, useState, useEffect } from "react";
import { StudentsContext } from "../../context/StudentContext.jsx";
import Forms from "../Forms/Forms";
import "./SuccessStories.css";

const SuccessStories = () => {
  const { students } = useContext(StudentsContext);
  const [openForm, setOpenForm] = useState(false);

  // Lock body scroll when form is open
  useEffect(() => {
    document.body.style.overflow = openForm ? "hidden" : "auto";
  }, [openForm]);

  return (
    <div className="success-section">
      <div className="success-section-main">

        {/* ✅ FORM RENDERED DIRECTLY (NO WRAPPER) */}
        {openForm && (
          <Forms
            onCancel={() => setOpenForm(false)}
            onSuccess={() => setOpenForm(false)}
          />
        )}

        <div className="success-section-heading">
          <h2>Our Students Success Stories</h2>
          <p className="subtitle">
            Real experiences from learners achieving real results.
          </p>
        </div>

        <div className="stories-container">
          {/* LEFT */}
          <div className="stories-container-1">
            <div className="apply-content">
              <h3>Start Your Success Journey</h3>
              <p>
                Join hundreds of learners who transformed their careers with
                real-world skills and guaranteed outcomes.
              </p>
              <button
                className="apply-btn"
                onClick={() => setOpenForm(true)}
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="stories-container-2">
            <input type="radio" name="slider" id="slide1" defaultChecked />
            <input type="radio" name="slider" id="slide2" />

            <div className="stories-track">
              {students.map((s) => (
                <div className="story-card" key={s.id}>
                  <div className="student-pic">
                    <img src={s.image} alt={s.name} />
                  </div>

                  <div className="story-content">
                    <h3>{s.name}</h3>
                    <span className="course">{s.course}</span>
                    <p className="testimonial">"{s.testimonial}"</p>
                    <span className="metric">{s.metric}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="slider-dots">
              <label htmlFor="slide1"></label>
              <label htmlFor="slide2"></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
