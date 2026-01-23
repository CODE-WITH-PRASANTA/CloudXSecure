import React from "react";
import "./ConsultBrand.css";

import brand1 from "../../assets/const-brand_img01.webp";
import brand2 from "../../assets/const-brand_img02.webp";
import brand3 from "../../assets/const-brand_img03.webp";
import brand4 from "../../assets/const-brand_img04.webp";
import brand5 from "../../assets/const-brand_img05.webp";

const brands = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
];

const BrandSection = () => {
  return (
    <section className="brand-section">
      <div className="brand-wrapper">
        <div className="brand-track">
          {[...brands, ...brands].map((logo, index) => (
            <div className="brand-item" key={index}>
              <img src={logo} alt="brand logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
