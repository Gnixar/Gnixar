import {
  Rocket,
  IndianRupee,
  TrendingUp,
  Users,
  CheckCircle,
  Briefcase,
  Award
} from "lucide-react";

import "./Outcomes.css";
import logo1 from "../../assets/wipro.png";

const statsData = [
  { id: 1, IconComponent: IndianRupee, value: "26 Lakhs", label: "Average CTC" },
  { id: 2, IconComponent: TrendingUp, value: "45 Lakhs", label: "Highest CTC" },
  { id: 3, IconComponent: Users, value: "70 +", label: "Hiring partners" },
  { id: 4, IconComponent: CheckCircle, value: "100 %", label: "Placement rate" },
  { id: 5, IconComponent: Briefcase, value: "150 +", label: "Recruiters" },
  { id: 6, IconComponent: Award, value: "500 +", label: "Offers Made" }
];

const partnersData = Array(16).fill(logo1);

const Outcomes = () => {
  return (
    <section className="outcome-main">
      <div className="outcomes-wrapper">
        {/* STATS */}
        <div className="outcomes-component">
          <h2 className="outcomes-heading">
            <Rocket className="heading-icon" />
            Career Outcomes Achieved
          </h2>

          <div className="stats-container">
            {statsData.map((stat) => (
              <div className="stats-card" key={stat.id}>
                <div className="stats-icon">
                  <stat.IconComponent size={22} />
                </div>
                <div className="stats-value">{stat.value}</div>
                <div className="stats-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PARTNERS */}
        <div className="outcome-logo">
          <h3 className="partner-heading">
            The Startup Ecosystem Backs Gnixar Talent
          </h3>

          <div className="partners-grid">
            {partnersData.map((logo, index) => (
              <div className="partner-logo" key={index}>
                <img src={logo} alt={`Partner ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
