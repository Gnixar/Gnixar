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

  // 🔐 VERIFY PAYMENT
  const verifyPayment = async (paymentData) => {
    try {
      const res = await fetch("api/payment/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Payment successful! Redirecting...");
        window.location.href = data.redirectUrl;
      } else {
        toast.error("Payment verification failed");
      }
    } catch (err) {
      toast.error("Payment verification error");
    }
  };

  // 💳 CREATE ORDER + OPEN RAZORPAY
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("api/payment/mock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Unable to create payment");
        return;
      }

      const options = {
        key: data.key,
        amount: data.amount,
        currency: "INR",
        name: "Gnixar Mock Interview",
        description: "Mock Interview Payment",
        order_id: data.orderId,

        handler: function (response) {
          verifyPayment(response);
        },

        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },

        theme: {
          color: "#0f172a",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error) {
      toast.error("Server not responding");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="header" className="mock-hero">
      <ToastContainer position="top-right" theme="dark" autoClose={2000} />

      <div className="mock-hero-main-container">
        <div className="mock-hero-content">
          <h1>
            Crack Your Next <span>Tech Interview</span>
            <br />
            With Real Mock Interviews
          </h1>
          <p>Practice with industry experts and get real-time feedback.</p>
        </div>

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
              {loading ? "Processing..." : "Proceed to Payment"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MockInterviewHeader;
