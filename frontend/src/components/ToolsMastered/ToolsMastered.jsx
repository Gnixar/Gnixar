// ToolsMastered.jsx
import React from "react";
import {
  Cloud,
  Code,
  BarChart3,
  Database,
  Workflow,
  PlayCircle,
  BellRing,
} from "lucide-react";
import "./ToolsMastered.css";

const toolsData = [
  {
    title: "AWS Services",
    icon: Cloud,
    items: ["S3", "Redshift", "Glue", "Lambda", "EventBridge", "CloudWatch", "SNS"],
  },
  {
    title: "Programming & Querying",
    icon: Code,
    items: ["Python (Pandas, Boto3)", "SQL"],
  },
  {
    title: "Data Visualization",
    icon: BarChart3,
    items: ["Amazon QuickSight", "Power BI"],
  },
  {
    title: "Data Modelling & Architecture",
    icon: Database,
    items: ["Dimensional Modelling", "Star Schema", "Normalization"],
  },
  {
    title: "Orchestration & Automation",
    icon: Workflow,
    items: ["AWS Lambda", "EventBridge", "CloudWatch + SNS"],
  },
];

const ToolsMastered = () => {
  return (
    <section className="tools-section">
      <div className="tools-inner">
        <div className="tools-header">
          <p className="tools-kicker">Technologies &amp; Tools</p>
          <h2 className="tools-title">Tools you&apos;ll master</h2>
          <p className="tools-intro">
            You’ll work with a production-grade tech stack used by modern data teams:
            AWS services, Python, SQL, BI tools, and automation workflows.
          </p>
        </div>

        <div className="tools-card">
          <div className="tools-card-header">
            <PlayCircle className="tools-main-icon" />
            <div>
              <h3>Hands-on with real tools</h3>
              <p>Learn by building pipelines, dashboards and automation scripts.</p>
            </div>
          </div>

          <div className="tools-grid">
            {toolsData.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.title} className="tools-item">
                  <div className="tools-item-header">
                    <Icon className="tools-icon" />
                    <span>{group.title}</span>
                  </div>
                  <ul className="tools-list">
                    {group.items.map((item) => (
                      <li key={item}>
                        <span className="tools-dot" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="tools-footnote">
            <BellRing className="tools-footnote-icon" />
            <span>
              All tools are taught using real-world, project-based scenarios — not just theory.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsMastered;
