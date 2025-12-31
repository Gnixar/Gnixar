// AIMLProjects.jsx
import React from "react";
import "./AIMLProjects.css";

const projects = [
  {
    id: 1,
    badge: "Project 1",
    title: "Machine Learning Model Development",
    description:
      "Build and evaluate end-to-end machine learning models using Python, covering data preprocessing, feature engineering, model training, and performance evaluation.",
  },
  {
    id: 2,
    badge: "Project 2",
    title: "Deep Learning with Neural Networks",
    description:
      "Design and train deep learning models using TensorFlow or PyTorch to solve real-world problems such as image classification or text analysis.",
  },
  {
    id: 3,
    badge: "Project 3",
    title: "AI-Powered Intelligent Application",
    description:
      "Develop a complete AI-driven application by integrating trained ML/DL models into a production-ready pipeline with inference and optimization.",
  },
];

function AIMLProjects() {
  return (
    <section className="aiml1-projects-section">
      <div className="aiml1-projects-inner">
        <header className="aiml1-projects-header">
          <p className="aiml1-projects-kicker">Projects</p>
          <h2 className="aiml1-projects-title">
            Industry-aligned, Hands-on AI & ML Projects
          </h2>
          <p className="aiml1-projects-intro">
            Learners will work on practical AI and Machine Learning projects
            designed to mirror real-world industry use cases.
          </p>
        </header>

        <div className="aiml1-projects-grid">
          {projects.map((project) => (
            <article className="aiml1-project-card" key={project.id}>
              <div className="aiml1-project-badge">{project.badge}</div>
              <h3 className="aiml1-project-title">{project.title}</h3>
              <p className="aiml1-project-body">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIMLProjects;
