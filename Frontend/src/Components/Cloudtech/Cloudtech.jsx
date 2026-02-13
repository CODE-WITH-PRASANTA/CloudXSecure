import React from "react";
import "./Cloudtech.css";

import mainImg from "../../assets/aa1.webp";
import groupImg from "../../assets/aa2.webp";
import circleText from "../../assets/aa3.webp";
import handImg from "../../assets/aa4.webp";
import halfCircle from "../../assets/aa5.webp";
import iconBackend from "../../assets/aa6.webp";
import iconProduct from "../../assets/aa6.webp";

const AboutCompany = () => {
  return (
    <section className="aboutPro-section">

      {/* Decorative Background Images */}
      <img src={halfCircle} alt="" className="aboutPro-bgLeft" />
      <img src={handImg} alt="" className="aboutPro-bgRight" />

      <div className="aboutPro-container">

        {/* LEFT IMAGE AREA */}
        <div className="aboutPro-imageWrap">
          <img src={mainImg} alt="Main" className="aboutPro-mainImg" />

          <img src={circleText} alt="" className="aboutPro-rotateText" />

          <div className="aboutPro-smallImgBox">
            <img src={groupImg} alt="Team work" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="aboutPro-content">

          <span className="aboutPro-subtitle">
            ← ABOUT COMPANY →
          </span>

          <h2 className="aboutPro-title">
            Powering Digital Growth with <br />
            <span>Secure Cloud & Smart Development</span>
          </h2>

          <p className="aboutPro-desc">
            CloudXSecure provides cloud services, web design, app development,
            and complete IT solutions to help businesses grow securely and efficiently.
          </p>

          {/* FEATURES */}
          <div className="aboutPro-features">

            <div className="aboutPro-featureBox">
              <img src={iconBackend} alt="" />
              <span>Cloud & Infrastructure</span>
            </div>

            <div className="aboutPro-featureBox">
              <img src={iconProduct} alt="" />
              <span>Web & App Development</span>
            </div>

          </div>

          {/* STATS */}
          <div className="aboutPro-stats">
            <div>
              <h3>20.5k</h3>
              <p>Projects Done</p>
            </div>
            <div>
              <h3>100.5k</h3>
              <p>Happy Clients</p>
            </div>
            <div>
              <h3>150.5k</h3>
              <p>Team Members</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
