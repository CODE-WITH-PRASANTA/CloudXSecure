import React from "react";
import "./BlogDetailsBD.css";
import { FiChevronRight } from "react-icons/fi";
import breadcrumbBg from "../../assets/breadcumb-bg.png";
import  { useNavigate } from "react-router-dom";

const BlogDetailsBD = () => {
  const navigate = useNavigate();
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
            <span className="BlogDetailsBD__pathLink" onClick={() => navigate("/")}>
              Home
            </span>
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