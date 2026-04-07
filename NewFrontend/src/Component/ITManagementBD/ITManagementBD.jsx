import React from "react";
import "./ITManagementBD.css";
import { FiChevronRight } from "react-icons/fi";
import breadcrumbBg from "../../assets/breadcumb-bg.png";

const ITManagementBD = () => {
  return (
    <section className="ITManagementBD">
      <div
        className="ITManagementBD__inner"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="ITManagementBD__overlay"></div>

        <div className="ITManagementBD__content">
          <h1 className="ITManagementBD__title">IT MANAGEMENT</h1>

          <div className="ITManagementBD__path">
            <span className="ITManagementBD__pathLink">HOME</span>
            <span className="ITManagementBD__pathIcon">
              <FiChevronRight />
            </span>
            <span className="ITManagementBD__pathActive">IT MANAGEMENT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITManagementBD;