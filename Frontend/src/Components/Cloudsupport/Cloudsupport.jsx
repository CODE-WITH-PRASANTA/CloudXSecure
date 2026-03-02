import React from "react";
import "./Cloudsupport.css";
import supportImg from "../../assets/ctaThumb1_1.png";

const SupportBanner = () => {
  return (
    <section className="supportPro-section">
      <div className="supportPro-container">

        {/* IMAGE */}
        <div className="supportPro-image">
          <img src={supportImg} alt="24/7 Support" />
        </div>

        {/* CONTENT */}
        <div className="supportPro-content">
          <span className="supportPro-subtitle">
            <span className="line"></span>
            CONTACT CLOUDXSECURE
            <span className="line"></span>
          </span>

          <h2 className="supportPro-title">
            24/7 Cloud, Web & App Support Trusted by Growing Businesses
          </h2>
        </div>

        {/* BUTTON */}
        <div className="supportPro-btnWrap">
          <button className="supportPro-btn">
            Talk to a Specialist →
          </button>
        </div>

        {/* DECOR */}
        <div className="supportPro-wave"></div>

      </div>
    </section>
  );
};

export default SupportBanner;
