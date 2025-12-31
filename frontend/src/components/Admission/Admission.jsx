import React from 'react';
import { Rocket, IndianRupee, TrendingUp, Users, CheckCircle, GraduationCap, FileText } from 'lucide-react';
import './Admission.css'; // <-- IMPORTANT: Uncomment this line in your project

// --- Data for Career Outcomes ---
const statsData = [
    { id: 1, IconComponent: IndianRupee, value: '26 Lakhs', label: 'Average CTC' },
    { id: 2, IconComponent: TrendingUp, value: '45 Lakhs', label: 'Highest CTC' },
    { id: 3, IconComponent: Users, value: '70 +', label: 'Hiring partners' },
    
];

const partnersData = [
    'Logo 1', 'Logo 2', 'Logo 3', 'Logo 4', 'Logo 5', 'Logo 6', 
    'Logo 7', 'Logo 8', 'Logo 9', 'Logo 10', 'Logo 11', 'Logo 12'
];

// --- Data for Admissions Process ---
const admissionsSteps = [
    { 
        number: 1, 
        title: 'Take the Mesa Admissions Test (MAT)', 
        description: 'Designed to evaluate like a Founders\' Office interview, the MAT tests aptitude, business acumen, first principles thinking, ability to sell & more.' 
    },
    { 
        number: 2, 
        title: 'Submit your Application', 
        description: 'Upload an updated 1-pager resume & fill in your basic details to complete your application.' 
    },
    { 
        number: 3, 
        title: 'Interview with our Admissions Panel', 
        description: 'Shortlisted candidates book their slot for 2 stages: screening rounds & case evaluations, followed by conversations with Mesa Leadership.' 
    },
    { 
        number: 4, 
        title: 'Receive the verdict', 
        description: 'You will receive your result within 10 working days of your last interview: selected, waitlisted, or rejected.' 
    },
];

const Admission = () => {
    return (
        <div className="mesa-full-section">
            
            {/* --- CAREER OUTCOMES COMPONENT (Left Side) --- */}
            <section className="mesa-outcomes-component">
                <h2 className="outcomes-heading">
                    <Rocket size={36} color="#ff6600" className="heading-icon" /> 
                    Career Outcomes Achieved
                </h2>
                <p className="section-description">
                    Mesa talent fuels some of India's most exciting startups through full-time roles, internships, and mentorship.
                </p>

                {/* Stat Cards Container */}
                <div className="stats-container">
                    {statsData.map(stat => (
                        <div className="stat-card" key={stat.id}>
                            <div className="stat-icon">
                                {/* IconComponent is dynamically rendered here */}
                                <stat.IconComponent size={30} color="#ff6600" />
                            </div>
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Hiring Partners Logos */}
                <h3 className="partner-heading">The Startup Ecosystem Backs Mesa Talent</h3>
                <div className="partners-grid">
                    {partnersData.map((partner, index) => (
                        <div className="partner-logo" key={index}>
                            {partner}
                        </div>
                    ))}
                </div>
            </section>

            <div className="section-divider"></div>

            {/* --- ADMISSIONS PROCESS COMPONENT (Right Side) --- */}
            <section className="mesa-admissions-component">
                <h2 className="admissions-heading">
                    Admissions for the PGP in Startup Leadership
                </h2>
                
                {/* Eligibility */}
                <div className="eligibility-container">
                    <div className="eligibility-card">
                        <GraduationCap size={24} color="#ff6600" />
                        <div className="eligibility-details">
                            <span className="eligibility-title">Education</span>
                            <p className="eligibility-text">A bachelor's degree in any discipline.</p>
                        </div>
                    </div>
                    <div className="eligibility-card">
                        <FileText size={24} color="#ff6600" />
                        <div className="eligibility-details">
                            <span className="eligibility-title">Professional Experience</span>
                            <p className="eligibility-text">1+ year of work experience in any domain (preferred).</p>
                        </div>
                    </div>
                </div>
                
                <h3 className="step-heading">A step-by-step guide</h3>

                {/* Admission Steps */}
                <div className="steps-container">
                    {admissionsSteps.map(step => (
                        <div className="admission-step" key={step.number}>
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <h4 className="step-title">{step.title}</h4>
                                <p className="step-description">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="apply-now-button">
                    Apply Now
                </button>
            </section>

        </div>
    );
};

export default Admission;