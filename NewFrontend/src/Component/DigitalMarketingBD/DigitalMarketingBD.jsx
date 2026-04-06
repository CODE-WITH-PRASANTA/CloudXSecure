import React from "react";
import "./DigitalMarketingBD.css";
import { FiChevronRight } from "react-icons/fi";
import breadcrumbBg from "../../assets/breadcumb-bg.png";

const DigitalMarketingBD = () => {
  return (
    <section className="DigitalMarketingBD">
      <div
        className="DigitalMarketingBD__inner"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="DigitalMarketingBD__overlay"></div>

        <div className="DigitalMarketingBD__content">
          <h1 className="DigitalMarketingBD__title">DIGITAL MARKETING</h1>

          <div className="DigitalMarketingBD__path">
            <span className="DigitalMarketingBD__pathLink">HOME</span>
            <span className="DigitalMarketingBD__pathIcon">
              <FiChevronRight />
            </span>
            <span className="DigitalMarketingBD__pathActive">DIGITAL MARKETING</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingBD;