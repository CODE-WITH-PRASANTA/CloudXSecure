//jsx//

import React, { memo, useState } from "react";
import "./OurExpertTeam.css";

// Local image imports
import alex from "../../assets/female.webp";
import shelia from "../../assets/dr-1.webp";
import devin from "../../assets/dr-2.webp";

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
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 1; // only 1 card per page in mobile
  const totalPages = Math.ceil(TEAM.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedTeam = TEAM.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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

        {/* Desktop / Tablet Grid */}
        <div className="OurExpertTeam-grid desktop-view">
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
                  <a href="#">f</a>
                  <a href="#">◎</a>
                  <a href="#">▶</a>
                  <a href="#">in</a>
                </div>
              </div>

              <div className="OurExpertTeam-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <button className="OurExpertTeam-share">↗</button>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View (With Pagination) */}
        <div className="mobile-view">
          {selectedTeam.map((member) => (
            <article className="OurExpertTeam-card" key={member.name}>
              <div className="OurExpertTeam-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="OurExpertTeam-image"
                />

                <div className="OurExpertTeam-socials">
                  <a href="#">f</a>
                  <a href="#">◎</a>
                  <a href="#">▶</a>
                  <a href="#">in</a>
                </div>
              </div>

              <div className="OurExpertTeam-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <button className="OurExpertTeam-share">↗</button>
              </div>
            </article>
          ))}

          {/* Pagination */}
          <div className="OurExpertTeam-pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={
                  currentPage === index + 1 ? "active" : ""
                }
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default OurExpertTeam;