import React from "react";
import "./ConsultAboutSection.css";

import aboutBg from "../../assets/const-about_bg.webp";
import floatShape from "../../assets/const-about_img_shape02.webp";
import imgShape from "../../assets/const-about_img_shape01.webp";
import aboutImg from "../../assets/Const-about_img01.webp";

const AboutSection = () => {
  return (
    <section
      className="cx-about"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      {/* floating decoration */}
      <img src={floatShape} alt="" className="cx-about__float" />

      <div className="cx-about__container">
        {/* LEFT IMAGE */}
        <div className="cx-about__imageWrap">
          <img src={imgShape} alt="" className="cx-about__imgShape" />

          <div className="cx-about__circle">
            <img src={aboutImg} alt="About" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="cx-about__content">
          <span className="cx-about__label">WHAT WE ARE DOING</span>

          <h2 className="cx-about__title">
            Changing The Way To Do Best
            <br />
            Business Solutions
          </h2>

          <p className="cx-about__text">
            Borem ipsum dolor sit amet, consectetur adipiscing elit a florai
            psum dolor sit amet, consectetur adipiscing elit sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua quis suspendisse
            ultricies gravida.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="cx-about__cards">
        <div className="cx-card">
          <h4>Quality Services</h4>
          <p>Eiusmod tempor incididunt ut labore magna aliqua quisery.</p>
        </div>

        <div className="cx-card">
          <h4>Innovation Ideas</h4>
          <p>Eiusmod tempor incididunt ut labore magna aliqua quisery.</p>
        </div>

        <div className="cx-card">
          <h4>Business Growth</h4>
          <p>Eiusmod tempor incididunt ut labore magna aliqua quisery.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
