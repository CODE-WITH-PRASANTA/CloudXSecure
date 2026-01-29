import React from "react";
import "./DevopsTeam.css";
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

import team1 from "../../assets/devops-team-img1.webp";
import team2 from "../../assets/devops-team-img2.webp";
import team3 from "../../assets/devops-team-img3.webp";

const teamData = [
  {
    img: team1,
    name: "John Doe",
    role: "Founder & Cloud Solutions Architect",
  },
  {
    img: team2,
    name: "Jane Smith",
    role: "Chef Technology Officer",
  },
  {
    img: team3,
    name: "Sarah Thompson",
    role: "Head of Project Management",
  },
];

const DevopsTeam = () => {
  return (
    <section className="devops-team-section">
      {/* HEADER */}
      <div className="devops-team-header">
        <span className="devops-team-tag">Our Team</span>
        <h2>
          The Team Behind the <span>Solutions</span>
        </h2>
      </div>

      {/* TEAM GRID */}
      <div className="devops-team-grid">
        {teamData.map((item, index) => (
          <div className="devops-team-card" key={index}>
            <div className="devops-team-img">
              <img src={item.img} alt={item.name} />
              <div className="devops-team-overlay"></div>

              <div className="devops-team-socials">
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaYoutube /></a>
                <a href="#"><FaTwitter /></a>
              </div>
            </div>

            <div className="devops-team-info">
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DevopsTeam;
