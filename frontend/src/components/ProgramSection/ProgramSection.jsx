// src/pages/ProgramsPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Cpu,
  Layers,
  Code,
  Users,
  Shield,
  Cloud,
  HardHat,
  Link as LinkIcon,
} from "lucide-react";
import "./ProgramSection.css";

const PROGRAMS_DATA = [
  { category: "Data Science", Icon: Layers, details: [], link: "/data-science" },
  { category: "AI & ML", Icon: Cpu, details: [], link: "/aiml" },
  { category: "Web Development", Icon: Code, details: [], link: "/commingsoon" },
  { category: "Product Management", Icon: Users, details: [], link: "/commingsoon" },
  { category: "Cyber Security", Icon: Shield, details: [], link: "/commingsoon" },
  { category: "Cloud Computing", Icon: Cloud, details: [], link: "/commingsoon" },
  { category: "DevOps", Icon: HardHat, details: [], link: "/commingsoon" },
  { category: "Blockchain", Icon: LinkIcon, details: [], link: "/commingsoon" },
];

const ProgramSection = () => {
  return (
    <div id="programs-page">
      <header className="programs-header">
        <h1>Our Programs</h1>
        <p>
          Explore our extensive list of learning tracks designed to help you
          upskill and succeed.
        </p>
      </header>

      <div className="programs-grid">
        {PROGRAMS_DATA.map((program) => {
          const IconComponent = program.Icon;

          return (
            <div key={program.category} className="program-card">
              <div className="program-card-header">
                {IconComponent && (
                  <IconComponent className="category-icon" />
                )}
                <h2>{program.category}</h2>
              </div>

              {program.details.length > 0 && (
                <ul className="program-course-list">
                  {program.details.map((course, idx) => (
                    <li key={idx}>{course}</li>
                  ))}
                </ul>
              )}

              {/* ✅ FIXED ROUTING */}
              <Link to={program.link} className="view-all-link">
                View All Courses
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgramSection;
