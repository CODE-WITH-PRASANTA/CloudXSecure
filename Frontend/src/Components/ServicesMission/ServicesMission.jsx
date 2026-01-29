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
          Driving Innovation: Our <br /> Mission Vision at CloudXSecure
        </h2>

        <p className="intro">
         At CloudXSecure, we deliver secure cloud services, professional web design, custom app development, and end-to-end cloud solutions that help businesses scale faster, operate smarter, and stay protected in today’s digital world.
        </p>

        {/* CARD 1 */}
        <div className="mission-card">
          <div className="icon">
            <FiCheckCircle />
          </div>
          <div>
            <h4>Secure Cloud Infrastructure</h4>
            <p>
              We design and manage reliable cloud environments with advanced security, backup, and disaster recovery—ensuring high availability, performance, and data protection.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="mission-card">
          <div className="icon">
            <FiShare2 />
          </div>
          <div>
            <h4>Tailored Digital Solutions</h4>
            <p>
              From modern websites to scalable mobile apps, our custom development services are built to match your business goals and deliver measurable results.
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
