import React from "react";
import "./AboutSolution.css";
import { FiPlay } from "react-icons/fi";
import { RiCustomerService2Line } from "react-icons/ri";

import aboutMain from "../../assets/About-main.webp";
import aboutSmall from "../../assets/About-main.webp"; // replace with your 2nd image if available
// import leftShape from "../../assets/Bg-icon-1.webp";
import arrowShape from "../../assets/Bg-icon-2.webp";
// import rightShape from "../../assets/us-shape.png";

const AboutSolution = () => {
  return (
    <section className="aboutSolution">
    

      <div className="aboutSolution__container">
        <div className="aboutSolution__content">
          <div className="aboutSolution__subTitle">
            <span className="aboutSolution__subTitleLine"></span>
            <span className="aboutSolution__subTitleText">SOLUTEK COMPANY</span>
          </div>

          <h2 className="aboutSolution__title">
            We Can Clients With The
            <br />
            About <span>Solution.</span>
          </h2>

          <p className="aboutSolution__desc">
            Monotonectally repurpose maintainable infrastruct whereas solutek in
            fermentum quis tempo sapien maximus design.
          </p>

          <ul className="aboutSolution__list">
            <li className="aboutSolution__listItem">
              <span className="aboutSolution__dot"></span>
              <span>Best IT Solutions &amp; Service</span>
            </li>

            <li className="aboutSolution__listItem">
              <span className="aboutSolution__dot"></span>
              <span>24 Hour&apos;s Customer Service</span>
            </li>
          </ul>

          <div className="aboutSolution__bottom">
            <button className="aboutSolution__btn">EXPLORE MORE</button>

            <div className="aboutSolution__counterCard">
              <div className="aboutSolution__counterIcon">
                <RiCustomerService2Line />
              </div>
              <h3 className="aboutSolution__counterNumber">826</h3>
              <p className="aboutSolution__counterText">SATISFIED CLIENTS</p>
            </div>
          </div>
        </div>

        <div className="aboutSolution__media">
          <div className="aboutSolution__mainWrap">
            <span className="aboutSolution__accentBar"></span>
            <img
              src={aboutMain}
              alt="Main"
              className="aboutSolution__mainImage"
            />

            <div className="aboutSolution__arrowShape">
              <img src={arrowShape} alt="Arrow shape" />
            </div>
          </div>

          <div className="aboutSolution__sideWrap">
            <div className="aboutSolution__videoCard">
              <button className="aboutSolution__videoBtn" aria-label="Watch video">
                <span className="aboutSolution__videoInner">
                  <FiPlay />
                </span>
              </button>
              <span className="aboutSolution__videoText">WATCH VIDEO</span>
            </div>

            <div className="aboutSolution__smallImageWrap">
              <img
                src={aboutSmall}
                alt="Small"
                className="aboutSolution__smallImage"
              />
              <div className="aboutSolution__smallOverlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSolution;