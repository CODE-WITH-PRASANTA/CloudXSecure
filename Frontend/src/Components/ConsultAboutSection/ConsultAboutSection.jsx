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
           Transforming Businesses with Secure Cloud &  <br />
             Digital Solutions 
          </h2>

          <p className="cx-about__text">
           At CloudXSecure, we help organizations modernize, scale, and succeed through powerful cloud services, professional web design, and custom mobile app development. Our expert team delivers end-to-end cloud solutions—from cloud consulting and infrastructure setup to application development and managed services—ensuring performance, security, and long-term growth. We combine innovation with reliability to help businesses embrace digital transformation with confidence.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="cx-about__cards">
        <div className="cx-card">
          <h4>Quality Cloud Services</h4>
          <p>Secure, scalable cloud services including migration, DevOps, and managed infrastructure to keep your business fast, safe, and always online.</p>
        </div>

        <div className="cx-card">
          <h4>Web & App Development</h4>
          <p>Modern websites and custom mobile apps designed for performance, usability, and growth—built to engage users and drive results.</p>
        </div>

        <div className="cx-card">
          <h4>Complete Cloud Solutions</h4>
          <p>End-to-end cloud solutions combining consulting, development, and management to accelerate digital transformation and business success.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
