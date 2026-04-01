import React from "react";
import "./ServicesBreadcrumb.css";
import { FiChevronRight } from "react-icons/fi";
import breadcrumbBg from "../../assets/breadcumb-bg.png";

const ServicesBreadcrumb = () => {
  return (
    <section className="breadcrumb">
      <div
        className="Services-Breadcrumb_inner"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="Services-Breadcrumb_overlay"></div>

        <div className="Services-Breadcrumb_content">
          <h1 className="Services-Breadcrumb_title">SERVICES</h1>

          <div className="Services-Breadcrumb_path">
            <span className="Services-Breadcrumb_pathLink">HOME</span>
            <span className="Services-Breadcrumb_pathIcon">
              <FiChevronRight />
            </span>
            <span className="Services-Breadcrumb_pathActive">SERVICES</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBreadcrumb;