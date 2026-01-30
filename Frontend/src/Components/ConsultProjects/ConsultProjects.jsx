import React from "react";
import "./ConsultProjects.css";

import bgImg from "../../assets/const-project_bg.webp";
import img1 from "../../assets/const-project_img01.webp";
import img2 from "../../assets/const-project_img02.webp";
import img3 from "../../assets/const-project_img03.webp";
import img4 from "../../assets/const-project_img04.webp";

const projects = [
  { img: img1, tag: "Cloud Solutions", title: "Secure Cloud Infrastructure Deployment" },
  { img: img2, tag: "Web & App Development", title: "Complete Digital Solutions" },
  { img: img3, tag: "Managed Cloud Services", title: "End-to-End Cloud Management & Support" },
  { img: img4, tag: "Complete Digital Solutions", title: "All-in-one cloud, web & app services." },
];

const ProjectSection = () => {
  return (
    <section
      className="project-section"
      style={{ backgroundImage: `url(${bgImg})` }}
    >

      {/* ===== TOP CONTENT ===== */}
      <div className="project-header">
        <div className="header-left">
          <span className="section-tag">CASE STUDIES</span>
          <h2>
            Our Success Stories in Cloud & <br />
            Digital Transformation
          </h2>
        </div>

        <div className="header-right">
          <p>
           CloudXSecure delivers secure cloud services, custom web design, and scalable app development to help businesses grow faster, stay protected, and succeed in the digital world.
          </p>
        </div>
      </div>

      {/* ===== SLIDER ===== */}
      <div className="project-slider-wrapper">
        <div className="project-track">
          {[...projects, ...projects].map((item, index) => (
            <div className="project-card" key={index}>
              <div className="project-img">
                <img src={item.img} alt="project" />
              </div>

              <div className="project-content">
                <span>{item.tag}</span>
                <h3>{item.title}</h3>

                <div className="arrow-btn">→</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ProjectSection;
