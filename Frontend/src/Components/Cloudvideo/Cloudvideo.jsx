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
              <h4>Requirement Analysis</h4>
              <p>
                We carefully understand business goals, user needs, and technical
                requirements to build a strong project foundation.
              </p>
            </div>

            <div className="ps-card active">
              <span className="ps-number">02</span>
              <h4>UI / UX Design</h4>
              <p>
                Clean, user-focused designs that prioritize usability,
                accessibility, and consistent experience across devices.
              </p>
            </div>

            <div className="ps-card">
              <span className="ps-number">03</span>
              <h4>Prototype & Validation</h4>
              <p>
                Interactive prototypes are developed to validate ideas, refine
                workflows, and ensure clarity before development.
              </p>
            </div>

            <div className="ps-card">
              <span className="ps-number">04</span>
              <h4>Development & Delivery</h4>
              <p>
                Secure, scalable development followed by testing, optimization,
                and smooth project delivery.
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
