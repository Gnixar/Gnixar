import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import brochurePDF from "/AIML.pdf";
import * as Yup from "yup";
import "./AIMLHero.css";

const AIMLHero = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/^[0-9]{10}$/, "Enter a valid 10-digit number"),
  });

  const course = {
    shortDescription:
      "Kickstart your career in Artificial Intelligence & Machine Learning with an industry-focused, hands-on program.",
    duration: "4 Months",
    level: "Beginner to Intermediate",
    mode: "Online Live",
    language: "English",
  };

  return (
    <div className="aiml1-course-page">
      <section className="aiml1-course-hero">

        {/* LEFT SECTION */}
        <div className="aiml1-course-hero-left">
          <p className="aiml1-course-hero-tagline">
            Job-ready AI & Machine Learning Program
          </p>

          <p className="aiml1-course-hero-description">
            {course.shortDescription}
          </p>

          <div className="aiml1-course-hero-highlights">
            <div className="aiml1-hero-chip">
              <span className="aiml1-hero-chip-label">Duration</span>
              <span className="aiml1-hero-chip-value">{course.duration}</span>
            </div>
            <div className="aiml1-hero-chip">
              <span className="aiml1-hero-chip-label">Level</span>
              <span className="aiml1-hero-chip-value">{course.level}</span>
            </div>
            <div className="aiml1-hero-chip">
              <span className="aiml1-hero-chip-label">Mode</span>
              <span className="aiml1-hero-chip-value">{course.mode}</span>
            </div>
            <div className="aiml1-hero-chip">
              <span className="aiml1-hero-chip-label">Language</span>
              <span className="aiml1-hero-chip-value">{course.language}</span>
            </div>
          </div>

          <p className="aiml1-course-hero-note">
            Limited seats • Live mentor support • Real-world AI projects
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="aiml1-course-hero-right">
          <div className="aiml1-form-container">
            <h2 className="aiml1-form-title">Download Brochure</h2>

            <Formik
              initialValues={{ name: "", phone: "" }}
              validationSchema={validationSchema}
              onSubmit={async (values, { resetForm }) => {
                const sendData = {
                  name: values.name,
                  phone: values.phone,
                  course: "AI & Machine Learning Foundation",
                };

                try {
                  const res = await fetch(
                    "http://localhost:5000/brochure/submit",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(sendData),
                    }
                  );

                  const data = await res.json();

                  if (data.success) {
                    const link = document.createElement("a");
                    link.href = brochurePDF;
                    link.download = "AI_ML_Brochure.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    resetForm();
                  } else {
                    alert(data.message);
                  }
                } catch (error) {
                  console.error(error);
                  alert("Something went wrong. Try again!");
                }
              }}
            >
              {({ errors, touched }) => (
                <Form className="aiml1-form">
                  <div className="aiml1-form-group">
                    <label htmlFor="name">Name</label>
                    <Field
                      id="name"
                      name="name"
                      className={`aiml1-input ${
                        errors.name && touched.name ? "aiml1-error" : ""
                      }`}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="aiml1-error-msg"
                    />
                  </div>

                  <div className="aiml1-form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <Field
                      id="phone"
                      name="phone"
                      className={`aiml1-input ${
                        errors.phone && touched.phone ? "aiml1-error" : ""
                      }`}
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="aiml1-error-msg"
                    />
                  </div>

                  <button type="submit" className="aiml1-submit-btn">
                    Download Brochure
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>

      <section
        id="syllabus-section"
        className="aiml1-course-body-section"
      ></section>
    </div>
  );
};

export default AIMLHero;
