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
          <span className="tag">INSURANCE AGENCY</span>

          <h1>
            Today, any health insurance deductible can feel like
          </h1>

          <p className="description">
            When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.
          </p>

          {/* BULLET POINTS */}
          <ul className="feature-list">
            <li><FaCheckCircle /> 100% Better Results</li>
            <li><FaCheckCircle /> Suspe Ndisse Suscipit Sagittis</li>
            <li><FaCheckCircle /> Promis Timelined Guarantee</li>
            <li><FaCheckCircle /> Review Credit Reports</li>
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
