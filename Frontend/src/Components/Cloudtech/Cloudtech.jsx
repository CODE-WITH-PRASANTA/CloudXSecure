import React from "react";
import "./Cloudtech.css";

/* IMAGES */
import mainImg from "../../assets/aa1.webp";
import groupImg from "../../assets/aa2.webp";
import circleText from "../../assets/aa3.webp";
import handImg from "../../assets/aa4.webp";
import halfCircle from "../../assets/aa5.webp";
import iconBackend from "../../assets/aa6.webp";
import iconProduct from "../../assets/aa6.webp";

const AboutCompany = () => {
  return (
    <section className="ac-section">
      {/* left half background */}
      <img src={halfCircle} alt="" className="ac-half-circle" />

      {/* right hand image */}
      <img src={handImg} alt="" className="ac-hand-img" />

      <div className="ac-container">
        {/* LEFT IMAGE AREA */}
        <div className="ac-image-wrap">
          <img src={mainImg} alt="Main" className="ac-main-img" />

          {/* circular explore image */}
          <img src={circleText} alt="" className="ac-circle-text" />

          {/* small group image */}
          <div className="ac-small-img-box">
            <img src={groupImg} alt="Team work" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="ac-content">
          <span className="ac-subtitle">← ABOUT COMPANY →</span>

          <h2 className="ac-title">
           Powering Digital Growth with  <br /> Secure Cloud & Smart Development
          </h2>

          <p className="ac-desc">
          CloudXSecure provides cloud services, web design, app development, and complete IT solutions to help businesses grow securely and efficiently.          </p>

          {/* feature icons */}
          <div className="ac-feature-row">
            <div className="ac-feature-box">
              <img src={iconBackend} alt="" />
              <span>Cloud & <br />Infrastructure</span>
            </div>

            <div className="ac-feature-box">
              <img src={iconProduct} alt="" />
              <span>Web & App <br />Development</span>
            </div>
          </div>

          {/* stats */}
          <div className="ac-stats">
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
