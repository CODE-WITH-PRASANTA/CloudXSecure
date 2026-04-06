import React from "react";
import "./CloudSecurityBD.css";
import { FiChevronRight } from "react-icons/fi";
import breadcrumbBg from "../../assets/breadcumb-bg.png";

const CloudSecurityBD = () => {
  return (
    <section className="CloudsecurityBD">
      <div
        className="CloudsecurityBD__inner"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="CloudsecurityBD__overlay"></div>

        <div className="CloudsecurityBD__content">
          <h1 className="CloudsecurityBD__title">CLOUD SECURITY</h1>

          <div className="CloudsecurityBD__path">
            <span className="CloudsecurityBD__pathLink">HOME</span>
            <span className="CloudsecurityBD__pathIcon">
              <FiChevronRight />
            </span>
            <span className="CloudsecurityBD__pathActive">CLOUD SECURITY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudSecurityBD;