import React, { useState } from "react";
import "./ConsultAboutSection2.css";

import mainImg from "../../assets/const_about_img02.webp";
import teamImg from "../../assets/const_about_img03.webp";
import shapeWave from "../../assets/const_about_shape02.webp";
import shapeGrid from "../../assets/const-about_img_shape02.webp";

const AboutSecondSection = () => {
  const [about2VideoOpen, setAbout2VideoOpen] = useState(false);

  return (
    <>
      <section className="about2-wrapper">
        <div className="about2-container">

          {/* LEFT */}
          <div className="about2-left">
            <span className="about2-tag">WHO WE ARE</span>

            <h2 className="about2-heading">
              Building Your Own Startup
              <br /> Has Been Simpler
            </h2>

            <p className="about2-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Boreum ipsum dolor sit amet, consectetur elit florai psum.
            </p>

            <ul className="about2-list">
              <li>100% Better Results</li>
              <li>Valuable Ideas</li>
              <li>Budget Friendly Theme</li>
              <li>Happy Customers</li>
            </ul>

            <div className="about2-stats">
              <div>
                <h3>+150.000</h3>
                <span>Total Revenue in 1 Year</span>
              </div>
              <div>
                <h3>90%</h3>
                <span>Increase in Sales</span>
              </div>
            </div>

            <button className="about2-btn">
              Get Started With Us <span>➜</span>
            </button>
          </div>

          {/* RIGHT */}
          <div className="about2-right">

            {/* floating grid bg */}
            <img src={shapeGrid} className="about2-shape-grid" alt="" />

            {/* main image */}
            <div className="about2-main-img-wrap">
              <img src={mainImg} alt="about main" />

              {/* play button ON BIG IMAGE */}
              <button
                className="about2-play-btn-main"
                onClick={() => setAbout2VideoOpen(true)}
              >
                ▶
              </button>
            </div>

            {/* tilted small image */}
            <div className="about2-video-box">
              <img src={teamImg} alt="team" />
            </div>

            <img src={shapeWave} className="about2-shape-wave" alt="" />
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {about2VideoOpen && (
        <div
          className="about2-video-modal"
          onClick={() => setAbout2VideoOpen(false)}
        >
          <div
            className="about2-video-content"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>

            <button
              className="about2-close-btn"
              onClick={() => setAbout2VideoOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutSecondSection;
