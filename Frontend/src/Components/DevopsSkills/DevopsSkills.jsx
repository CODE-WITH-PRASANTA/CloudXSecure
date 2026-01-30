import React from "react";
import "./DevopsSkills.css";
import skillsImg from "../../assets/devops-skill-image.webp";

const SkillsBlueSection = () => {
  return (
    <section className="txb-skills-section">
      <div className="txb-skills-wrapper">
        {/* LEFT CONTENT */}
        <div className="txb-skills-left">
          <span className="txb-tag">Our Skills</span>

          <h2 className="txb-title">
            See Our Work in Action – CloudXSecure<br />
            Featured Projects
          </h2>

          <p className="txb-desc">
            CloudXSecure delivers secure cloud services, custom web design, and scalable app development to help businesses innovate faster. From cloud infrastructure and DevOps automation to responsive websites and high-performance mobile applications, we provide end-to-end cloud solutions that enhance security, improve efficiency, and drive sustainable digital growth.
          </p>

          {/* PROGRESS */}
          <div className="txb-progress">
            <div className="txb-progress-head">
              <span>Cloud Consulting & Architecture</span>
              <span>80%</span>
            </div>
            <div className="txb-progress-bar">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>

          <div className="txb-progress">
            <div className="txb-progress-head">
              <span>Cybersecurity & Cloud Security</span>
              <span>90%</span>
            </div>
            <div className="txb-progress-bar">
              <span style={{ width: "90%" }}></span>
            </div>
          </div>

          <div className="txb-progress">
            <div className="txb-progress-head">
              <span>Web & App Development</span>
              <span>70%</span>
            </div>
            <div className="txb-progress-bar">
              <span style={{ width: "70%" }}></span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="txb-skills-right">
          <img src={skillsImg} alt="Skills" />
          <div className="txb-img-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default SkillsBlueSection;
