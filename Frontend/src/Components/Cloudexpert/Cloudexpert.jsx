import React from "react";
import "./Cloudexpert.css";

import bgImage from "../../assets/tt1.png";
import person1 from "../../assets/tt2.png";
import person2 from "../../assets/tt3.png";
import person3 from "../../assets/tt4.png";
import person4 from "../../assets/tt5.png";

const teamData = [
  {
    img: person1,
    name: "Masirul Islam",
    role: "Cloud Solutions Architect",
  },
  {
    img: person2,
    name: "Jenny Wilson",
    role: "Web & UI/UX Designer",
  },
  {
    img: person3,
    name: "Floyd Miles",
    role: "App Development Specialist",
  },
  {
    img: person4,
    name: "Wade Warren",
    role: "Cloud Security Engineer",
  },
];

const TeamExpert = () => {
  return (
    <section
      className="teamPro-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="teamPro-container">

        {/* HEADER */}
        <div className="teamPro-header">
          <span className="teamPro-badge">
            ← OUR EXPERT →
          </span>

          <h2 className="teamPro-title">
            Meet the CloudXSecure Expert Team
          </h2>
        </div>

        {/* GRID */}
        <div className="teamPro-grid">
          {teamData.map((item, index) => (
            <div key={index} className="teamPro-card">

              <div className="teamPro-imageWrap">
                <img src={item.img} alt={item.name} />
              </div>

              <div className="teamPro-info">
                <h4>{item.name}</h4>
                <p>{item.role}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamExpert;
