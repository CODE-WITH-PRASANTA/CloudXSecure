import React from "react";
import "./BrandBanner.css";

import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.svg";
import logo4 from "../../assets/logo4.svg";
import logo5 from "../../assets/logo5.svg";
import logo6 from "../../assets/logo6.svg";
import logo7 from "../../assets/logo7.svg"; // ✅ added missing import

const BrandBanner = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7]; // ✅ removed trailing comma

  return (
    <section className="brand-banner">
      <div className="brand-track">
        {/* ✅ Duplicate for infinite seamless scroll */}
        {[...logos, ...logos].map((logo, index) => (
          <div className="brand-logo" key={index}>
            <img src={logo} alt={`brand-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandBanner;
