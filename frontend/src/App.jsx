import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DataSciencePage from "./pages/Programs/DataScienecePage/DataSciencepage/DataSciencePage.jsx";
import DataScienceFoundation from "./pages/Programs/DataScienecePage/DataScienceFoundation/DataScienceFoundation.jsx";

import Home from "./pages/Home/Home.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import CommingSoon from "./components/CommingSoon/CommingSoon.jsx";
import Footer from "./components/Footer/Footer.jsx";
import TermsAndConditions from "./components/TermsAndCondition/TermsAndCondition.jsx";
import Privacy from "./components/Privacy/Privacy.jsx";
import MockInterview from "./pages/MockInterview/MockInterview.jsx";
import AIMLHomePage from "./pages/Programs/AIMLPage/AIMLHomePage/AIMLHomePage.jsx";
import AdvancedAiml from "./pages/Programs/AIMLPage/AdvancedAiml/AdvancedAiml.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="mockinterview" element={<MockInterview />} />
        <Route path="/commingsoon" element={<CommingSoon />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<Privacy />} />

        {/* Programs */}

        {/* Data Science */}
        <Route path="/programs/data-science" element={<DataSciencePage />} />
        <Route path="/programs/data-science/foundation" element={<DataScienceFoundation />} />

        {/* AIML */}
        <Route path="/programs/aiml" element={<AIMLHomePage/>} />
        <Route path="/programs/aiml/advanced-aiml" element={<AdvancedAiml/>} />


      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
