import React from "react";
import "./MockInterviewVideo.css";

const MockInterviewVideo = () => {
  return (
    <section className="mock-video">
      <div className="mock-video-contranier">
      {/* 🎥 BACKGROUND VIDEO */}
      <video
        className="bg-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
    </section>
  );
};

export default MockInterviewVideo;
