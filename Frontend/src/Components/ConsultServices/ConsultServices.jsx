import React, { useEffect, useState } from "react";
import "./ConsultServices.css";

import bgImg from "../../assets/const_services_bg.webp";
import img1 from "../../assets/const_services_img01.webp";
import img2 from "../../assets/const_services_img02.webp";
import img3 from "../../assets/const_services_img03.webp";

const slides = [
  [img1, img2, img3],
  [img2, img1, img3],
  [img3, img2, img1],
  [img1, img3, img2],
];

export default function ServicesSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="srv-section"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="srv-container">
        <p className="srv-subtitle">OUR DEDICATED SERVICES</p>
        <h2 className="srv-title">
          Spotlight Some Most <br /> Important Features We Have
        </h2>
        <p className="srv-desc">
          Borem ipsum dolor sit amet consectetur adipiscing elit
        </p>

        <div className="srv-slider">
          {slides[active].map((img, index) => (
            <div className="srv-card" key={index}>
              <div className="srv-icon">{icons[index]}</div>
              <h3>{titles[index]}</h3>

              <div className="srv-img">
                <img src={img} alt="service" />
                <div className="srv-hover">
                  <button>
                    OUR SERVICES <span>➜</span>
                  </button>
                </div>
              </div>

              <ul>
                <li>Seusmayed Tempose Atidim Area</li>
                <li>Aliquam Duhipsum Is Simply Free</li>
                <li>Get Life Time Access</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="srv-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={active === i ? "active" : ""}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const titles = ["Business Analysis", "Tax Strategy", "Financial Advice"];

const icons = [
  // Business Analysis
  <svg viewBox="0 0 24 24" fill="none">
    <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" />
    <path d="M8 7V5h8v2" stroke="currentColor" />
  </svg>,

  // Tax Strategy
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="currentColor" />
    <path d="M9 12h6M12 9v6" stroke="currentColor" />
  </svg>,

  // Financial Advice
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M3 12h18" stroke="currentColor" />
    <path d="M7 8v8M17 6v12" stroke="currentColor" />
  </svg>,
];
