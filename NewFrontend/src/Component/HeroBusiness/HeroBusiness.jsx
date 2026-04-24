import React from "react";
import "./HeroBusiness.css";
import { FiCloudLightning } from "react-icons/fi";

import businessCircle from "../../assets/B-circle.png";
import businessThumb from "../../assets/about-thumb.webp";

const HeroBusiness = () => {
  return (
    <section className="heroBusiness">
      <div className="heroBusiness__container">

        {/* LEFT SIDE */}
        <div className="heroBusiness__left">
          <div className="heroBusiness__visual">

            {/* Orange card */}
            <div className="heroBusiness__orangeCard">
              <div className="heroBusiness__orangeImageWrap">
                <img
                  src={businessThumb}
                  alt="CloudX Secure cybersecurity team protecting digital infrastructure"
                  className="heroBusiness__orangeImage"
                />
              </div>

              <div className="heroBusiness__orangeDots"></div>

              <div className="heroBusiness__orangeLabel">
                CLOUDX SECURE
              </div>
            </div>

            {/* Blue card */}
            <div className="heroBusiness__blueCard">
              <div className="heroBusiness__blueCircleDot"></div>
              <div className="heroBusiness__blueMiniDots"></div>

              <div className="heroBusiness__blueImageWrap">
                <img
                  src={businessThumb}
                  alt="Secure cloud infrastructure and data protection services"
                  className="heroBusiness__blueImage"
                />
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="heroBusiness__right">

          <img
            src={businessCircle}
            alt="decorative cloud security background"
            className="heroBusiness__circle"
          />

          <div className="heroBusiness__content">

            {/* BADGE */}
            <div className="heroBusiness__badge">
              <span className="heroBusiness__badgeLine"></span>
              <span className="heroBusiness__badgeText">
                ADVANCED CLOUD SECURITY
              </span>
            </div>

            {/* TITLE */}
            <h2 className="heroBusiness__title">
              Secure Your Digital Future
              <br />
              with <span>CloudX Secure</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="heroBusiness__description">
              At CloudX Secure, we help businesses protect their digital assets,
              secure sensitive data, and build reliable cloud environments.
              With the growing need for cybersecurity and scalable systems, our
              solutions are designed to safeguard your operations while keeping
              performance seamless. From startups to enterprises, we ensure your
              infrastructure stays protected, compliant, and future-ready.
            </p>

            {/* FEATURE */}
            <div className="heroBusiness__feature">
              <div className="heroBusiness__featureIconWrap">
                <FiCloudLightning className="heroBusiness__featureIcon" />
              </div>

              <div className="heroBusiness__featureContent">
                <h3 className="heroBusiness__featureTitle">
                  Secure Cloud Infrastructure
                </h3>
                <p className="heroBusiness__featureText">
                  Our cloud-first approach ensures your data is encrypted,
                  monitored, and always accessible. We deliver high-performance,
                  secure, and scalable cloud solutions that reduce risks and
                  improve operational efficiency.
                </p>
              </div>
            </div>

           <button
  className="heroBusiness__button"
  onClick={() =>
    window.open("https://wa.me/917666488777", "_blank")
  }
>
  Get Started Today
</button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroBusiness;