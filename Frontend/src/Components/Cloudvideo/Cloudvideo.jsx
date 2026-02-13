import React, { useState } from "react";
import "./Cloudvideo.css";
import processImg from "../../assets/videoThumb1.webp";

const ProcessSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="ps-wrapper">
        {/* IMAGE / VIDEO THUMB */}
        <div className="ps-image-container">
          <img
            src={processImg}
            alt="Our Team Collaboration"
            className="ps-main-image"
          />

          <button
            className="ps-play-btn"
            onClick={() => setVideoOpen(true)}
            aria-label="Play video"
          >
            ▶
          </button>
        </div>

        {/* PROCESS CONTENT */}
        <div className="ps-content">
          <div className="ps-grid">
            <div className="ps-card">
              <span className="ps-number">01</span>
              <h4>Discovery & Planning</h4>
              <p>
                We analyze your business goals and technical needs to design secure cloud, web, and app solutions that scale.
              </p>
            </div>

            <div className="ps-card">
              <span className="ps-number">02</span>
              <h4>UI/UX & Architecture</h4>
              <p>
               We create user-focused designs and cloud architecture optimized for performance, security, and SEO.
              </p>
            </div>

            <div className="ps-card">
              <span className="ps-number">03</span>
              <h4>Prototype & Validation</h4>
              <p>
                Interactive prototypes validate workflows, refine features, and ensure your product is ready for real users.
              </p>
            </div>

            <div className="ps-card">
              <span className="ps-number">04</span>
              <h4>Development & Deployment</h4>
              <p>
                We deliver secure cloud systems, responsive websites, and scalable apps—fully tested and production-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {videoOpen && (
        <div
          className="ps-video-overlay"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="ps-video-box"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Process Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProcessSection;
