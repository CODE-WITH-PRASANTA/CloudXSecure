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
            See Our Work in Action <br />
            Featured Projects
          </h2>

          <p className="txb-desc">
            Explore our diverse portfolio of successful projects & client
            engagements. From implementing robust cybersecurity solutions to
            developing cutting-edge software applications and optimizing
            network infrastructure.
          </p>

          {/* PROGRESS */}
          <div className="txb-progress">
            <div className="txb-progress-head">
              <span>IT Consulting</span>
              <span>80%</span>
            </div>
            <div className="txb-progress-bar">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>

          <div className="txb-progress">
            <div className="txb-progress-head">
              <span>Cyber Security</span>
              <span>90%</span>
            </div>
            <div className="txb-progress-bar">
              <span style={{ width: "90%" }}></span>
            </div>
          </div>

          <div className="txb-progress">
            <div className="txb-progress-head">
              <span>Cloud Solutions</span>
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
