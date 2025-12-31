import React from 'react';
// 1. Import the external CSS file
import './MentorProfile.css'; 

// Dummy Data Mockup (Simulating data fetched from the Express API/MongoDB)
const mentor = {
    name: "Kinjal Roy",
    title: "Lead Mentor",
    primary_roles: [
        "Data Engineering Architect & Manager",
        "AWS Data & Analytics Specialist",
        "Multi-Cloud Expert (Azure | GCP)"
    ],
    experience_years: 10,
    bio_intro: "Kinjal Roy is an accomplished data engineering leader with 10+ years of experience in cloud-based analytics and data pipeline design.",
    specializations: {
        aws_services: ["Redshift", "Lambda", "Glue", "S3", "EventBridge", "CloudWatch"],
        multi_cloud_exposure: ["Azure Data Factory", "Databricks", "GCP BigQuery"]
    },
    previous_companies: ["Tredence Analytics", "Softcrylic", "Deloitte USI"],
    education: [
        { degree: "Masters", institution: "IIT Delhi" },
        { degree: "B.Tech – Computer Science", institution: "Institute of Engineering & Management" }
    ],
    session_focus: "Kinjal’s sessions are focused on hands-on AWS implementation, integrated with case studies from Azure and GCP, preparing learners for multi-cloud expertise.",
    cta_link: "/kinjal/schedule"            
};


const MentorProfile = () => {
    // In a real application, you would replace the hardcoded 'mentor' object
    // with state management to hold data fetched from your API.
    const { 
        name, title, primary_roles, education, session_focus, cta_link,
        bio_intro, experience_years, specializations 
    } = mentor;

    return (
        <section className="mentor-profile-section">
            <div className="mentor-profile-inner">
                {/* === The Unique Divided Layout Container === */}
                <div className="mentor-profile-layout">
                
                    {/* === LEFT COLUMN: ANCHOR/KEY INFO === */}
                    <div className="mentor-key-info">
                        <p className="mentor-tag">{title}</p>
                        <h2 className="mentor-name">{name}</h2>
                        
                        {/* Placeholder for Image/Icon */}
                        <div className="mentor-image-placeholder">
                            <img src="/Trainer.jpeg" alt="" />
                        </div>

                        {/* Dynamic Roles */}
                        <div className="mentor-primary-roles">
                            {primary_roles.map((role, index) => (
                                <p key={index}>{role}</p>
                            ))}
                        </div>
                        
                        {/* Dynamic Education */}
                        <div className="mentor-education">
                            {education.map((edu, index) => (
                                <p key={index}>Alumnus: {edu.institution} ({edu.degree})</p>
                            ))}
                        </div>
                    </div>
                    
                    {/* === RIGHT COLUMN: BIO CONTENT === */}
                    <div className="mentor-bio-content">
                        <div className="mentor-bio-block">
                            <h3>Introduction & Experience</h3>
                            <p>
                                {bio_intro} ({experience_years}+ years of experience). He blends technical mastery with strategic business acumen.
                            </p>
                            
                            <h3>Technical Focus</h3>
                            <p>
                                He specializes in AWS services like {specializations.aws_services.join(', ')}. 
                                He also has strong exposure to multi-cloud platforms including {specializations.multi_cloud_exposure.join(', ')}.
                            </p>
                            
                            <h3>Teaching Approach</h3>
                            <p className="teaching-focus">{session_focus}</p>
                            
                            <div className="cta-button">
                                <a href="">Connect With Mentor</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentorProfile;