import React, { useMemo, useState } from "react";
import "./Cloudexpert.css";

import bgImage from "../../assets/tt1.png";
import person1 from "../../assets/tt2.png";
import person2 from "../../assets/tt3.png";
import person3 from "../../assets/tt4.png";
import person4 from "../../assets/tt5.png";

const teamData = [
  { img: person1, name: "Masirul Islam", role: "Cloud Solutions Architect" },
  { img: person2, name: "Jenny Wilson", role: "Web & UI/UX Designer" },
  { img: person3, name: "Floyd Miles", role: "App Development Specialist" },
  { img: person4, name: "Wade Warren", role: "Cloud Security Engineer" },
];

const TeamExpert = () => {
  const PAGE_SIZE = 2; // Show 2 cards per page
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(teamData.length / PAGE_SIZE);

  const pageData = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return teamData.slice(start, start + PAGE_SIZE);
  }, [page]);

  const goPrev = () => setPage((p) => Math.max(1, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <section
      className="teamPro-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="teamPro-container">

        {/* HEADER */}
        <div className="teamPro-header">
          <span className="teamPro-badge">← OUR EXPERT →</span>
          <h2 className="teamPro-title">
            Meet the CloudXSecure Expert Team
          </h2>
        </div>

        {/* GRID */}
        <div className="teamPro-grid">
          {pageData.map((item, index) => (
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

        {/* PAGINATION */}
        <div className="teamPro-pagination">

          <button
            type="button"
            className="teamPro-pageBtn"
            onClick={goPrev}
            disabled={page === 1}
          >
            ‹ Prev
          </button>

          <div className="teamPro-pages">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type="button"
                className={`teamPro-pageNumber ${page === p ? "isActive" : ""}`}
                onClick={() => setPage(p)}
              >
                {p}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="teamPro-pageBtn"
            onClick={goNext}
            disabled={page === totalPages}
          >
            Next ›
          </button>

        </div>

      </div>
    </section>
  );
};

export default TeamExpert;