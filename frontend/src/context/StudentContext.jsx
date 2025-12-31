import React, { createContext, useState, useEffect } from "react";

// create context
export const StudentsContext = createContext();

const StudentsContextProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        name: "Ranjeet Pal",
        course: "Full Stack Development",
        testimonial: "The program elevated my coding skills to a professional level.",
        metric: "Built 10+ real-world Full Stack Projects",
        image: "/RanjeetPal.jpeg", // same image
      },
      {
        id: 2,
        name: "Umang Gohil",
        course: "Machine Learning Engineering",
        testimonial: "Excellent hands-on learning with challenging ML projects.",
        metric: "Completed 15 Machine Learning models",
        image: "/UmangGohil.jpeg", // same image
      },
      {
        id: 3,
        name: "Prakash Rana",
        course: "Data Analytics",
        testimonial: "Clear explanations and strong focus on industry use-cases.",
        metric: "Top performer in analytics track",
        image: "/prakashrana.jpeg", // same image
      },
      {
        id: 4,
        name: "Kundan Sharma",
        course: "Cybersecurity",
        testimonial: "Loved the practical labs and simulated attack-defense tasks.",
        metric: "Secured 8+ security certifications",
        image: "/kundansharma.jpeg", // same image
      },
    ];

    setStudents(data);
  }, []);

  return (
    <StudentsContext.Provider value={{ students, setStudents }}>
      {children}
    </StudentsContext.Provider>
  );
};

export default StudentsContextProvider;
