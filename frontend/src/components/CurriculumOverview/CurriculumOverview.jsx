import { useState } from "react";
import "./CurriculumOverview.css";

const curriculumData = [
  {
    module: "Module 01",
    title: "Programming Fundamentals",
    desc: "Learn core programming concepts including variables, control flow, functions, data structures, and problem-solving using JavaScript.",
  },
  {
    module: "Module 02",
    title: "Frontend & Backend Development",
    desc: "Build complete web applications using HTML, CSS, JavaScript, React for frontend, and Node.js, Express, REST APIs, and authentication for backend.",
  },
  {
    module: "Module 03",
    title: "Databases & System Design",
    desc: "Work with SQL & NoSQL databases, design efficient schemas, optimize queries, and understand system design fundamentals.",
  },
  {
    module: "Module 04",
    title: "Real-World Projects",
    desc: "Develop production-ready full-stack projects following industry best practices, Git workflows, testing, and deployment.",
  },
  {
    module: "Module 05",
    title: "Interview Prep & Career Launch",
    desc: "Prepare for technical interviews with DSA, coding challenges, mock interviews, resume building, and placement support.",
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
