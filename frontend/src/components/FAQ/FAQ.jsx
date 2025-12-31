import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./FAQ.css"; // <-- External CSS import

export default function FAQ() {
  const faqs = [
    {
      q: "What is the Study Now, Pay Later scheme?",
      a: "The Study Now, Pay Later scheme is designed to provide students with an opportunity to pursue education in Coding and Data Science without paying upfront..."
    },
    {
      q: "How does the refund policy work for the Core Learning path?",
      a: "A part of the fee is non-refundable. The remaining portion is refundable based on conditions outlined in our refund policy."
    },
    {
      q: "What additional benefits do I get with the Placement Track?",
      a: "You receive specialized DSA training, communication skills training, and personalized placement support."
    },
    {
      q: "How are the EMIs calculated for the Placement Track?",
      a: "EMIs are calculated based on the remaining balance after any initial payments and are spread across 12–24 months."
    },
    {
      q: "Can I switch from the Core Learning path to the Placement Track later on?",
      a: "Yes, switching is allowed up to a certain point as per course policies."
    },
    {
      q: "What kind of support can I expect throughout my learning journey?",
      a: "You get doubt-clearing sessions, feedback on projects, and community support."
    },
    {
      q: "Who is eligible for the Study Now, Pay Later scheme?",
      a: "It is open to students, graduates, and professionals who meet the admissions criteria."
    },
    {
      q: "What happens if I am unable to secure a job after completing the Placement Track?",
      a: "Policies include extended support and possible EMI deferment if job placement is delayed."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-container">
      <h2 className="faq-title">Got Questions? We're here to answer them for you</h2>


      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{faq.q}</span>
              <ChevronDown
                className={`faq-icon ${openIndex === index ? "rotate" : ""}`}
              />
            </button>

            {openIndex === index && (
              <p className="faq-answer">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
