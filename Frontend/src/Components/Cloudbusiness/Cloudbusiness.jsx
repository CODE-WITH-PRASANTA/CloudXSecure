import React from "react";
import "./Cloudbusiness.css";

// IMAGES (replace paths with your assets)
import mainPerson from "../../assets/hero-main.webp";
import solutionImg from "../../assets/heroShape3.webp";
import techImg from "../../assets/heroShape4.webp";
import whiteCircle from "../../assets/heroShape1.webp";
import dnaImg from "../../assets/heroShape2.webp";
import trustpilotImg from "../../assets/riview.webp";
import googleImg from "../../assets/riview.webp";

const HeroITUnique = () => {
  return (
    <section className="heroItUnique-section">
      <div className="heroItUnique-container">
        {/* LEFT CONTENT */}
        <div className="heroItUnique-content">
          <span className="heroItUnique-badge">
            Everything You Need To Create A Website
          </span>

          <h1 className="heroItUnique-title">
            Business Innovation With <br /> IT Services Expertise
          </h1>

          <ul className="heroItUnique-list">
            <li>Deployment and Support</li>
            <li>Discovery and Analysis</li>
            <li>Flexibility and Adaptability</li>
            <li>Competitive Advantage</li>
          </ul>

          <button className="heroItUnique-btn">Get Started →</button>

          {/* REVIEWS CARD */}
<div className="heroItUnique-reviews">
  {/* Trustpilot block */}
  <div className="heroItUnique-reviewBlock">
    <div className="heroItUnique-reviewTitleRow">
      <span className="heroItUnique-reviewIcon">★</span>
      <span className="heroItUnique-reviewPlatform">Trustpilot</span>
    </div>

    <div className="heroItUnique-reviewBottomRow">
      {/* avatar strip image */}
      <img
        src={trustpilotImg}
        alt="Trustpilot reviewers"
        className="heroItUnique-reviewAvatars"
      />

      <div className="heroItUnique-reviewMeta">
        <div className="heroItUnique-stars">
          ★★★★☆
        </div>
        <span className="heroItUnique-reviewCount">450+ reviews</span>
      </div>
    </div>
  </div>

  {/* Vertical divider */}
  <div className="heroItUnique-reviewDivider" />

  {/* Google block */}
  <div className="heroItUnique-reviewBlock">
    <div className="heroItUnique-reviewTitleRow">
      <span className="heroItUnique-reviewPlatform">Google</span>
    </div>

    <div className="heroItUnique-reviewBottomRow">
      <img
        src={googleImg}
        alt="Google reviewers"
        className="heroItUnique-reviewAvatars"
      />

      <div className="heroItUnique-reviewMeta">
        <div className="heroItUnique-stars">
          ★★★★☆
        </div>
        <span className="heroItUnique-reviewCount">450+ reviews</span>
      </div>
    </div>
  </div>
</div>

        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="heroItUnique-imageWrap">
          <img src={whiteCircle} className="heroItUnique-circle" alt="" />
          <img src={dnaImg} className="heroItUnique-dna" alt="" />

          <img src={solutionImg} className="heroItUnique-solution" alt="" />
          <img src={techImg} className="heroItUnique-tech" alt="" />

          <img
            src={mainPerson}
            className="heroItUnique-mainImg"
            alt="Main Person"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroITUnique;