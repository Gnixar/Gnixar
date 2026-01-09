import "./Differentiation.css";

const features = [
  {
    title: "Learn by Doing",
    desc: "Work on real industry projects instead of theoretical assignments."
  },
  {
    title: "Mentor-Led Learning",
    desc: "Get guidance from designers and PMs working at top companies."
  },
  {
    title: "Career-Focused Curriculum",
    desc: "Every module is designed around hiring requirements, not exams."
  },
  {
    title: "Strong Industry Network",
    desc: "Access hiring partners, referrals, and long-term career support."
  }
];

export default function Differentiation() {
  return (
    <section className="diff-section">
      <div className="diff-inner">

        {/* LEFT */}
        <div className="diff-left">
          <span className="diff-kicker">Why Gnixar</span>
          <h2 className="diff-title">
            What makes Gnixar <br />
            <span>different</span>
          </h2>
          <p className="diff-sub">
            Gnixar is built to bridge the gap between education and industry with outcomes that matter.
          </p>
        </div>

        {/* RIGHT */}
        <div className="diff-right">
          {features.map((item, i) => (
            <div className="diff-card" key={i}>
              <span className="diff-index">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
