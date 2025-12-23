import React, { memo } from "react";
import "./OurExpertTeam.css";

// Local image imports
import alex from "../../assets/female.jpg";
import shelia from "../../assets/female.jpg";
import devin from "../../assets/female.jpg";

/* Static Team Data */
const TEAM = [
  {
    name: "SR. Alex Robertson",
    role: "Head of Cybersecurity",
    image: alex,
  },
  {
    name: "Shelia Abernathy",
    role: "Software Engineer",
    image: shelia,
  },
  {
    name: "Devin Romaguera",
    role: "Data Analytics Specialist",
    image: devin,
  },
];

const OurExpertTeam = memo(() => {
  return (
    <section className="OurExpertTeam-section">
      <div className="OurExpertTeam-container">
        {/* Header */}
        <header className="OurExpertTeam-header">
          <span className="OurExpertTeam-badge">
            <span className="OurExpertTeam-badge-icon">★</span>
            OUR BEST TEAM
          </span>

          <h2 className="OurExpertTeam-title">
            Meet Our Expert Team
          </h2>
        </header>

        {/* Grid */}
        <div className="OurExpertTeam-grid">
          {TEAM.map((member) => (
            <article className="OurExpertTeam-card" key={member.name}>
              <div className="OurExpertTeam-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="OurExpertTeam-image"
                />

                <div className="OurExpertTeam-socials">
                  <a href="#" aria-label="Facebook">f</a>
                  <a href="#" aria-label="Instagram">◎</a>
                  <a href="#" aria-label="YouTube">▶</a>
                  <a href="#" aria-label="LinkedIn">in</a>
                </div>
              </div>

              <div className="OurExpertTeam-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>

                <button
                  className="OurExpertTeam-share"
                  aria-label="Share profile"
                >
                  ↗
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

export default OurExpertTeam;
