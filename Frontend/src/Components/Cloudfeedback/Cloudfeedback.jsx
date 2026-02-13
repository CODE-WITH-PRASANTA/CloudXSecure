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
      "CloudXSecure transformed our business with reliable cloud solutions and a beautifully designed website."
  },
  {
    name: "Theresa Webb",
    role: "Tech Enthusiast",
    img: user2,
    text:
      "From cloud infrastructure to custom app development, CloudXSecure handled everything professionally."
  },
  {
    name: "Ronald Richards",
    role: "Web Entrepreneur",
    img: user3,
    text:
      "Highly recommend CloudXSecure for web design and cloud services."
  }
];

const Testimonials = () => {
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);
  const animationRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const speed = 0.4;

  useEffect(() => {
    let pos = 0;
    let isPaused = false;

    const move = () => {
      if (!trackRef.current) return;

      if (!isPaused) {
        pos += speed;
        trackRef.current.style.transform = `translateX(-${pos}px)`;

        if (pos >= trackRef.current.scrollWidth / 2) {
          pos = 0;
        }

        detectCenter();
      }

      animationRef.current = requestAnimationFrame(move);
    };

    const detectCenter = () => {
      const cards = trackRef.current.children;
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const wrapperCenter = wrapperRect.left + wrapperRect.width / 2;

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

    const wrapper = wrapperRef.current;
    wrapper.addEventListener("mouseenter", () => (isPaused = true));
    wrapper.addEventListener("mouseleave", () => (isPaused = false));

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <section className="testiPro-section">
      <div className="testiPro-heading">
        <span className="testiPro-sub">TESTIMONIALS</span>
        <h2 className="testiPro-title">Our Latest Client Feedback</h2>
      </div>

      <div className="testiPro-wrapper" ref={wrapperRef}>
        <div className="testiPro-track" ref={trackRef}>
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              className={`testiPro-card ${
                i === activeIndex ? "active" : ""
              }`}
            >
              <div className="stars">★★★★★</div>
              <p>"{item.text}"</p>

              <div className="user">
                <img src={item.img} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>

              <img src={quoteIcon} className="quote" alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
