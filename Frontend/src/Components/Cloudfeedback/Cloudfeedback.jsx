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
      "CloudXSecure transformed our business with reliable cloud solutions and a beautifully designed website. Their team delivered fast, secure, and scalable results.",
  },
  {
    name: "Theresa Webb",
    role: "Tech Enthusiast",
    img: user2,
    text:
      "From cloud infrastructure to custom app development, CloudXSecure handled everything professionally. Outstanding support and performance-driven solutions.",
  },
  {
    name: "Ronald Richards",
    role: "Web Entrepreneur",
    img: user3,
    text:
      "Highly recommend CloudXSecure for web design and cloud services. They helped us launch faster, improve security, and scale with confidence.",
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
