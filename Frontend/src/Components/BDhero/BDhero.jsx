import React from "react";
import "./BDhero.css";
import { FaChartLine, FaBriefcase, FaFileInvoiceDollar } from "react-icons/fa";

// MAIN IMAGE
import heroImg from "../../assets/h2_banner_img.png";

// BACKGROUND SHAPES
import arcImg from "../../assets/h2_banner_shape01.png";
import waveImg from "../../assets/h2_banner_shape02.png";
import dotsGridImg from "../../assets/about-one-shape-1.png";
import gradientBoxImg from "../../assets/banner-one-img-shape-5.png";

const BDhero = () => {
  return (
    <section className="he-wrapper">
      {/* BACKGROUND SHAPES */}
      <img src={arcImg} alt="" className="bg-shape bg-arc" />
      <img src={waveImg} alt="" className="bg-shape bg-wave" />
      <img src={dotsGridImg} alt="" className="bg-shape bg-dots-grid" />
      <img src={gradientBoxImg} alt="" className="bg-shape bg-gradient-box" />

      {/* HERO CONTENT */}
      <div className="he-container">
        {/* LEFT */}
        <div className="he-left">
          <span className="he-badge">WE ARE EXPERT IN THIS FIELD</span>

          <h1>
            Get a Smart Way <br /> For Your Business
          </h1>

          <p>
            Agilos helps you convert your data into a strategic asset and get
            top-notch business insights that drive smarter decisions.
          </p>

          <div className="he-actions">
            <button className="he-btn-primary">
              Our Services <span>→</span>
            </button>

            <button className="he-btn-video">
              <span className="play">▶</span>
              Watch The Video
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="he-right">
          <img src={heroImg} alt="Business Consultant" />
        </div>
      </div>

      {/* ================= BOTTOM FEATURES ================= */}
      <div className="he-features">
        <div className="he-feature">
          <div className="he-icon animated-icon">
            <FaChartLine />
          </div>
          <div>
            <h4>Growing Business</h4>
            <p>
              Financial strategies designed to drive sustainable growth and
              long-term success.
            </p>
          </div>
        </div>

        <div className="he-feature">
          <div className="he-icon animated-icon delay-1">
            <FaBriefcase />
          </div>
          <div>
            <h4>Finance Investment</h4>
            <p>
              Smart investment planning that strengthens performance and
              financial stability.
            </p>
          </div>
        </div>

        <div className="he-feature">
          <div className="he-icon animated-icon delay-2">
            <FaFileInvoiceDollar />
          </div>
          <div>
            <h4>Tax Advisory</h4>
            <p>
              Professional tax guidance ensuring compliance and optimized
              financial outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BDhero;
