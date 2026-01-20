import React from "react";
import { HeartHandshake, Clock, Users, Award } from "lucide-react";
import "./FloatingSection.css";

const FloatingSection = () => {
  return (
    <div className="floating-section">
      <div className="floating-container">

        <div className="floating-item">
          <div className="icon-circle">
            <HeartHandshake size={24} />
          </div>
          <p>100+ Expert Mentors</p>
        </div>

        <div className="divider"></div>

        <div className="floating-item">
          <div className="icon-circle">
            <Clock size={24} />
          </div>
          <p>Self-Paced Learning</p>
        </div>

        <div className="divider"></div>

        <div className="floating-item">
          <div className="icon-circle">
            <Users size={24} />
          </div>
          <p>500+ Students Enrolled</p>
        </div>

        <div className="divider"></div>

        <div className="floating-item">
          <div className="icon-circle">
            <Award size={24} />
          </div>
          <p>50+ Courses Available</p>
        </div>

      </div>
    </div>
  );
};

export default FloatingSection;
