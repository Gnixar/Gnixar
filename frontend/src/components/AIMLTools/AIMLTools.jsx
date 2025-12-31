
import React from "react";
import {
  Brain,
  Code,
  BarChart3,
  Database,
  Cpu,
  Layers,
  BellRing,
  PlayCircle,
} from "lucide-react";
import "./AIMLTools.css";

const toolsData = [
  {
    title: "Programming & Core Libraries",
    icon: Code,
    items: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn"
    ],
  },
  {
    title: "Statistics & Data Analysis",
    icon: BarChart3,
    items: [
      "Descriptive Statistics",
      "Probability Distributions",
      "Hypothesis Testing",
      "EDA Techniques"
    ],
  },
  {
    title: "Machine Learning Libraries",
    icon: Brain,
    items: [
      "Scikit-learn",
      "Regression & Classification Models",
      "Clustering Algorithms",
      "Model Evaluation Metrics"
    ],
  },
  {
    title: "Feature Engineering & Optimization",
    icon: Layers,
    items: [
      "Feature Scaling",
      "Feature Selection",
      "Encoding Techniques",
      "Hyperparameter Tuning"
    ],
  },
  {
    title: "Databases & Data Handling",
    icon: Database,
    items: [
      "MySQL",
      "SQL Queries",
      "Joins & Subqueries",
      "Data Normalization"
    ],
  },
  {
    title: "Advanced ML Concepts",
    icon: Cpu,
    items: [
      "Ensemble Models",
      "PCA",
      "Recommendation Systems",
      "Bias–Variance Tradeoff"
    ],
  },
];

const AIMLTools = () => {
  return (
    <section className="aiml1-tools-section">
      <div className="aiml1-tools-inner">
        <div className="aiml1-tools-header">
          <p className="aiml1-tools-kicker">Technologies & Tools</p>
          <h2 className="aiml1-tools-title">Tools you’ll master</h2>
          <p className="aiml1-tools-intro">
            Gain hands-on experience with industry-standard Artificial Intelligence
            and Machine Learning tools used by data scientists and ML engineers.
          </p>
        </div>

        <div className="aiml1-tools-card">
          <div className="aiml1-tools-card-header">
            <PlayCircle className="aiml1-tools-main-icon" />
            <div>
              <h3>Hands-on, practical learning</h3>
              <p>
                Build real-world AI & ML models, perform data analysis,
                and work on end-to-end machine learning workflows.
              </p>
            </div>
          </div>

          <div className="aiml1-tools-grid">
            {toolsData.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.title} className="aiml1-tools-item">
                  <div className="aiml1-tools-item-header">
                    <Icon className="aiml1-tools-icon" />
                    <span>{group.title}</span>
                  </div>

                  <ul className="aiml1-tools-list">
                    {group.items.map((item) => (
                      <li key={item}>
                        <span className="aiml1-tools-dot" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="aiml1-tools-footnote">
            <BellRing className="aiml1-tools-footnote-icon" />
            <span>
              All tools are taught using real datasets, practical exercises,
              and project-based learning — not just theory.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMLTools;
