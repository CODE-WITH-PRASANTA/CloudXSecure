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
  const base = "cloudbusiness";

  return (
    <section className={`${base}__section`}>
      <div className={`${base}__container`}>

        {/* LEFT */}
        <div className={`${base}__content`}>

          {/* ✅ SMALL HEIGHT BREADCRUMB */}
          <div className={`${base}__breadcrumb`}>
            <span>Home</span>
            <span className={`${base}__sep`}>›</span>
            <span>Services</span>
            <span className={`${base}__sep`}>›</span>
            <span className={`${base}__active`}>
              IT Services
            </span>
          </div>

          <h1 className={`${base}__title`}>
            Business Innovation With <br />
            <span>IT Services Expertise</span>
          </h1>

          <ul className={`${base}__list`}>
            <li>Secure Cloud Deployment & 24/7 Support</li>
            <li>Custom Web & Mobile App Development</li>
            <li>Scalable Cloud Infrastructure</li>
            <li>Advanced Cybersecurity & Data Protection</li>
          </ul>

          <button className={`${base}__btn`}>
            Get Started →
          </button>

          {/* REVIEWS */}
          <div className={`${base}__reviews`}>
            <div className={`${base}__reviewBlock`}>
              <div className={`${base}__reviewTitle`}>
                <span className={`${base}__star`}>★</span>
                Trustpilot
              </div>

              <div className={`${base}__reviewBottom`}>
                <img src={trustpilotImg} alt="Trustpilot" />
                <div>
                  <div className={`${base}__stars`}>★★★★☆</div>
                  <span>450+ reviews</span>
                </div>
              </div>
            </div>

            <div className={`${base}__divider`} />

            <div className={`${base}__reviewBlock`}>
              <div className={`${base}__reviewTitle`}>
                Google
              </div>

              <div className={`${base}__reviewBottom`}>
                <img src={googleImg} alt="Google" />
                <div>
                  <div className={`${base}__stars`}>★★★★☆</div>
                  <span>450+ reviews</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className={`${base}__imageWrap`}>
          <img src={whiteCircle} alt="" className={`${base}__circle`} />
          <img src={dnaImg} alt="" className={`${base}__dna`} />
          <img src={solutionImg} alt="" className={`${base}__solution`} />
          <img src={techImg} alt="" className={`${base}__tech`} />
          <img src={mainPerson} alt="Hero" className={`${base}__main`} />
        </div>

      </div>
    </section>
  );
};

export default HeroITUnique;