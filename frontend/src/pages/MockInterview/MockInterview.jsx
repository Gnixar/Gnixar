import React from 'react'
import './MockInterview.css'
import Navbar from '../../components/Navbar/Navbar'
import MockInterviewHeader from '../../components/MockInterviewHeader/MockInterviewHeader'
import FAQ from '../../components/FAQ/FAQ'
import ChooseInterviewer from '../../components/ChooseInterview/ChooseInterviewer'
import MockInterviewFeedback from '../../components/MockInterviewFeedback/MockInterviewFeedback'
import MockInterviewVideo from '../../components/MockInterviewVideo/MockInterviewVideo'
const MockInterview = () => {
  return (
    <>
    <Navbar/>
    <MockInterviewHeader/>
    <ChooseInterviewer/>
    <MockInterviewVideo />
    <MockInterviewFeedback/>
    <FAQ/>

    </>
  )
}

export default MockInterview