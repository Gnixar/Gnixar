import React from "react";
import "./TermsAndCondition.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function TermsAndConditions() {
  return (
    <>
    <Navbar/>
    <div className="terms-container">
      <h2 className="terms-title">Terms and Conditions</h2>

      <section>
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing the website at <a href="https://www.gnixar.in">https://www.gnixar.in</a>, 
          you agree to comply with these Terms of Service, applicable laws, and regulations. 
          If you disagree with any part of the terms, you must not use our website. 
          The materials on our website are under copyright and trademark protection.
        </p>
      </section>

      <section>
        <h2>Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials on Gnixar's website for personal, non-commercial transitory viewing. This license is not a transfer of title. Under this license, you may not:</p>
        <ul>
          <li>Modify or copy the materials for any other use.</li>
          <li>Use the materials for any commercial purpose or public display.</li>
          <li>Attempt to decompile or reverse engineer any software on Gnixar's website.</li>
          <li>Remove any copyright or proprietary notations from the materials.</li>
          <li>Transfer the materials to another party or mirror them on any server.</li>
        </ul>
        <p>
          This license will terminate if you violate any of these restrictions and may be terminated by Gnixar at any time. 
          Upon termination, you must destroy any downloaded materials in your possession whether in electronic or printed format.
        </p>
      </section>

      <section>
        <h2>Disclaimer</h2>
        <p>
          The materials on Gnixar's website are provided "as is" without any warranties, expressed or implied. 
          Gnixar disclaims all other warranties, including, without limitation, implied warranties or conditions of merchantability, 
          fitness for a particular purpose, or non-infringement of intellectual property.
        </p>
      </section>

      <section>
        <h2>Limitations</h2>
        <p>
          Gnixar or its suppliers will not be liable for any damages arising from the use or inability to use the materials on Gnixar's website, 
          even if Gnixar or an authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>
      </section>

      <section>
        <h2>Accuracy of Materials</h2>
        <p>
          The materials on Gnixar's website could include errors. Gnixar does not warrant that any of the materials on its website are accurate, 
          complete, or current and may make changes to these materials at any time without notice.
        </p>
      </section>

      <section>
        <h2>Links</h2>
        <p>
          Gnixar has not reviewed all sites linked to its website and is not responsible for the contents of any such linked site. 
          The inclusion of any link does not imply endorsement by Gnixar.
        </p>
      </section>

      <section>
        <h2>Modifications</h2>
        <p>
          Gnixar may revise these terms of service for its website at any time without notice.
        </p>
      </section>

      <section>
        <h2>Governing Law</h2>
        <p>
          These terms and conditions are governed by the laws of India and you irrevocably submit to the exclusive jurisdiction of its courts.
        </p>
      </section>

      <section>
        <h2>Communication Policy</h2>
        <p>
          By accepting these Terms, you consent to Gnixar using your submitted information for responding to inquiries 
          and for administrative and marketing purposes.
        </p>
      </section>
    </div>
    <Footer/>
    </>
  );
}
