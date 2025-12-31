import React from "react";
import "./ServicesMission.css";
import { FiCheckCircle, FiShare2, FiArrowUpRight } from "react-icons/fi";

// ONLY 3 IMAGES
import imgTop from "../../assets/about-img13.webp";
import imgLeft from "../../assets/about-img14.webp";
import imgRight from "../../assets/about-img15.webp";

const MissionVision = () => {
  return (
    <section className="mission-wrapper">
      {/* LEFT CONTENT */}
      <div className="mission-content">
        <span className="badge">OUR MISSION / VISION</span>

        <h2>
          Driving Innovation: Our <br /> Mission Vision at Eitech
        </h2>

        <p className="intro">
          At the forefront of innovation, our cutting-edge IT solutions are
          designed to transform your business ETech operations.
        </p>

        {/* CARD 1 */}
        <div className="mission-card">
          <div className="icon">
            <FiCheckCircle />
          </div>
          <div>
            <h4>Network Infrastructure Solutions</h4>
            <p>
              In today’s fast-paced world, technology is the backbone of success.
              Our comprehensive IT solutions ensure stability.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="mission-card">
          <div className="icon">
            <FiShare2 />
          </div>
          <div>
            <h4>Performance Tailored IT Services</h4>
            <p>
              Our tailored IT services are crafted to meet your unique business
              needs and deliver measurable performance.
            </p>
          </div>
        </div>

        <button className="mission-btn">
          See How We Can Help <FiArrowUpRight />
        </button>
      </div>

      {/* RIGHT IMAGES */}
      <div className="mission-images">
        <div className="img-top">
          <img src={imgTop} alt="mission" />
        </div>

        <div className="img-bottom">
          <img src={imgLeft} alt="mission" />
          <img src={imgRight} alt="mission" />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
