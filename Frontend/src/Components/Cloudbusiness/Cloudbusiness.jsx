import React from "react";
import "./Cloudbusiness.css";

import mainPerson from "../../assets/hero-main.webp";
import solutionImg from "../../assets/heroShape3.webp";
import techImg from "../../assets/heroShape4.webp";
import whiteCircle from "../../assets/heroShape1.webp";
import dnaImg from "../../assets/heroShape2.webp";
import trustpilotImg from "../../assets/riview.webp";
import googleImg from "../../assets/riview.webp";

const HeroITUnique = () => {
  return (
    <section className="heroPro-section">
      <div className="heroPro-container">

        {/* LEFT SIDE */}
        <div className="heroPro-content">
          <span className="heroPro-badge">
            Everything You Need To Create A Website
          </span>

          <h1 className="heroPro-title">
            Business Innovation With <br />
            <span>IT Services Expertise</span>
          </h1>

          <ul className="heroPro-list">
            <li>Secure Cloud Deployment & 24/7 Support</li>
            <li>Custom Web & Mobile App Development</li>
            <li>Scalable Cloud Infrastructure</li>
            <li>Advanced Cybersecurity & Data Protection</li>
          </ul>

          <button className="heroPro-btn">
            Get Started →
          </button>

          {/* REVIEW CARD */}
          <div className="heroPro-reviews">

            <div className="heroPro-reviewBlock">
              <div className="heroPro-reviewTitle">
                <span className="heroPro-star">★</span>
                Trustpilot
              </div>

              <div className="heroPro-reviewBottom">
                <img src={trustpilotImg} alt="" />
                <div>
                  <div className="heroPro-stars">★★★★☆</div>
                  <span>450+ reviews</span>
                </div>
              </div>
            </div>

            <div className="heroPro-divider"></div>

            <div className="heroPro-reviewBlock">
              <div className="heroPro-reviewTitle">
                Google
              </div>

              <div className="heroPro-reviewBottom">
                <img src={googleImg} alt="" />
                <div>
                  <div className="heroPro-stars">★★★★☆</div>
                  <span>450+ reviews</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="heroPro-imageWrap">
          <img src={whiteCircle} alt="" className="heroPro-circle" />
          <img src={dnaImg} alt="" className="heroPro-dna" />
          <img src={solutionImg} alt="" className="heroPro-solution" />
          <img src={techImg} alt="" className="heroPro-tech" />
          <img src={mainPerson} alt="Hero" className="heroPro-main" />
        </div>

      </div>
    </section>
  );
};

export default HeroITUnique;
