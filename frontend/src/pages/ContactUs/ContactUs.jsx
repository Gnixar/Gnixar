import React from "react";
import { Mail } from "lucide-react";
import "./ContactUs.css";
import Navbar from "../../components/Navbar/Navbar";

const ContactUs = () => {
  return (
    <>
    <Navbar/>
    <section className="contact-container">
      <div className="contact-inner">
        <h1 className="contact-title">Contact Us</h1>

        <p className="contact-text">
          Understanding the complexities and challenges of selecting the ideal
          educational institution or career pathway can be an overwhelming
          endeavor. Our mission is to ease this journey for you, providing a
          supportive and informative environment where your queries and concerns
          are addressed promptly. We encourage you to reach out with any
          questions you might have. Our team is dedicated to offering
          personalized responses via email as swiftly as possible, ensuring you
          have all the information needed to make an informed decision.
        </p>

        <div className="contact-email">
          <Mail size={50} strokeWidth={2.5} />
          <h3>Write to us at</h3>
          <a href="mailto:support@gnixar.com" className="email-link">
            connect@gnixar.in
          </a>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactUs;
