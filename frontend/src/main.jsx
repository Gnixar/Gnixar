import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import StudentsContextProvider from "./context/StudentContext.jsx";
import UniversityContextProvider from "./context/UniContext.jsx";
import { ProgramProvider } from "./context/ProgramContext.jsx";
import "./index.css"; 
import 'react-toastify/ReactToastify.css'
                         

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <StudentsContextProvider>
      <UniversityContextProvider>
        <ProgramProvider>
          <App />
        </ProgramProvider>
      </UniversityContextProvider>
    </StudentsContextProvider>
  </React.StrictMode>
);
