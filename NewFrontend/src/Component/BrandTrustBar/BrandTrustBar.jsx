import React, { useEffect, useRef, useState } from "react";
import "./BrandTrustBar.css";

import trustpilotLogo from "../../assets/banner-two-trustpilot-logo.webp";
import brand1 from "../../assets/brand-1-1.webp";
import brand2 from "../../assets/brand-1-2.webp";
import brand3 from "../../assets/brand-1-3.webp";
import brand4 from "../../assets/brand-1-4.webp";
import brand5 from "../../assets/brand-1-5.webp";

import small1 from "../../assets/small-img-1.webp";
import small2 from "../../assets/small-img-2.webp";

const brands = [brand1, brand2, brand3, brand4, brand5];

const BrandTrustBar = () => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(1);

  // Clone slides (last + first)
  const carouselItems = [
    brands[brands.length - 1],
    ...brands,
    brands[0],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.style.transition = "transform 0.8s ease-in-out";
    slider.style.transform = `translateX(-${index * 180}px)`;

    // Reset instantly when reaching clone
    if (index === carouselItems.length - 1) {
      setTimeout(() => {
        slider.style.transition = "none";
        setIndex(1);
        slider.style.transform = `translateX(-${1 * 180}px)`;
      }, 800);
    }

    if (index === 0) {
      setTimeout(() => {
        slider.style.transition = "none";
        setIndex(carouselItems.length - 2);
        slider.style.transform = `translateX(-${(carouselItems.length - 2) * 180}px)`;
      }, 800);
    }
  }, [index, carouselItems.length]);

  return (
    <section className="btb-wrapper">
      <div className="btb-container">
        {/* Trustpilot */}
        <div className="btb-trustpilot">
          <div className="btb-small-imgs">
            <img src={small1} alt="" />
            <img src={small2} alt="" />
          </div>

          <img src={trustpilotLogo} alt="Trustpilot" className="btb-tp-logo" />

          <div className="btb-rating">
            <span className="btb-score">5.0 Excellent</span>
            <span className="btb-review">| Reviews 4,170</span>
          </div>
        </div>

        <span className="btb-divider" />

        {/* Brand Carousel */}
        <div className="btb-brand-viewport">
          <div className="btb-brand-slider" ref={sliderRef}>
            {carouselItems.map((logo, i) => (
              <div className="btb-brand-item" key={i}>
                <img src={logo} alt="brand" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandTrustBar;
