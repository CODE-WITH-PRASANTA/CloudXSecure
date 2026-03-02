import React from "react";
import "./MarketingLogo.css";

import Zelus from "../../assets/logo11.png";
import TheBird from "../../assets/logo22.png";
import Finance from "../../assets/logo33.png";
import Naturewave from "../../assets/logo44.png";

const logos = [Zelus, TheBird, Finance, Naturewave];

const MarketingLogo = () => {
  return (
    <section className="marketing-logo-marquee">
      <div className="marketing-logo-track">
        {[...logos, ...logos].map((logo, index) => (
          <div className="marketing-logo-item" key={index}>
            <img src={logo} alt="Brand logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketingLogo;
