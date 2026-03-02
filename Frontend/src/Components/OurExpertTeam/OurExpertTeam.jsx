// import React, { memo, useEffect, useState } from "react";

import React, { memo, useState,useEffect } from "react";
import "./OurExpertTeam.css";
import API, { IMAGE_URL } from "../../api/axios";

const OurExpertTeam = memo(() => {
  const [TEAM, setTEAM] = useState([]);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const res = await API.get("/team?status=published");
      setTEAM(res.data.data || []);
    } catch (err) {
      console.error("FETCH TEAM ERROR:", err);
    }
  };
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
            <article className="OurExpertTeam-card" key={member._id}>
              <div className="OurExpertTeam-image-wrapper">
                <img
                  src={
                    member.image
                      ? `${IMAGE_URL}${member.image}`
                      : "https://via.placeholder.com/300"
                  }
                  alt={member.name}
                  loading="lazy"
                  className="OurExpertTeam-image"
                />

                <div className="OurExpertTeam-socials">
                  <a href={member.facebook || "#"} target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
                  <a href={member.instagram || "#"} target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
                  <a href={member.youtube || "#"} target="_blank" rel="noreferrer" aria-label="YouTube">▶</a>
                  <a href={member.linkedin || "#"} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
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