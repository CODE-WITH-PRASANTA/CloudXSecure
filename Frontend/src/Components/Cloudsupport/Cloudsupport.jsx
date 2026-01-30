import React from "react";
import "./Cloudsupport.css";

// IMAGE (use your downloaded image)
import supportImg from "../../assets/ctaThumb1_1.png";

const SupportBanner = () => {
  return (
    <section className="sb24-section">
      <div className="sb24-container">
        {/* LEFT IMAGE */}
        <div className="sb24-image-wrap">
          <img src={supportImg} alt="24/7 Support" />
        </div>

        {/* CONTENT */}
        <div className="sb24-content">
          <span className="sb24-subtitle">
            <span className="sb24-line"></span>
           CONTACT CLOUDXSECURE
            <span className="sb24-line"></span>
          </span>

          <h2 className="sb24-title">
           24/7 Cloud, Web & App Support Trusted by <br />
            Growing Businesses
          </h2>
        </div>

        {/* BUTTON */}
        <div className="sb24-btn-wrap">
          <button className="sb24-btn">
            Talk to a Specialist <span>→</span>
          </button>
        </div>

        {/* WAVE DECOR */}
        <div className="sb24-wave"></div>
      </div>
    </section>
  );
};

export default SupportBanner;
