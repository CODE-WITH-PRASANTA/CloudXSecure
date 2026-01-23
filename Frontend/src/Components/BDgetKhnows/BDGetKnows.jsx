import React, { useEffect, useRef, useState } from "react";
import "./BDGetKnows.css";
import { FaArrowRight } from "react-icons/fa";

// CONTENT IMAGES
import mainImg from "../../assets/h2_about_img01.jpg";
import subImg from "../../assets/h2_about_img02.jpg";

// BACKGROUND SHAPES
import shapeCircle from "../../assets/h2_banner_shape01.png";
import shapeGrid from "../../assets/h2_about_shape03.png";

// BRAND LOGOS
import brand1 from "../../assets/brand_img01.png";
import brand2 from "../../assets/brand_img02.png";
import brand3 from "../../assets/brand_img03.png";
import brand4 from "../../assets/brand_img04.png";
import brand5 from "../../assets/brand_img05.png";

const BDGetKnows = () => {
  const brandRef = useRef(null);
  const [showBrands, setShowBrands] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowBrands(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (brandRef.current) observer.observe(brandRef.current);
  }, []);

  return (
    <section className="af-section">
      {/* BACKGROUND STRUCTURE */}
      <div className="af-bg-wrap" aria-hidden="true">
        <img src={shapeCircle} alt="" className="af-bg-circle" />
        <img src={shapeGrid} alt="" className="af-bg-grid" />
      </div>

      {/* MAIN CONTENT */}
      <div className="af-container">
        {/* LEFT */}
        <div className="af-left">
          <img src={mainImg} alt="Financial consultant" className="af-main-img" />

          <div className="af-experience">
            <strong>25</strong>
            <span>
              Years of Experience <br />
              in Finance Advisory
            </span>
          </div>

          <img src={subImg} alt="Team collaboration" className="af-sub-img" />
        </div>

        {/* RIGHT */}
        <div className="af-right">
          <span className="af-badge">GET TO KNOW US</span>

          <h2>
            Innovative Business Solutions <br />
            for Financial Company
          </h2>

          <p>
            We help organizations transform financial data into actionable
            insights that improve decision-making, performance, and long-term
            growth.
          </p>

          <ul className="af-list">
            <li><FaArrowRight /> 100% Better Results</li>
            <li><FaArrowRight /> Structured Financial Planning</li>
            <li><FaArrowRight /> Timeline-Driven Execution</li>
            <li><FaArrowRight /> Credit & Risk Review</li>
          </ul>

          <p>
            Our advisory approach combines experience, strategy, and measurable
            outcomes.
          </p>
        </div>
      </div>

      {/* ================= BRAND LOGOS (AUTO SCROLL) ================= */}
      <div
        ref={brandRef}
        className={`af-brands ${showBrands ? "show" : ""}`}
      >
        <div className="af-brand-track">
          <img src={brand1} alt="Client brand" />
          <img src={brand2} alt="Client brand" />
          <img src={brand3} alt="Client brand" />
          <img src={brand4} alt="Client brand" />
          <img src={brand5} alt="Client brand" />

          {/* DUPLICATE FOR SEAMLESS LOOP */}
          <img src={brand1} alt="Client brand" />
          <img src={brand2} alt="Client brand" />
          <img src={brand3} alt="Client brand" />
          <img src={brand4} alt="Client brand" />
          <img src={brand5} alt="Client brand" />
        </div>
      </div>
    </section>
  );
};

export default BDGetKnows;
