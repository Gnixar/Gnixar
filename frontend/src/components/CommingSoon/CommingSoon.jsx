import React from "react";
import Navbar from "../Navbar/Navbar";
import { Hourglass } from "lucide-react";
import "./CommingSoon.css";

const ComingSoon = () => {
  return (
    <>
      <Navbar />

      <section className="coming-container">
        <div className="coming-box">
          <Hourglass className="coming-icon" size={75} strokeWidth={2.5} />
          <h1 className="coming-title">Coming Soon</h1>
          <p className="coming-sub">
            We're working on something amazing  
            Stay tuned, exciting things are on the way!
          </p>
        </div>
      </section>
    </>
  );
};

export default ComingSoon;
