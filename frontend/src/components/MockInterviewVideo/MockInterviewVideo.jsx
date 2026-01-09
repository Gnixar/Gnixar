import React from "react";
import "./MockInterviewVideo.css";

const MockInterviewVideo = () => {
  return (
    <section className="mock-video">
      <div className="mock-video-container">
        {/* LEFT SIDE - VIDEO */}
        <div className="video-wrapper">
          <iframe
            className="bg-video"
            src="https://www.youtube.com/embed/8WyePUhkTi0?autoplay=1&mute=1&loop=1&playlist=8WyePUhkTi0"
            title="Mock Interview Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="content-wrapper">
          <h1>Mock Interview Practice</h1>
          <p>
            Improve your interview skills with real-time mock interviews.
            Get feedback and insights to perform better.
          </p>
          <a href="#header">
            <button>Start Now</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MockInterviewVideo;
