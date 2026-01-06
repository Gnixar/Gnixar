import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./MockInterviewHeader.css";

const MockInterviewHeader = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/interview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Something went wrong");
        return;
      }

      toast.success(data.message || "Redirecting to interview...");

      // OPTIONAL: clear form
      setFormData({ name: "", email: "", phone: "" });

      // 🔥 REDIRECT AFTER 2 SECONDS
      setTimeout(() => {
        window.location.href = "https://interviewx-connect.koviki.com/";
      }, 2000);

    } catch (error) {
      toast.error("Server not responding");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mock-hero">
      <ToastContainer position="top-right" theme="dark" autoClose={2000} />

      <div className="mock-hero-main-container">
        {/* LEFT CONTENT */}
        <div className="mock-hero-content">
          <h1>
            Crack Your Next <span>Tech Interview</span>
            <br />
            With Real Mock Interviews
          </h1>
          <p>Practice with industry experts and get real-time feedback.</p>
        </div>

        {/* FORM */}
        <div className="mock-hero-form">
          <h2>Start Your Interview</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Start Your Interview"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MockInterviewHeader;
