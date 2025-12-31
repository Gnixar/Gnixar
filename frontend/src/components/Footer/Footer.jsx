import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section company">
          <h2>GNIXAR</h2>
          <p>
            GNIXAR is a global learning platform offering industry-relevant programs in Data Science,
            AI, Web Development, Product Management, and more.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><Facebook /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin /></a>
          </div>
        </div>

        {/* Programs */}
        <div className="footer-section">
          <h3>Programs</h3>
          <ul>
            <li><a href="/programs/data-science">Data Science</a></li>
            <li><a href="/commingsoon">AI & ML</a></li>
            <li><a href="/commingsoon">Web Development</a></li>
            <li><a href="/commingsoon">Product Management</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/contactus">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:connect@gnixar.in">connect@gnixar.in</a></p>
          <p>Phone: <a href="tel:03369028356">033-69028356</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GNIXAR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
