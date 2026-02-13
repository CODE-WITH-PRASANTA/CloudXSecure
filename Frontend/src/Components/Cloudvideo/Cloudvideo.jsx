import React, { useState, useEffect } from "react";
import "./Cloudvideo.css";
import processImg from "../../assets/videoThumb1.webp";

const ProcessSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  /* Prevent background scroll when modal is open */
  useEffect(() => {
    if (videoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [videoOpen]);

  return (
    <>
      <section className="processPro-wrapper">

        {/* IMAGE / VIDEO THUMB */}
        <div className="processPro-imageContainer">
          <img
            src={processImg}
            alt="Our Team Collaboration"
            className="processPro-mainImage"
          />

          <button
            className="processPro-playBtn"
            onClick={() => setVideoOpen(true)}
            aria-label="Play video"
          >
            ▶
          </button>
        </div>

        {/* PROCESS CONTENT */}
        <div className="processPro-content">
          <div className="processPro-grid">

            <div className="ps-card">
              <span className="ps-number">02</span>
              <h4>UI/UX & Architecture</h4>
              <p>
               We create user-focused designs and cloud architecture optimized for performance, security, and SEO.
              </p>
            </div>
            {[
              {
                num: "01",
                title: "Discovery & Planning",
                desc: "We analyze your business goals and technical needs to design secure cloud and scalable solutions."
              },
              {
                num: "02",
                title: "UI/UX & Architecture",
                desc: "We create user-focused designs and optimized cloud architecture for performance and security.",
                active: true
              },
              {
                num: "03",
                title: "Prototype & Validation",
                desc: "Interactive prototypes validate workflows and refine features before development."
              },
              {
                num: "04",
                title: "Development & Deployment",
                desc: "We deliver secure cloud systems, responsive websites, and scalable apps."
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`processPro-card ${item.active ? "active" : ""}`}
              >
                <span className="processPro-number">{item.num}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {videoOpen && (
        <div
          className="processPro-videoOverlay"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="processPro-videoBox"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
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
