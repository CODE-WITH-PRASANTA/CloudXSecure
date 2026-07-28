import React from "react";
import "./AIDevServiceBD.css";
import { FiChevronRight } from "react-icons/fi";
import breadcrumbBg from "../../assets/breadcumb-bg.png";

const AIDevServiceBD = () => {
  return (
    <section className="aidevserviceBD">
      <div
        className="aidevserviceBD__inner"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="aidevserviceBD__overlay"></div>

        <div className="aidevserviceBD__content">
          <h1 className="aidevserviceBD__title">AI DEVELOPMENT SERVICES</h1>

          <div className="aidevserviceBD__path">
            <span className="aidevserviceBD__pathLink">HOME</span>
            <span className="aidevserviceBD__pathIcon">
              <FiChevronRight />
            </span>
            <span className="aidevserviceBD__pathActive">
              AI DEVELOPMENT SERVICES
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDevServiceBD;