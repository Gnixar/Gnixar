import React, { useContext } from "react";
import "./UniPartners.css";
import { CompanyContext } from "../../context/UniContext";

const UniPartners = () => {
  const { companies } = useContext(CompanyContext);

  return (
    <section className="partners-section">
      <div className="partners-section-inner">
        <div className="partners-header">
          <h2>Our Company Partners</h2>
          <p>
            Work with programs designed and endorsed by leading companies around the world.
          </p>
        </div>

        <div className="partners-slider">
          <div className="partners-track">
            {[...companies, ...companies].map((company, index) => (
              <div className="partner-card" key={company.id + "-" + index}>
                <div className="partner-logo-wrapper">
                  <img src={company.logo} alt={company.name} />
                </div>
                <span className="partner-name">{company.name}</span>
                <span className="partner-tag">
                  {company.location} • {company.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniPartners;
