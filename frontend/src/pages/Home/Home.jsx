import Admission from "../../components/Admission/Admission";
import CurriculumOverview from "../../components/CurriculumOverview/CurriculumOverview";
import Differentiation from "../../components/Differentiation/Differentiation";
import FAQ from "../../components/FAQ/FAQ";
import FloatingSection from "../../components/FloatingSection.jsx/FloatingSection";
import FocusAreas from "../../components/FocusAreas/FocusAreas";
import HeroSection from "../../components/Header/HeroSection";
import LearningComponent from "../../components/LearningComponent/LearningComponent";
import LearningExperience from "../../components/LearningExperience/LearningExperience";
import Navbar from "../../components/Navbar/Navbar";
import Outcomes from "../../components/Outcomes/Outcomes";
import ProgramSection from "../../components/ProgramSection/ProgramSection";
import StudentProjects from "../../components/StudentProjects/StudentProjects";
import SuccessStories from "../../components/SucessStories/SuccessStories";
import UniPartners from "../../components/UniPartners/UniPartners";



const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FloatingSection />
      <SuccessStories />
      <UniPartners />
      <ProgramSection />
      <Outcomes/>
      <FocusAreas/>
      <LearningComponent />
      <StudentProjects/>
      <CurriculumOverview /> 
      <LearningExperience /> 
      <Differentiation />
      <Admission/>
      <FAQ/>
    </>
  );
};

export default Home;

