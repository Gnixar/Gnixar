import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";
import { handleSuccess, handleError } from "../../utlis.js";
import "react-toastify/dist/ReactToastify.css";
import "./Forms.css";

/* -------------------- VALIDATION -------------------- */
const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2).max(50).required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone number is required"),
  degree: Yup.string().required("Degree is required"),
  course: Yup.string().required("Please select a course"),
});

/* -------------------- COMPONENT -------------------- */
const Forms = ({ onCancel, onSuccess }) => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    degree: "",
    course: "",
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const response = await fetch("/api/form/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.success) {
        handleSuccess("Success! We will contact you soon.");
        resetForm();
        if (onSuccess) setTimeout(onSuccess, 1200);
      } else {
        handleError(data.message || "Submission failed");
      }
    } catch (error) {
      handleError("Server error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="unique-form-container">
      <ToastContainer theme="dark" />
      <h2 className="form-title">Apply Now</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="unique-form">
            <Field
              name="name"
              placeholder="Full Name"
              className="unique-input"
            />
            <ErrorMessage name="name" component="div" className="error-msg" />

            <Field
              name="email"
              placeholder="Email"
              className="unique-input"
            />
            <ErrorMessage name="email" component="div" className="error-msg" />

            <Field
              name="phone"
              placeholder="Phone"
              className="unique-input"
            />
            <ErrorMessage name="phone" component="div" className="error-msg" />

            <Field
              name="degree"
              placeholder="Degree"
              className="unique-input"
            />
            <ErrorMessage name="degree" component="div" className="error-msg" />

            <Field as="select" name="course" className="unique-input">
              <option value="">Select Course</option>
              <option value="Web Development">Web Development</option>
              <option value="AI & ML">AI & ML</option>
              <option value="Data Science">Data Science</option>
            </Field>
            <ErrorMessage name="course" component="div" className="error-msg" />

            <div className="form-actions">
              <button
                type="button"
                className="form-cancel-btn"
                onClick={onCancel}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="unique-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Forms;
