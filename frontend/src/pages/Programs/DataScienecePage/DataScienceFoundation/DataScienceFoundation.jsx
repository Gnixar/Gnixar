import React from 'react'
import DSFHeading from '../../../../components/DSFHeading/DSFHeading.jsx'
import DSFHero from '../../../../components/DSFHero/DSFHero.jsx'
import WhyGnixar from '../../../../components/WhyGnixar/WhyGnixar.jsx'
import MentorProfile from '../../../../components/MentorProfile/MentorProfile.jsx'
import "../DataScienceFoundation/DataScienceFoundation.css"
import CourseCurriculum from '../../../../components/CourseCurriculum/CourseCurriculum.jsx'
import ToolsMastered from '../../../../components/ToolsMastered/ToolsMastered.jsx'
import Projects from '../../../../components/Projects/Projects.jsx'
import WhyThisCourse from '../../../../components/WhyThisCourse/WhyThisCourse.jsx'
import FutureScope from '../../../../components/FutureScope/FutureScope.jsx'
import CareerPaths from '../../../../components/CareerPaths/CareerPaths.jsx'
import CourseFee from '../../../../components/CourseFee/CourseFee.jsx'
import AdmissionProcess from '../../../../components/AdmissonProcess/AdmissonProcess.jsx'


const DataSciencefoundation = () => {
  return (
    <div className="data-science-foundation-page">
      <DSFHeading />
      <DSFHero />
      <WhyGnixar />
      <MentorProfile />
      <CourseCurriculum />
      <ToolsMastered />
      <Projects />
      <WhyThisCourse />
      <FutureScope />
      <CareerPaths />
      <CourseFee />
      <AdmissionProcess />
    </div>
  )
}

export default DataSciencefoundation
