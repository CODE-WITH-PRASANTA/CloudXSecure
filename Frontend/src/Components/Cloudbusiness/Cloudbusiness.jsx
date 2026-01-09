import React from "react";
import "./Cloudbusiness.css";

// IMAGES (replace with your assets)
import mainPerson from "../../assets/hero-main.webp";
import rightCircle from "../../assets/heroShape1.webp";
import dnaImg from "../../assets/heroShape2.webp";
import solutionImg from "../../assets/heroShape3.webp";
import techImg from "../../assets/heroShape4.webp";
import reviewImg from "../../assets/riview.webp";


const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <div className="hero-badge">Everything You Need To Create A Website</div>

          <h1>
            Business Innovation With <br />
            <span>IT Services Expertise</span>
          </h1>

          <ul className="hero-points">
            <li>Deployment and Support</li>
            <li>Discovery and Analysis</li>
            <li>Flexibility and Adaptability</li>
            <li>Competitive Advantage</li>
          </ul>

          <button className="hero-btn">Get Started →</button>

          {/* REVIEWS */}
          <div className="hero-reviews">
            <div className="review-card">
              <h4>Trustpilot</h4>
              <div className="review-image">
  <img src={reviewImg} alt="Customer reviews" />
</div>

              <p>⭐ ⭐ ⭐ ⭐ ⭐ <span>450+ reviews</span></p>
            </div>

            <div className="review-card">
              <h4>Google</h4>
              <div className="review-image">
  <img src={reviewImg} alt="Customer reviews" />
</div>
              <p>⭐ ⭐ ⭐ ⭐ ⭐ <span>450+ reviews</span></p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="hero-visual">
          <img src={rightCircle} className="circle-bg" alt="" />
          <img src={mainPerson} className="main-person" alt="" />

          {/* FLOATING ELEMENTS */}
          <img src={dnaImg} className="float dna" alt="" />
          <img src={solutionImg} className="float solution" alt="" />
          <img src={techImg} className="float technology" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;