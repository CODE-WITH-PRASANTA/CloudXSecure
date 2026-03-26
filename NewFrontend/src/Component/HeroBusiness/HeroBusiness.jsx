import React from "react";
import "./HeroBusiness.css";
import { FiCloudLightning } from "react-icons/fi";

import businessCircle from "../../assets/B-circle.png"
import businessThumb from "../../assets/about-thumb.webp";

const HeroBusiness = () => {
  return (
    <section className="heroBusiness">
      <div className="heroBusiness__container">
        <div className="heroBusiness__left">
          <div className="heroBusiness__visual">
            {/* Orange card */}
            <div className="heroBusiness__orangeCard">
              <div className="heroBusiness__orangeImageWrap">
                <img
                  src={businessThumb}
                  alt="Business Solution"
                  className="heroBusiness__orangeImage"
                />
              </div>

              <div className="heroBusiness__orangeDots"></div>

              <div className="heroBusiness__orangeLabel">
                BEST IT SOLUTION
              </div>
            </div>

            {/* Blue card */}
            <div className="heroBusiness__blueCard">
              <div className="heroBusiness__blueCircleDot"></div>
              <div className="heroBusiness__blueMiniDots"></div>

              <div className="heroBusiness__blueImageWrap">
                <img
                  src={businessThumb}
                  alt="Modern Business"
                  className="heroBusiness__blueImage"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="heroBusiness__right">
          <img
            src={businessCircle}
            alt="Background Circle"
            className="heroBusiness__circle"
          />

          <div className="heroBusiness__content">
            <div className="heroBusiness__badge">
              <span className="heroBusiness__badgeLine"></span>
              <span className="heroBusiness__badgeText">SOLUTEK COMPANY</span>
            </div>

            <h2 className="heroBusiness__title">
              Essential IT Solutions For
              <br />
              Modern <span>Businesses.</span>
            </h2>

            <p className="heroBusiness__description">
              Monotonectally repurpose maintainable infrastruct whereas solutek
              in fermentum quis tempo sapien maximus design.
            </p>

            <div className="heroBusiness__feature">
              <div className="heroBusiness__featureIconWrap">
                <FiCloudLightning className="heroBusiness__featureIcon" />
              </div>

              <div className="heroBusiness__featureContent">
                <h3 className="heroBusiness__featureTitle">
                  Cloud Based Solution
                </h3>
                <p className="heroBusiness__featureText">
                  Monotonectally repurpose maintainable infrastruct whereas
                  solutek in fermentum quis tempo sapien maximus design.
                </p>
              </div>
            </div>

            <button className="heroBusiness__button">EXPLORE MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBusiness;