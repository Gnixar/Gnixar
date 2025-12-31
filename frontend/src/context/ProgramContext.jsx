// src/context/ProgramContext.js
import React, { createContext, useContext, useState } from "react";

// --- Course Data Structure (moved from Navbar) ---
const PROGRAMS_DATA = [
  {
    category: "Data Science",
    // link: "/programs/data-science",
    details: [
      {
        name: "Data Science Foundation Program",
        link: "/programs/data-science/foundation",
      },
      {
        name: "Data Analyst Course",
        link: "/programs/data-science/analyst",
      },
      {
        name: "Business Analytics Certification",
        link: "/programs/data-science/business",
      },
    ],
  },
  {
    category: "AI & ML",
    // link: "/programs/ai-ml",
    details: [
      {
        name: "Applied Machine Learning",
        link: "/programs/ai-ml/applied",
      },
      {
        name: "Deep Learning Specialization",
        link: "/programs/ai-ml/deep-learning",
      },
      {
        name: "AI Ethics",
        link: "/programs/ai-ml/ethics",
      },
    ],
  },
  {
    category: "Web Development",
    // link: "/programs/web-development",
    details: [
      {
        name: "Full Stack Development",
        link: "/programs/web-development/full-stack",
      },
      {
        name: "Frontend Mastery (React)",
        link: "/programs/web-development/frontend",
      },
      {
        name: "Backend with Node.js",
        link: "/programs/web-development/backend",
      },
    ],
  },
  {
    category: "Product Management",
    // link: "/programs/product",
    details: [
      {
        name: "Product Manager Certification",
        link: "/programs/product/certification",
      },
      {
        name: "Agile and Scrum Master",
        link: "/programs/product/agile",
      },
    ],
  },
  { category: "Design", details: [] },
  { category: "Cyber Security", details: [] },
  { category: "Cloud Computing",details: [] },
  { category: "DevOps", details: [] },
  { category: "Blockchain", details: [] },
  { category: "Marketing", details: [] },
  { category: "Sales", details: [] },
];

// 1. Create Context
export const ProgramContext = createContext({
  programs: [],
});

// 2. Provider
export const ProgramProvider = ({ children }) => {
  // If later you want to fetch from API or update programs dynamically,
  // keep it as state. For now it's static but already future-proof.
  const [programs] = useState(PROGRAMS_DATA);

  return (
    <ProgramContext.Provider value={{ programs }}>
      {children}
    </ProgramContext.Provider>
  );
};

// 3. Custom hook (optional but convenient)
export const usePrograms = () => {
  const ctx = useContext(ProgramContext);
  if (!ctx) {
    throw new Error("usePrograms must be used within a ProgramProvider");
  }
  return ctx;
};
export default ProgramProvider;