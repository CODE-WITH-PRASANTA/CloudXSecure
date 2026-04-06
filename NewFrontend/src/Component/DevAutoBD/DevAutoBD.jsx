import React from "react";
import "./DevAutoBD.css";
import { FiChevronRight } from "react-icons/fi";
import breadcrumbBg from "../../assets/breadcumb-bg.png";

const DevAutoBD = () => {
  return (
    <section className="dev-autoBD">
      <div
        className="dev-autoBD__inner"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="dev-autoBD__overlay"></div>

        <div className="dev-autoBD__content">
          <h1 className="dev-autoBD__title">DEVOPS & AUTOMATION</h1>

          <div className="dev-autoBD__path">
            <span className="dev-autoBD__pathLink">HOME</span>
            <span className="dev-autoBD__pathIcon">
              <FiChevronRight />
            </span>
            <span className="dev-autoBD__pathActive">DEVOPS & AUTOMATION</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevAutoBD;