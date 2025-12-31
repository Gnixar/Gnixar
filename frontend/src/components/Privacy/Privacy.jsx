import React from "react";
import './Privacy.css'
import Navbar from "../Navbar/Navbar";

const Privacy = () => {
  return (
    <>
    <Navbar/>
    <div className="privacy-page" style={{ padding: "30px", maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}>
      <h1>Privacy Policy</h1>

      <h2>Commitment to Privacy</h2>
      <p>
        Your privacy is paramount to us. At <strong>Gnixar</strong>, we are dedicated to
        safeguarding your personal information collected through our website and services.
      </p>

      <h2>Information Collection and Use</h2>
      <p>
        We collect personal information only when necessary, with your consent, and for the purpose of
        providing our services efficiently. You'll always be informed about why we're collecting it and
        how it will be used.
      </p>

      <h2>Protection of Information</h2>
      <p>
        We employ robust security measures to protect your data from unauthorized access, loss, or misuse.
        Your information is retained only as long as needed to serve you.
      </p>

      <h2>Information Sharing</h2>
      <p>
        Your data is not rented, sold, or shared with third parties, except under specific conditions to
        deliver our services or when legally required.
      </p>

      <h2>User Rights</h2>
      <p>
        You have the right to refuse personal information requests from us, understanding it may affect
        the services we can provide.
      </p>

      <h2>External Links</h2>
      <p>
        Be aware of external sites linked from our platform, as we do not control their privacy practices.
      </p>

      <h2>Policy Updates</h2>
      <p>
        This policy is subject to changes, which will be updated on our site. Your continued use signifies
        acceptance of these practices.
      </p>

      <h2>Contact for Queries</h2>
      <p>
        For any concerns or questions regarding our privacy practices, please reach out to us directly.
      </p>

      <h2>Effective Date</h2>
      <p>20th March, 2024</p>
    </div>
    </>
  );
};

export default Privacy;
