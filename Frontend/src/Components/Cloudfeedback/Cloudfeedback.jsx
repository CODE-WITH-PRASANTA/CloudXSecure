import React, { useEffect, useRef, useState } from "react";
import "./Cloudfeedback.css";

import user1 from "../../assets/fe1.webp";
import user2 from "../../assets/fe2.webp";
import user3 from "../../assets/fe3.webp";
import quoteIcon from "../../assets/fe4.webp";

const testimonials = [
  {
    name: "Kristin Watson",
    role: "Web Designer",
    img: user1,
    text:
      "Extech has completely transformed our process. The user-friendly interface and powerful features maintaining our website.",
  },
  {
    name: "Theresa Webb",
    role: "Tech Enthusiast",
    img: user2,
    text:
      "I've been using Extech for several months now, and I'm extremely impressed with the ease of customization it offers.",
  },
  {
    name: "Ronald Richards",
    role: "Web Entrepreneur",
    img: user3,
    text:
      "Extech offers exceptional value for money. The comprehensive suite of tools makes it a for all.",
  },
];

const Testimonials = () => {
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // auto scroll
  useEffect(() => {
    let pos = 0;

    const move = () => {
      pos += 0.5;
      trackRef.current.style.transform = `translateX(-${pos}px)`;

      if (pos >= trackRef.current.scrollWidth / 2) {
        pos = 0;
      }

      detectCenter();
      requestAnimationFrame(move);
    };

    const detectCenter = () => {
      const cards = trackRef.current.children;
      const wrapperCenter =
        wrapperRef.current.getBoundingClientRect().left +
        wrapperRef.current.offsetWidth / 2;

      let closest = 0;
      let minDistance = Infinity;

      Array.from(cards).forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(wrapperCenter - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closest = i;
        }
      });

      setActiveIndex(closest);
    };

    move();
  }, []);

  return (
    <section className="tsl-section">
      <div className="tsl-heading">
        <span className="tsl-sub">TESTIMONIALS</span>
        <h2 className="tsl-title">Our Latest Client Feedback</h2>
      </div>

      <div className="tsl-slider-wrapper" ref={wrapperRef}>
        <div className="tsl-slider-track" ref={trackRef}>
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              className={`tsl-card ${
                i === activeIndex ? "tsl-card-active" : ""
              }`}
            >
              <div className="tsl-stars">★★★★★</div>

              <p className="tsl-text">"{item.text}"</p>

              <div className="tsl-user">
                <img src={item.img} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>

              <img src={quoteIcon} className="tsl-quote" alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
