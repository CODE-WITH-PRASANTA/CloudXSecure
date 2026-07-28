import React from "react";
import "./CustomSoftwareServiceBD.css";
import { FiChevronRight } from "react-icons/fi";
import breadcrumbBg from "../../assets/breadcumb-bg.png";

const CustomSoftwareServiceBD = () => {
  return (
    <section className="customsoftwareserviceBD">
      <div
        className="customsoftwareserviceBD__inner"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="customsoftwareserviceBD__overlay"></div>

        <div className="customsoftwareserviceBD__content">
          <h1 className="customsoftwareserviceBD__title">
            CUSTOM SOFTWARE DEVELOPMENT
          </h1>

          <div className="customsoftwareserviceBD__path">
            <span className="customsoftwareserviceBD__pathLink">HOME</span>
            <span className="customsoftwareserviceBD__pathIcon">
              <FiChevronRight />
            </span>
            <span className="customsoftwareserviceBD__pathActive">
              CUSTOM SOFTWARE DEVELOPMENT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSoftwareServiceBD;