import React from 'react'
import AIMLCourseIntro from '../../../../components/AIMLCourseIntro/AIMLCourseIntro'
import Navbar from '../../../../components/Navbar/Navbar'
import AIMLPrograms from '../../../../components/AIMLPrograms/AIMLPrograms'

const AIMLHomePage = () => {
  return (
    <>
    <Navbar/>
    <AIMLCourseIntro/>
    <AIMLPrograms />
    </>
  )
}

export default AIMLHomePage;