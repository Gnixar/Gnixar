import { useRef } from "react";
import "./StudentProjects.css";

const projects = [
  {
    img: "/dashboard.png",
    title: "Analytics Dashboard",
    desc: "Interactive analytics dashboard with real-time data visualization and role-based access.",
    stack: "React · Node.js · MongoDB · Chart.js",
  },
  {
    img: "/socialmedia.png",
    title: "Social Media Platform",
    desc: "Feature-rich social platform with authentication, feeds, likes, and real-time chat.",
    stack: "React · Firebase · Node.js · WebSockets",
  },
  {
    img: "/travel.png",
    title: "Travel Booking App",
    desc: "End-to-end travel booking system with search, filters, payments, and admin panel.",
    stack: "React · Express · MongoDB · Stripe",
  },
  {
    img: "/ecommerce.png",
    title: "E-Commerce Platform",
    desc: "Scalable e-commerce application with cart, checkout, and order management.",
    stack: "React · Node.js · MongoDB · Razorpay",
  },
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
    <section className="gnixar-projects">
      <div className="gnixar-wrapper">

        {/* HEADER */}
        <div className="gnixar-header">
          <h2>Real-world Projects built by learners</h2>
          <p>Hands-on projects that simulate real industry workflows.</p>
        </div>

        {/* CAROUSEL */}
        <div className="gnixar-carousel">

          <button
            className="gnixar-arrow left"
            onClick={() => scroll("left")}
            aria-label="Scroll Left"
          >
            ‹
          </button>

          <div className="gnixar-scroll" ref={scrollRef}>
            {projects.map((proj, i) => (
              <div className="gnixar-card" key={i}>

                <div className="gnixar-card-icon">
                  <img src={proj.img} alt={proj.title} />
                </div>

                <h3 className="gnixar-card-title">{proj.title}</h3>

                <p className="gnixar-card-desc">
                  {proj.desc}
                </p>

                <div className="gnixar-card-stack">
                  {proj.stack}
                </div>

              </div>
            ))}
          </div>

          <button
            className="gnixar-arrow right"
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
