import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import brochurePDF from "/DataAnalytics.pdf";
import * as Yup from "yup"   
import "./DSFHero.css";

const DSFHero = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/^[0-9]{10}$/, "Enter a valid 10-digit number"),
  });

  const course = {
    shortDescription:
      "Kickstart your career in Data Science with a structured, hands-on program designed for beginners and upskillers.",
    duration: "3 Months",
    mode: "Online Live",
    language: "English",
  };

  return (
    <div className="course-page">
      <section className="course-hero">

        {/* LEFT SECTION */}
        <div className="course-hero-left">
          <p className="course-hero-tagline">Job-ready Data Science Program</p>

          <p className="course-hero-description">{course.shortDescription}</p>

          <div className="course-hero-highlights">
            <div className="hero-chip">
              <span className="hero-chip-label">Duration</span>
              <span className="hero-chip-value">{course.duration}</span>
            </div>
            <div className="hero-chip">
              <span className="hero-chip-label">Mode</span>
              <span className="hero-chip-value">{course.mode}</span>
            </div>
            <div className="hero-chip">
              <span className="hero-chip-label">Language</span>
              <span className="hero-chip-value">{course.language}</span>
            </div>
          </div>

          <p className="course-hero-note">
            Limited seats • Live mentor support • Hands-on projects
          </p>
        </div>

        {/* RIGHT SECTION (FORM) */}
        <div className="course-hero-right">
          <div className="form-container">
            <h2 className="form-title">Download Brochure</h2>

            <Formik
              initialValues={{ name: "", phone: "" }}
              validationSchema={validationSchema}
              onSubmit={async (values, { resetForm }) => {
                
                const sendData = {
                  name: values.name,
                  phone: values.phone,
                  course: "Data Science Foundation",
                };

                try {
                  const res = await fetch("/api/brochure/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(sendData),
                  });

                  const data = await res.json();

                  if (data.success) {
                    // DOWNLOAD PDF
                    const link = document.createElement("a");
                    link.href = brochurePDF;
                    link.download = "dataAnalytics.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);

                    resetForm();
                  } else {
                    alert(data.message);
                  }
                } catch (error) {
                  console.log(error);
                  alert("Something went wrong. Try again!");
                }
              }}
            >
              {({ errors, touched }) => (
                <Form className="form">

                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Field
                      id="name"
                      name="name"
                      className={`input ${
                        errors.name && touched.name ? "error" : ""
                      }`}
                    />
                    <ErrorMessage name="name" component="div" className="error-msg" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <Field
                      id="phone"
                      name="phone"
                      className={`input ${
                        errors.phone && touched.phone ? "error" : ""
                      }`}
                    />
                    <ErrorMessage name="phone" component="div" className="error-msg" />
                  </div>

                  <button type="submit" className="submit-btn">
                    Download Brochure
                  </button>

                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>

      <section id="syllabus-section" className="course-body-section"></section>
    </div>
  );
};

export default DSFHero;
