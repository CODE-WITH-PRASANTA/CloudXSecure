import React from "react";
import "./PrivacyBreadcrum.css";
import heroBg from "../../assets/banner-bg-4.webp";

const TermsHero = () => {
  return (
    <section
      className="terms-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="terms-overlay"></div>

      <div className="terms-content">
        <h1>Privacy Policy</h1>
        <p>
          Home <span>/</span> <span className="active">Privacy Policy</span>
        </p>
      </div>
    </section>
  );
};

export default TermsHero;
