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
          <span className="about-tag">About Us</span>

          <h2 className="about-title">
            Transforming Industries with <br />
            Technology <span>Our Commitment</span>
          </h2>

          <p className="about-desc">
            At Your Company Name, we are passionate about leveraging technology
            to drive meaningful change. With a team of seasoned experts in IT
            solutions, we're committed to delivering cutting.
          </p>

          <ul className="about-list">
            <li>
              <FaCheckCircle /> Highlight the unique features or benefits
            </li>
            <li>
              <FaCheckCircle /> Provide a brief overview of each solution
            </li>
            <li>
              <FaCheckCircle /> Present your main solutions/services.
            </li>
          </ul>

          <a href="#" className="learn-more-btn">
            Learn More ↗
          </a>
        </div>
      </div>

      {/* STATS BOXES */}
      <div className="about-stats">
        <div className="stat-box">
          <h3>450+</h3>
          <p>Active Clients</p>
        </div>
        <div className="stat-box">
          <h3>990+</h3>
          <p>IT Projects</p>
        </div>
        <div className="stat-box">
          <h3>45+</h3>
          <p>Team Advisors</p>
        </div>
        <div className="stat-box ">
          <h3>20+</h3>
          <p>Glorious Years</p>
        </div>
      </div>
    </section>
  );
};

export default AboutTech;
