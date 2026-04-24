import React from "react";
import "./BlogDetailsBD.css";
import { FiChevronRight } from "react-icons/fi";
import breadcrumbBg from "../../assets/breadcumb-bg.png";

const BlogDetailsBD = () => {
  return (
    <section className="BlogDetailsBD">
      <div
        className="BlogDetailsBD__inner"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="BlogDetailsBD__overlay"></div>

        <div className="BlogDetailsBD__content">
          <h1 className="BlogDetailsBD__title">BLOG DETAILS</h1>

          <div className="BlogDetailsBD__path">
            <span className="BlogDetailsBD__pathLink">HOME</span>
            <span className="BlogDetailsBD__pathIcon">
              <FiChevronRight />
            </span>
            <span className="BlogDetailsBD__pathActive">BLOG DETAILS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsBD;