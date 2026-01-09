import React from 'react';
import { BookOpen, Users, CaseSensitive, Star, Briefcase } from 'lucide-react';
import './LearningComponent.css';


const founderLearningPoints = [
    { title: 'Case-based Classrooms', icon: BookOpen, detail: 'Meeting discussions and debates led by co-founders.' },
    { title: 'Real-World Projects', icon: Briefcase, detail: 'Live problem solving through the Strategy Lab.' },
    { title: 'Powerful Network Access', icon: Users, detail: 'Connect with mentors, and peer globally.' },
    { title: 'Internship Opportunities', icon: Star, detail: 'Get Internship opportunities in reputed companies.' },

];



const LearningComponent = () => {
    return (
        <section className="learning-section-main">
            <div className="learning-main-heading">
                <h2>Learn by Doing. Learn by Building.</h2>
            </div>
            <div className='learning-section-contrainer'>
                {/* --- Section 1: New Age Academics & Professors --- */}
                <div className="learning-sub-section academics-section">
                    <h3 className="section-title">New Age Academics</h3>
                    <p className="section-subtitle">
                        Learn from top mentors and real case studies.
                    </p>
                </div>
                {/* --- Section 2: Learn Directly from Founders --- */}
                <div className="learning-sub-section founders-section">
                    <h3 className="section-title">Learn directly from Professors</h3>
                    <p className="section-subtitle">Solve real time problems with live classes.</p>

                    <div className="founders-points-grid">
                        {founderLearningPoints.map((point, index) => (
                            <div className="founder-point" key={index}>
                                <point.icon size={28} className="point-icon" />
                                <h4 className="point-title">{point.title}</h4>
                                <p className="point-detail">{point.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearningComponent;