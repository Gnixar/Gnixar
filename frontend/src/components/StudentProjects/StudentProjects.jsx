import { useRef } from "react";
import "./StudentProjects.css";

const projects = [
  { img: "/ecommerce.png", title: "E-Commerce Platform" },
  { img: "/dashboard.png", title: "Analytics Dashboard" },
  { img: "/travel.png", title: "Travel Booking App" },
  { img: "/socialmedia.png", title: "Social Media Platform" },
  { img: "/student2.jpg", title: "Fintech Web App" },
  { img: "/student2.jpg", title: "Portfolio Website" },
];

export default function StudentProjects() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    scrollRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="crio-projects">
      <div className="crio-wrapper">

        {/* HEADER */}
        <div className="crio-header">
          <h2>Real-world Projects built by learners</h2>
          <p>Hands-on projects that simulate real industry workflows.</p>
        </div>

        {/* CAROUSEL */}
        <div className="crio-carousel">

          <button
            className="crio-arrow left"
            onClick={() => scroll("left")}
            aria-label="Scroll Left"
          >
            ‹
          </button>

          <div className="crio-scroll" ref={scrollRef}>
            {projects.map((proj, i) => (
              <div className="crio-card" key={i}>

                <div className="crio-card-icon">
                  <img src={proj.img} alt={proj.title} />
                </div>

                <h3 className="crio-card-title">{proj.title}</h3>

                <p className="crio-card-desc">
                  Build a scalable, production-ready application following
                  real-world engineering best practices.
                </p>

                <div className="crio-card-stack">
                  React · Node.js · MongoDB
                </div>

              </div>
            ))}
          </div>

          <button
            className="crio-arrow right"
            onClick={() => scroll("right")}
            aria-label="Scroll Right"
          >
            ›
          </button>

        </div>

      </div>
    </section>
  );
}
