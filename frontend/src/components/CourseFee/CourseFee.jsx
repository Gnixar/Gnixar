import React from "react";
import "./CourseFee.css";

const feeRows = [
  {
    category: "A",
    salaryRange: "< 3.5 LPA",
    admissionFee: "₹5,000",
    totalFee: "₹80,000",
  },
  {
    category: "B",
    salaryRange: "3.5 – 6 LPA",
    admissionFee: "₹5,000",
    totalFee: "₹1,50,000",
  },
  {
    category: "C",
    salaryRange: "6 – 10 LPA",
    admissionFee: "₹5,000",
    totalFee: "₹2,30,000",
  },
  {
    category: "D",
    salaryRange: "10 LPA & Above",
    admissionFee: "₹5,000",
    totalFee: "₹3,00,000",
  },
];

function CourseFee() {
  return (
    <section className="fee-section">
      <div className="fee-inner">
        <header className="fee-header">
          <p className="fee-kicker">Course Fee</p>
          <h2 className="fee-title">Outcome-linked, Salary-based Fee Structure</h2>
          <p className="fee-subtitle">
            Your total program fee depends on your current salary bracket. Everyone
            pays the same{" "}
            <span className="fee-highlight">admission fee of ₹5,000</span>.
          </p>
        </header>

        <div className="fee-card">
          <div className="fee-card-glow" />

          <div className="fee-table-wrapper">
            <table className="fee-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Your Salary Range (CTC)</th>
                  <th>Admission Fee</th>
                  <th>
                    Total Payable Fee
                    <span className="fee-th-sub">
                      (Including taxes if applicable)
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {feeRows.map((row) => (
                  <tr key={row.category}>
                    <td data-label="Category">{row.category}</td>
                    <td data-label="Your Salary Range (CTC)">
                      {row.salaryRange}
                    </td>
                    <td data-label="Admission Fee">{row.admissionFee}</td>
                    <td data-label="Total Payable Fee">{row.totalFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="fee-note">
            <span className="fee-note-em">
              *Get started by paying only an upfront fee of about{" "}
              <span className="fee-note-amount">₹49,000</span>,
            </span>{" "}
            and pay the remaining amount after successful placement.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CourseFee;
