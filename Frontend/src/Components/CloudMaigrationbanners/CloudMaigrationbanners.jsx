import React, { useEffect, useState } from "react";
import "./CloudMaigrationbanners.css";

import img1 from "../../assets/slides-shape-1.png";   // floating left
import img2 from "../../assets/services-shape-1.png"; // floating right
import img3 from "../../assets/bottom-shape.webp";    // overlay
import img4 from "../../assets/hero-1.webp";          // bg 1
import img5 from "../../assets/hero-3.webp";          // bg 2
import img6 from "../../assets/mask-shape-2.webp";    // overlay
import img7 from "../../assets/hero-2.webp";          // bg 3
import img8 from "../../assets/border-shape.webp";    // overlay

const slides = [
  { bg: img4, overlay: img3 },
  { bg: img5, overlay: img6 },
  { bg: img7, overlay: img8 },
];

export default function HeroWaveSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((index + 1) % slides.length);
  const prev = () => setIndex((index - 1 + slides.length) % slides.length);

  return (
    <section className="heroWaveSlider">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`heroWaveSlider__slide ${
            i === index ? "active" : ""
          }`}
          style={{ backgroundImage: `url(${slide.bg})` }}
        >
          {/* floating shapes */}
          <img
            src={img1}
            className="heroWaveSlider__float heroWaveSlider__float--left"
            alt=""
          />
          <img
            src={img2}
            className="heroWaveSlider__float heroWaveSlider__float--right"
            alt=""
          />

          {/* overlay image */}
          <img
            src={slide.overlay}
            className="heroWaveSlider__overlay"
            alt=""
          />

          {/* content */}
          <div className="heroWaveSlider__content">
            <span className="heroWaveSlider__tag">— best it company</span>
            <h1>Seamless Cloud Migration & Smart Digital Solutions</h1>
            <p>
             CloudXSecure delivers secure cloud services, modern web design, custom app development, and end-to-end cloud solutions to help businesses migrate faster, scale smarter, and stay protected. We simplify your digital transformation with reliable infrastructure, performance-driven design, and expert support.
            </p>

            <div className="heroWaveSlider__buttons">
              <button className="heroWaveSlider__btn primary">
                Start Your Cloud Journey →
              </button>
              <button className="heroWaveSlider__btn outline">
                Talk to Our Experts →
              </button>
            </div>
          </div>

          {/* wavy bottom */}
          <div className="heroWaveSlider__wave"></div>
        </div>
      ))}

      {/* arrows */}
      <button className="heroWaveSlider__arrow left" onClick={prev}>
        ❮
      </button>
      <button className="heroWaveSlider__arrow right" onClick={next}>
        ❯
      </button>
    </section>
  );
}
