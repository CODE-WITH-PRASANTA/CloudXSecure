import React from "react";
import "./Cloudlogo.css";

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
    <section className="logoPro-section">
      <div className="logoPro-wrapper">
        <div className="logoPro-track">
          {[...logos, ...logos].map((logo, index) => (
            <div className="logoPro-item" key={index}>
              <img src={logo} alt="Brand logo" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
