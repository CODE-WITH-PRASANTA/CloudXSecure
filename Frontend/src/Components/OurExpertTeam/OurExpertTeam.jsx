import React, { memo, useEffect, useState } from "react";
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