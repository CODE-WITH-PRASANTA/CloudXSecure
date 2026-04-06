import React from "react";
import "./ServiceDetailsBD.css";
import { FiChevronRight } from "react-icons/fi";
import breadcrumbBg from "../../assets/breadcumb-bg.png";

const ServiceDetailsBD = () => {
  return (
    <section className="ServiceDetailsBD">
      <div
        className="ServiceDetailsBD__inner"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="ServiceDetailsBD__overlay"></div>

        <div className="ServiceDetailsBD__content">
          <h1 className="ServiceDetailsBD__title">SERVICE DETAILS</h1>

          <div className="ServiceDetailsBD__path">
            <span className="ServiceDetailsBD__pathLink">HOME</span>
            <span className="ServiceDetailsBD__pathIcon">
              <FiChevronRight />
            </span>
            <span className="ServiceDetailsBD__pathActive">SERVICE DETAILS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsBD;