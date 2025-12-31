import React from "react";
import "./AboutUs.css";
import Navbar from "../../components/Navbar/Navbar.jsx";

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <section className="about-container">
      <div className="about-inner">

        <h1 className="about-title">About Us</h1>
        <p className="about-text">
          At Gnixar, we believe education is a personal journey, not a
          one-size-fits-all path. Born from the heart of real learners, we stand
          beside every student as equals, celebrating the hustlers from all walks
          of life. We're not just an edtech platform; we will be a movement
          breaking the mould, championing quality learning over quantity, and the
          spirit of true understanding over mere certification. Every learner's
          dream is unique, and we're here to forge a path to their greatest
          potential — together.
        </p>

        <h2 className="about-heading">Our Story</h2>
        <p className="about-text">
          In our narrative, you'll find two founders united by a shared mission:
          to reimagine education for those with ambition and tenacity. We've been
          part of the edtech world, both learning and leading, and we've witnessed
          the shift from student-centric values to profit-driven agendas. It's
          this very shift that compelled us to create a new kind of learning
          environment, one that champions the student's well-being and success
          above all.
        </p>
        <p className="about-text">
          We're not backed by big investors; our capital is our vision for an
          education system that sees every student, hears every ambition, and
          supports every step towards achieving them. This is our story – a
          journey from learners to leaders, driven by the belief that the right
          education can redefine futures and empower the true potential of every
          hustler out there.
        </p>

        <h2 className="about-heading">Our Mission</h2>
        <p className="about-text">
          Our mission is to revolutionize the educational landscape by emphasizing
          quality over quantity. We're dedicated to maintaining small batch sizes
          to ensure each student receives focused, individualized support, whether
          they're seeking to deepen their core knowledge or secure job placement.
          With competitive fees and a foundation built on our extensive experience
          in the edtech sector, we're not just offering courses—we're cultivating
          a community of passionate learners with a growth mindset. This mission
          is our commitment to not only educate but to empower and transform lives
          through learning.
        </p>

        <h2 className="about-heading">Let's Connect</h2>
        <p className="about-text">
          Discover more about us, our mission, and the transformative experiences
          we offer by exploring our products. Connect with us to stay updated on
          the latest insights and join our community of like-minded learners.
          Reach out, engage, and let's grow together. Follow us on social media
          to be part of our story as it unfolds.
        </p>

      </div>
    </section>
    </>
  );
};

export default AboutUs;
