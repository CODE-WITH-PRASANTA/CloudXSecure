import React, { useEffect, useState } from "react";
import "./WebdevelopmentBreadcrum.css";

import slide1 from "../../assets/hero-bg-1.jpg";
import slide2 from "../../assets/hero-bg-2.jpg";
import slide3 from "../../assets/hero-bg-3.jpg";

import shape1 from "../../assets/slides-shape-1.png";
import shape2 from "../../assets/slides-shape-2.png";
import shape3 from "../../assets/slides-shape-3.png";

const slides = [
  {
    image: slide1,
    title: "We Are Digital Agency & Tech Solution",
    subtitle:
      "We are leading technology solutions providing company all over the world doing over 40 years.",
  },
  {
    image: slide2,
    title: "Excellent IT Services For Your Success",
    subtitle:
      "We are leading technology solutions providing company all over the world doing over 40 years.",
  },
  {
    image: slide3,
    title: "Get The Best IT Solution From Us",
    subtitle:
      "We are leading technology solutions providing company all over the world doing over 40 years.",
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-slider">
      {/* Background */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${slides[index].image})` }}
      />

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Floating Shapes */}
      <img src={shape1} className="shape shape-1" alt="" />
      <img src={shape2} className="shape shape-2" alt="" />
      <img src={shape3} className="shape shape-3" alt="" />

      {/* Content */}
      <div className="hero-content">
        <span className="hero-tag">
          WE ARE LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY!
        </span>

        <h1>{slides[index].title}</h1>

        <p>{slides[index].subtitle}</p>

        <button className="hero-btn">Get Started</button>
      </div>

      {/* Navigation arrows */}
      <button className="hero-arrow left" onClick={prevSlide}>
        ❮
      </button>

      <button className="hero-arrow right" onClick={nextSlide}>
        ❯
      </button>
    </section>
  );
};

export default HeroSlider;
