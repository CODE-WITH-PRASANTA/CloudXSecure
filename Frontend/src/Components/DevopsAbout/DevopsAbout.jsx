import React from "react";
import "./DevopsAbout.css";
import aboutImg from "../../assets/devops-about-image.webp";
import { FaCheckCircle, FaArrowUp } from "react-icons/fa";

const AboutTech = () => {
  return (
    <section className="about-tech">
      <div className="about-tech-container">
        {/* IMAGE SIDE */}
        <div className="about-tech-image">
          <img src={aboutImg} alt="About Company" />

          {/* Experience Badge */}
          <div className="experience-badge">
            <h3>20+</h3>
            <p>Year Of Experience</p>
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div className="about-tech-content">
          <span className="about-tag">About CloudXSecure</span>

          <h2 className="about-title">
            Transforming Businesses with Secure Cloud, DevOps <span>& Digital Solutions</span>
          </h2>

          <p className="about-desc">
           CloudXSecure delivers end-to-end cloud services, DevOps automation, web design, and mobile app development to help businesses scale securely and efficiently. From cloud migration and infrastructure management to modern website and app solutions, we provide reliable, high-performance technology tailored to your growth.
          </p>

          <ul className="about-list">
            <li>
              <FaCheckCircle /> Secure cloud infrastructure & DevOps automation
            </li>
            <li>
              <FaCheckCircle /> Custom web design & mobile app development
            </li>
            <li>
              <FaCheckCircle /> Complete cloud solutions, migration & support
            </li>
          </ul>

          <a href="#" className="learn-more-btn">
           Explore Our Cloud Solutions ↗
          </a>
        </div>
      </div>

      {/* STATS BOXES */}
      <div className="about-stats">
        <div className="stat-box">
          <h3>450+</h3>
          <p>Trusted Clients Worldwide</p>
        </div>
        <div className="stat-box">
          <h3>990+</h3>
          <p>Cloud, Web & App Projects Delivered</p>
        </div>
        <div className="stat-box">
          <h3>45+</h3>
          <p>Certified Cloud & DevOps Experts</p>
        </div>
        <div className="stat-box ">
          <h3>20+</h3>
          <p>Years of Digital Innovation</p>
        </div>
      </div>
    </section>
  );
};

export default AboutTech;
