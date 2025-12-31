import React from 'react'
import HeaderAdvancedAiml from '../../../../components/HeaderAdvancedAiml/HeaderAdvancedAiml'
import AIMLHero from '../../../../components/AIMLHero/AIMLHero'
import WhyGnixar from '../../../../components/WhyGnixar/WhyGnixar'
import AIMLCourseCurriculum from '../../../../components/AIMLCourseCurriculum/AIMLCourseCurriculum'
import AIMLTools from '../../../../components/AIMLTools/AIMLTools'
import AIMLProjects from '../../../../components/AIMLProjects/AIMLProjects'
import './AdvancedAiml.css'
import AIMLWhyThisCourse from '../../../../components/AIMLWhyThisCourse/AIMLWhyThisCourse'


const AdvancedAiml = () => {
  return (
    <div className='AdvancedAiml'>
    <>
    <HeaderAdvancedAiml/>
    <AIMLHero />
    <WhyGnixar />
    <AIMLCourseCurriculum />
    <AIMLTools />
    <AIMLProjects/>
    <AIMLWhyThisCourse />
    
    </>
    </div>
  )
}

export default AdvancedAiml