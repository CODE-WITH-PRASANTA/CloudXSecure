import React from "react";
import "./InsuranceHero.css";

// Images
import bigImage from "../../assets/marketimage2.jpg";
import smallCardImg from "../../assets/satisfiedclirntssmallimage.jpg";

// Icons
import { FaCheckCircle } from "react-icons/fa";
import { FaUsers, FaAward } from "react-icons/fa";

const InsuranceHero = () => {
  return (
    <section className="insurance-hero">
      <div className="insurance-hero-container">

        {/* LEFT SIDE IMAGES */}
        <div className="insurance-images">
          <img src={bigImage} className="big-image" alt="family" />

          <div className="small-card">
        
            <div className="small-card-imgs">
              <img src={smallCardImg} alt="client-icons" />
            </div>
          </div>

          <div className="experience-box">
            <h2>25</h2>
            <p>Years Of Experience</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="insurance-content">
          <span className="tag">CLOUD & DIGITAL SOLUTIONS</span>

          <h1>
            Power Your Business with Secure Cloud & Digital Solutions          </h1>

          <p className="description">
             CloudXSecure provides secure cloud services, professional web design, and custom app development to help businesses grow. Our complete cloud solutions deliver scalability, performance, and reliable digital experiences.          </p>

          {/* BULLET POINTS */}
          <ul className="feature-list">
            <li><FaCheckCircle /> Secure Cloud Infrastructure</li>
            <li><FaCheckCircle /> Web & App Development</li>
            <li><FaCheckCircle /> DevOps & Cloud Migration</li>
            <li><FaCheckCircle /> 24/7 Expert Support</li>
          </ul>

          {/* STAT ICONS */}
          <div className="stats-row">
            <div className="stat-box">
              <FaUsers className="stat-icon" />
              <h3>63%</h3>
              <p>Insured Customers</p>
            </div>

            <div className="stat-box">
              <FaAward className="stat-icon" />
              <h3>95%</h3>
              <p>Satisfied Award</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InsuranceHero;
