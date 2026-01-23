import React, { useEffect, useState } from "react";
import "./ConsultHeroBanner.css";

import banner1 from "../../assets/banner_bg01.webp";
import banner2 from "../../assets/banner_bg02(Const).webp";

const heroImages = [banner1, banner2];

const HeroBanner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="cx-hero">
      <div className="cx-hero__bg">
        <img
          src={heroImages[currentImage]}
          alt="Hero Background"
          className="cx-hero__img"
        />
      </div>

      <div className="cx-hero__content">
        <span className="cx-hero__subtitle">WE ARE EXPERT IN THIS FIELD</span>

        <h1 className="cx-hero__title">
          Grow Your Business <br /> More Efficiently
        </h1>

        <p className="cx-hero__desc">
          Agilos helps you to convert your data into a strategic asset and
          get top-notch business insights.
        </p>

        <button className="cx-hero__btn">
          Our Services <span>➜</span>
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
