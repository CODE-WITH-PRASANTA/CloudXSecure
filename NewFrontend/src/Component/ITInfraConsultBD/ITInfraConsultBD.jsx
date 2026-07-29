import React from "react";
import "./ITInfraConsultBD.css";
import { FiChevronRight } from "react-icons/fi";
import breadcrumbBg from "../../assets/breadcumb-bg.png";

const ITInfraConsultBD = () => {
  return (
    <section className="itinfraconsultBD">
      <div
        className="itinfraconsultBD__inner"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="itinfraconsultBD__overlay"></div>

        <div className="itinfraconsultBD__content">
          <h1 className="itinfraconsultBD__title">
            IT INFRASTRUCTURE CONSULTING
          </h1>

          <div className="itinfraconsultBD__path">
            <span className="itinfraconsultBD__pathLink">HOME</span>
            <span className="itinfraconsultBD__pathIcon">
              <FiChevronRight />
            </span>
            <span className="itinfraconsultBD__pathActive">
              IT INFRASTRUCTURE CONSULTING
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITInfraConsultBD;