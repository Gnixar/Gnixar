import React, { createContext, useState, useEffect } from "react";

export const CompanyContext = createContext();

const CompanyContextProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        name: "Google",
        logo: "/download1.jpg",
        location: "USA",
        tag: "Tech Leader",
      },
      {
        id: 2,
        name: "Ai Labs",
        logo: "/download2.png",
        location: "India",
        tag: "Cloud Partner",
      },
      {
        id: 3,
        name: "L&T Technology services",
        logo: "/download3.png",
        location: "India",
        tag: "Cloud Solutions",
      },
      {
        id: 4,
        name: "Meta",
        logo: "/download4.jpg",
        location: "USA",
        tag: "Technology Partner",
      },
      {
        id: 5,
        name: "Presistent",
        logo: "/download5.png",
        location: "India",
        tag: "Innovation Partner",
      },
      {
        id: 6,
        name: "Bosch",
        logo: "/download6.png",
        location: "India",
        tag: "Enterprise Partner",
      },

      {
        id: 7,
        name: "Wipro",
        logo: "/download7.png",
        location: "India",
        tag: "Chip Partner",
      },

      {
        id: 8,
        name: "DronaHQ",
        logo: "/download8.png",
        location: "India",
        tag: "Database Partner",
      },

      {
        id: 9,
        name: "Cisco",
        logo: "/download9.png",
        location: "USA",
        tag: "Networking Partner",
      },

      {
        id: 10,
        name: "Salesforce",
        logo: "/download10.jpg",
        location: "USA",
        tag: "CRM Partner",
      },
    ];

    setCompanies(data);
  }, []);

  return (
    <CompanyContext.Provider value={{ companies }}>
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyContextProvider;
