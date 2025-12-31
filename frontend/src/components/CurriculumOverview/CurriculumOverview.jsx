import { useState } from "react";
import "./curriculumOverview.css";

const curriculumData = [
  {
    module: "Module 01",
    title: "Foundations of Design",
    desc: "Learn design fundamentals, visual thinking, and problem solving.",
  },
  {
    module: "Module 02",
    title: "UI / UX & Product Thinking",
    desc: "Design digital products with user-first and business-first mindset.",
  },
  {
    module: "Module 03",
    title: "Industry Projects",
    desc: "Work on real-world projects with mentors from top companies.",
  },
  {
    module: "Module 04",
    title: "Portfolio & Career Prep",
    desc: "Build portfolio, crack interviews, and prepare for placements.",
  },
];

export default function CurriculumOverview() {
  const [active, setActive] = useState(0);

  return (
    <section className="gnixar-curriculum">
      <div className="gnixar-curriculum-inner">

        {/* LEFT CONTENT */}
        <div className="gnixar-curriculum-left">
          <span className="gnixar-kicker">Curriculum Overview</span>
          <h2 className="gnixar-title">
            What you’ll <span>learn</span>
          </h2>

          <div className="gnixar-accordion">
            {curriculumData.map((item, i) => (
              <div
                key={i}
                className={`gnixar-accordion-item ${
                  active === i ? "active" : ""
                }`}
              >
                <button
                  className="gnixar-accordion-header"
                  onClick={() => setActive(i)}
                >
                  <div>
                    <span className="gnixar-module">{item.module}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <span className="gnixar-toggle">
                    {active === i ? "–" : "+"}
                  </span>
                </button>

                {active === i && (
                  <div className="gnixar-accordion-body">
                    <p>{item.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
