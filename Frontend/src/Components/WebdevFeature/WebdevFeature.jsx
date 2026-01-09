import React from "react";
import "./WebdevFeature.css";

import img1 from "../../assets/feature-one-img-1-1.webp";
import img2 from "../../assets/feature-one-img-1-2.webp";
import img3 from "../../assets/feature-one-img-1-3.webp";
import waveShape from "../../assets/feature-one-shape-3.webp";

const features = [
  {
    img: img1,
    title: "Security Services",
    desc: "Innovating and empowering businesses with tailored solutions for success and growth. Innovating and empowering",
  },
  {
    img: img2,
    title: "Data Privacy",
    desc: "Innovating and empowering businesses with tailored solutions for success and growth. Innovating and empowering",
  },
  {
    img: img3,
    title: "Industry Certified",
    desc: "Innovating and empowering businesses with tailored solutions for success and growth. Innovating and empowering",
  },
];

const FeatureOne = () => {
  return (
    <section className="feature1-section">
      {/* Animated gradient overlay */}
      <div className="feature1-gradient"></div>

      <div className="feature1-container">
        {features.map((item, index) => (
          <div className="feature1-card" key={index}>
            <div className="feature1-img">
              <img src={item.img} alt={item.title} />
            </div>

            <h3 className="feature1-title">{item.title}</h3>
            <p className="feature1-desc">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Animated wave shape */}
      <img src={waveShape} alt="" className="feature1-wave" />
    </section>
  );
};

export default FeatureOne;
