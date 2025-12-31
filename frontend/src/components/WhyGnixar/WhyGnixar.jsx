// src/components/About/WhyGnixar.jsx
import React from "react";
import "./WhyGnixar.css";

const WhyGnixar = () => {
  return (
    <section className="why-gnixar">
      <div className="why-gnixar-inner">
        <p className="why-gnixar-kicker">WHY GNIXAR</p>

        <h2 className="why-gnixar-title">A learner-first alternative to traditional EdTech</h2>

        <p className="why-gnixar-intro">
          Tired of EdTech companies that promise skills but prioritize degrees? Feeling stuck in your current career?
          Limited by outdated skills? Ready to make a change or unlock new opportunities in the booming tech industry?
        </p>

        <div className="why-gnixar-grid">
          <div className="why-card">
            <h3 className="why-card-title">Skills over degrees</h3>
            <p className="why-card-text">
              We believe that demonstrated abilities matter more than a piece of paper.
              Our programs focus on building practical, in-demand tech skills that employers truly value.
            </p>
          </div>

          <div className="why-card">
            <h3 className="why-card-title">Personalized attention</h3>
            <p className="why-card-text">
              Every student learns at their own pace. Our limited batch sizes ensure that instructors can provide
              tailored guidance, address individual roadblocks, and help you reach your full potential.
            </p>
          </div>

          <div className="why-card">
            <h3 className="why-card-title">Built for a changing tech world</h3>
            <p className="why-card-text">
              The tech world changes rapidly. Gnixar&apos;s commitment extends beyond your initial course completion.
              We offer ongoing upskilling opportunities and a supportive alumni network so you can continuously grow
              and adapt throughout your tech career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGnixar;
