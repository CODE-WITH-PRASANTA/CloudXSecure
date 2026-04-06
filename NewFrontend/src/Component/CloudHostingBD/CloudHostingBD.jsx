import React from "react";
import "./CloudHostingBD.css";
import { FiChevronRight } from "react-icons/fi";
import breadcrumbBg from "../../assets/breadcumb-bg.png";

const CloudHostingBD = () => {
  return (
    <section className="chDetailsBD">
      <div
        className="chDetailsBD__inner"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="chDetailsBD__overlay"></div>

        <div className="chDetailsBD__content">
          <h1 className="chDetailsBD__title">CLOUD HOSTING</h1>

          <div className="chDetailsBD__path">
            <span className="chDetailsBD__pathLink">HOME</span>
            <span className="chDetailsBD__pathIcon">
              <FiChevronRight />
            </span>
            <span className="chDetailsBD__pathActive">CLOUD HOSTING</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudHostingBD;