import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    badge: "Project 1",
    title: "Foundational Data Pipeline on AWS",
    description:
      "Design and implement your first end-to-end data pipeline on AWS, focusing on foundational data engineering principles.",
  },
  {
    id: 2,
    badge: "Project 2",
    title: "Scalable Analytics with Redshift",
    description:
      "Develop a scalable data analytics solution using AWS Redshift and associated query services, handling multiple data sources efficiently.",
  },
  {
    id: 3,
    badge: "Project 3",
    title: "Advanced Serverless Data Pipeline",
    description:
      "Design an advanced, fully automated, and serverless data pipeline with orchestration and notification capabilities.",
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-inner">
        <header className="projects-header">
          <p className="projects-kicker">Projects</p>
          <h2 className="projects-title">
            Enterprise-grade, Hands-on Capstone Projects
          </h2>
          <p className="projects-intro">
            Learners will complete multiple hands-on projects, each designed
            to simulate real-world enterprise scenarios.
          </p>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-badge">{project.badge}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-body">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
