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
        headers: { "Content-Type": "application/json" },
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
    <div className="form1-overlay">
      <ToastContainer theme="dark" />

      <div className="form1-container">
        <h2 className="form1-title">Apply Now</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="form1-form">
              <Field
                name="name"
                placeholder="Full Name"
                className="form1-input"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="form1-error-msg"
              />

              <Field
                name="email"
                placeholder="Email"
                className="form1-input"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="form1-error-msg"
              />

              <Field
                name="phone"
                placeholder="Phone"
                className="form1-input"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="form1-error-msg"
              />

              <Field
                name="degree"
                placeholder="Degree"
                className="form1-input"
              />
              <ErrorMessage
                name="degree"
                component="div"
                className="form1-error-msg"
              />

              <Field as="select" name="course" className="form1-input">
                <option value="">Select Course</option>
                <option value="Web Development">Web Development</option>
                <option value="AI & ML">AI & ML</option>
                <option value="Data Science">Data Science</option>
              </Field>
              <ErrorMessage
                name="course"
                component="div"
                className="form1-error-msg"
              />

              <div className="form1-actions">
                <button
                  type="button"
                  className="form1-cancel-btn"
                  onClick={onCancel}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="form1-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Forms;
