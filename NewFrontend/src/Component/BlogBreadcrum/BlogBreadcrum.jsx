import React from "react";
import "./BlogBreadcrum.css";
import { FiChevronRight } from "react-icons/fi";
import breadcrumbBg from "../../assets/breadcumb-bg.png";

const BlogBreadcrum = () => {
  return (
    <section className="breadcrumb">
      <div
        className="breadcrumb__inner"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="breadcrumb__overlay"></div>

        <div className="breadcrumb__content">
          <h1 className="breadcrumb__title">BLOG</h1>

          <div className="breadcrumb__path">
            <span className="breadcrumb__pathLink">HOME</span>
            <span className="breadcrumb__pathIcon">
              <FiChevronRight />
            </span>
            <span className="breadcrumb__pathActive">BLOG</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBreadcrum;