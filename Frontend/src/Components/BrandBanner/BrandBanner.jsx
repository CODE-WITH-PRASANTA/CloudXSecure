import React, { useMemo } from "react";
import "./BrandBanner.css";

import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.svg";
import logo4 from "../../assets/logo4.svg";
import logo5 from "../../assets/logo5.svg";
import logo6 from "../../assets/logo6.svg";
import logo7 from "../../assets/logo7.svg";

const BrandBanner = () => {
  // Memoized list for performance
  const logos = useMemo(
    () => [logo1, logo2, logo3, logo4, logo5, logo6, logo7],
    []
  );

  return (
    <section className="brand-banner" aria-label="Trusted brands">
      <div className="brand-track">
        {/* Duplicate logos for seamless infinite scroll */}
        {[...logos, ...logos].map((logo, index) => (
          <div className="brand-logo" key={index} aria-hidden="true">
            <img
              src={logo}
              alt={`Trusted brand ${index + 1}`}
              loading="lazy"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandBanner;
