import React from "react";
import "./ConsultProjects.css";

import bgImg from "../../assets/const-project_bg.webp";
import img1 from "../../assets/const-project_img01.webp";
import img2 from "../../assets/const-project_img02.webp";
import img3 from "../../assets/const-project_img03.webp";
import img4 from "../../assets/const-project_img04.webp";

const projects = [
  { img: img1, tag: "Achievement", title: "Based on your correct situation" },
  { img: img2, tag: "Business Strategy", title: "Best mortgage rates guaranteed." },
  { img: img3, tag: "Investment", title: "Investment Policy For New Project" },
  { img: img4, tag: "Achievement", title: "Business growth & planning" },
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
            Keep Your Business Safe Ensure <br />
            High Availability.
          </h2>
        </div>

        <div className="header-right">
          <p>
            Ever Find Yourself Staring At Your Computer Screen A Good
            Consulting Slogan To Come To Mind? Oftentimes.
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
