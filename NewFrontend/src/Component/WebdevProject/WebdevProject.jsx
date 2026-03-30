import React, { useEffect, useMemo, useRef, useState } from "react";
import "./WebdevProject.css";

import p1 from "../../assets/project-3-1.webp";
import p2 from "../../assets/project-3-2.webp";
import p3 from "../../assets/project-3-3.webp";
import p4 from "../../assets/project-3-4.webp";

const projects = [
  { id: 1, img: p1, tag: "Itzone", title: "Hosting Solution" },
  { id: 2, img: p2, tag: "Itzone", title: "Technology Growth" },
  { id: 3, img: p3, tag: "Itzone", title: "Safety Gurranted" },
  { id: 4, img: p4, tag: "Itzone", title: "IT Consultancy" },
];

const WebdevProject = () => {
  const headingRef = useRef(null);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const items = headingRef.current.querySelectorAll(".wp-reveal");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((el, i) => {
            el.style.animationDelay = `${i * 0.2}s`;
            el.classList.add("active");
          });
        }
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 1200) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = useMemo(() => {
    return Math.ceil(projects.length / itemsPerPage);
  }, [itemsPerPage]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  const visibleProjects = useMemo(() => {
    if (itemsPerPage === 4) return projects;

    const startIndex = (currentPage - 1) * itemsPerPage;
    return projects.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
  };

  return (
    <section className="wp-section">
      <div className="wp-heading" ref={headingRef}>
        <span className="wp-subtitle wp-reveal">SEE OUR PROJECT</span>
        <h2 className="wp-title">
          <span className="wp-reveal">Explore Our Recent</span>
          <span className="wp-reveal highlight">Work</span>
        </h2>
      </div>

      <div className="wp-grid">
        {visibleProjects.map((item) => (
          <div className="wp-card" key={item.id}>
            <img src={item.img} alt={item.title} />

            <div className="wp-overlay">
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <button className="wp-arrow">→</button>
            </div>
          </div>
        ))}
      </div>

      {itemsPerPage < 4 && (
        <div className="wp-pagination">
          <button
            className="wp-paginationArrow"
            onClick={handlePrev}
            aria-label="Previous page"
          >
            ‹
          </button>

          <div className="wp-paginationDots">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`wp-paginationDot ${
                  currentPage === index + 1 ? "wp-paginationDot--active" : ""
                }`}
                onClick={() => setCurrentPage(index + 1)}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="wp-paginationArrow"
            onClick={handleNext}
            aria-label="Next page"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default WebdevProject;