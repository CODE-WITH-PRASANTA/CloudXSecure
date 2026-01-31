import React from "react";
import "./BrandBanner.css";

// IMPORT LOGOS (images already include text)
import contentful from "../../assets/logo1.webp";
import cultureAmp from "../../assets/logo2.webp";
import dropbox from "../../assets/logo3.webp";
import airtable from "../../assets/logo4.webp";
import razorpay from "../../assets/logo5.webp";

const logos = [
  contentful,
  cultureAmp,
  dropbox,
  airtable,
  razorpay,
];

const LogoMarquee = () => {
  return (
    <section className="Hosting-logo-marquee">
      <div className="Hosting-logo-track">
        {/* duplicate for infinite loop */}
        {[...logos, ...logos].map((logo, index) => (
          <div className="Hosting-logo-item" key={index}>
            <img src={logo} alt="Brand logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoMarquee;
