import React, { useEffect, useRef, useState } from "react";
import "./CloudMaigrationclients.css";
import { FaPlay, FaArrowRight } from "react-icons/fa";

// background image
import bgImg from "../../assets/bg.webp";

// card images (use any from your assets)
import c1 from "../../assets/card-1.webp";
import c2 from "../../assets/card-2.webp";
import c3 from "../../assets/card-3.webp";
import c4 from "../../assets/card-4.webp";

export default function ProjectShowcase() {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(0);

  const cards = [
    { id: 1, img: c1, tag: "Technology", title: "Software Development" },
    { id: 2, img: c2, tag: "Solutions", title: "Analytic Solutions" },
    { id: 3, img: c3, tag: "Technology", title: "Design Solutions" },
    { id: 4, img: c4, tag: "Technology", title: "Software Development" },
  ];

  /* ---------------- AUTO SLIDE ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [active]);

  const goTo = (index) => {
    const slider = sliderRef.current;
    const width = slider.children[0].offsetWidth + 30;

    slider.scrollTo({
      left: index * width,
      behavior: "smooth",
    });

    setActive(index);
  };

  const goNext = () => {
    const next = (active + 1) % cards.length;
    goTo(next);
  };

  return (
    <section
      className="ps-wrap"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* DARK OVERLAY */}
      <div className="ps-bg-overlay"></div>

      {/* HEADER */}
      <div className="ps-header">
        <span className="ps-tag">PROJECTS</span>
        <h2 className="ps-title">
          Our Latest Incredible <br /> Client's Projects
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

              {/* CARD CONTENT */}
              <div className="ps-card-info">
                <span>{item.tag}</span>
                <h4>{item.title}</h4>

                {/* ARROW */}
                <div className="ps-arrow">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
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
