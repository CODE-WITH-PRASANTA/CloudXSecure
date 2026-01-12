import React, { useEffect, useRef } from "react";
import "./WebdevProjects.css";

import p1 from "../../assets/project-3-1.webp";
import p2 from "../../assets/project-3-2.webp";
import p3 from "../../assets/project-3-3.webp";
import p4 from "../../assets/project-3-4.webp";

const projects = [
  { img: p1, tag: "Itzone", title: "Hosting Solution" },
  { img: p2, tag: "Itzone", title: "Technology Growth" },
  { img: p3, tag: "Itzone", title: "Safety Gurranted" },
  { img: p4, tag: "Itzone", title: "IT Consultancy" },
];

const WebdevProject = () => {
  const headingRef = useRef(null);

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

    observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="wp-section">
      {/* HEADING */}
      <div className="wp-heading" ref={headingRef}>
        <span className="wp-subtitle wp-reveal">SEE OUR PROJECT</span>
        <h2 className="wp-title">
          <span className="wp-reveal">Explore Our Recent</span>
          <span className="wp-reveal highlight">Work</span>
        </h2>
      </div>

      {/* GRID */}
      <div className="wp-grid">
        {projects.map((item, index) => (
          <div className="wp-card" key={index}>
            <img src={item.img} alt={item.title} />

            <div className="wp-overlay">
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <button className="wp-arrow">→</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebdevProject;
