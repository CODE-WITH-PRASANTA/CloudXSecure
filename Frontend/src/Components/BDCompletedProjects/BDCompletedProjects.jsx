import React from "react";
import "./BDCompletedProjects.css";

import img1 from "../../assets/h2_services_img01.jpg";
import img2 from "../../assets/h2_services_img02.jpg";
import img3 from "../../assets/h2_services_img03.jpg";

const projects = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
];

const BDCompletedProjects = () => {
  return (
    <section className="completed-section">
      <div className="completed-container">
        {/* HEADER */}
        <div className="completed-header">
          <div className="left">
            <span className="badge">SUCCESSFUL CLIENT PROJECTS</span>
            <h2>
              Recent Cloud, Backup & Digital Transformation  <br /> Projects
            </h2>
          </div>

          <div className="right">
            <p>
              Explore how CloudXSecure helps organizations protect data, recover faster, and build secure digital platforms through cloud-first strategies.
            </p>
          </div>
        </div>

        {/* PROJECT CARDS */}
        <div className="projects-grid">
          {projects.map((item) => (
            <div className="project-card" key={item.id}>
              <img src={item.image} alt="project" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BDCompletedProjects;
