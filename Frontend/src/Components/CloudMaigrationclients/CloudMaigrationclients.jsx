import React, { useEffect, useRef, useState } from "react";
import "./CloudMaigrationclients.css";
import { FaPlay, FaArrowRight } from "react-icons/fa";

// background image
import bgImg from "../../assets/bg.webp";

// card images
import c1 from "../../assets/card-1.webp";
import c2 from "../../assets/card-2.webp";
import c3 from "../../assets/card-3.webp";
import c4 from "../../assets/card-4.webp";

export default function ProjectShowcase() {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(0);

  const cards = [
    { id: 1, img: c1, tag: "Cloud Technology", title: "Secure Cloud Infrastructure" },
    { id: 2, img: c2, tag: "Cloud Solutions", title: "Data Analytics Platform" },
    { id: 3, img: c3, tag: "Web & App Design", title: "UI/UX Design Solutions" },
    { id: 4, img: c4, tag: "Software Development", title: "Custom App Development" },
  ];

  /* ---------------- AUTO SLIDE (FIXED) ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % cards.length;
        scrollToIndex(next);
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* ---------------- SCROLL FUNCTION ---------------- */
  const scrollToIndex = (index) => {
    const slider = sliderRef.current;
    if (!slider || !slider.children.length) return;

    const cardWidth = slider.children[0].offsetWidth + 30;

    slider.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  /* ---------------- MANUAL DOT CLICK ---------------- */
  const goTo = (index) => {
    scrollToIndex(index);
    setActive(index);
  };

  return (
    <section
      className="ps-wrap"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* OVERLAY */}
      <div className="ps-bg-overlay"></div>

      {/* HEADER */}
      <div className="ps-header">
        <span className="ps-tag">PROJECTS</span>
        <h2 className="ps-title">
         Our Latest Cloud, Web &  <br /> App Success Stories
        </h2>

        {/* VIDEO ICON */}
        <div className="ps-video-btn">
          <FaPlay />
        </div>
      </div>

      {/* SLIDER */}
      <div className="ps-slider-area">
        <div className="ps-slider" ref={sliderRef}>
          {cards.map((item, i) => (
            <div
              className={`ps-card ${i === active ? "active" : ""}`}
              key={item.id}
            >
              <img src={item.img} alt={item.title} />

              <div className="ps-card-info">
                <span>{item.tag}</span>
                <h4>{item.title}</h4>

                <div className="ps-arrow">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="ps-dots">
          {cards.map((_, i) => (
            <span
              key={i}
              className={`ps-dot ${i === active ? "active" : ""}`}
              onClick={() => goTo(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
