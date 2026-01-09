import React, { useState } from "react";
import "./Cloudvideo.css";

// MAIN IMAGE
import processImg from "../../assets/videoThumb1.webp";

const ProcessSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="ps-wrapper">
        {/* IMAGE AREA */}
        <div className="ps-image-container">
          <img src={processImg} alt="Process" className="ps-main-image" />

          {/* PLAY BUTTON */}
          <button
            className="ps-play-btn"
            onClick={() => setVideoOpen(true)}
          >
            ▶
          </button>
        </div>

        {/* CONTENT */}
        <div className="ps-content">
          <div className="ps-grid">
            <div className="ps-card">
              <span className="ps-number">01</span>
              <h4>Requirement</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>

            <div className="ps-card active">
              <span className="ps-number">02</span>
              <h4>UI/UX Desing</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>

            <div className="ps-card">
              <span className="ps-number">03</span>
              <h4>Prototype</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>

            <div className="ps-card">
              <span className="ps-number">04</span>
              <h4>Development</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {videoOpen && (
        <div className="ps-video-overlay" onClick={() => setVideoOpen(false)}>
          <div className="ps-video-box" onClick={(e) => e.stopPropagation()}>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default ProcessSection;
