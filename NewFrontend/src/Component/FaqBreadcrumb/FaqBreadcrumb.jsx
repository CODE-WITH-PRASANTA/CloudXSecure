import React from "react";
import "./FaqBreadcrumb.css";
import { FiChevronRight } from "react-icons/fi";
import breadcrumbBg from "../../assets/breadcumb-bg.png";

const FaqBreadcrumb = () => {
  return (
    <section className="breadcrumb">
      <div
        className="Faq-Breadcrumb_inner"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="Faq-Breadcrumb_overlay"></div>

        <div className="Faq-Breadcrumb_content">
          <h1 className="Faq-Breadcrumb_title">FAQ</h1>

          <div className="Faq-Breadcrumb_path">
            <span className="Faq-Breadcrumb_pathLink">HOME</span>
            <span className="Faq-Breadcrumb_pathIcon">
              <FiChevronRight />
            </span>
            <span className="Faq-Breadcrumb_pathActive">FAQ</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqBreadcrumb;