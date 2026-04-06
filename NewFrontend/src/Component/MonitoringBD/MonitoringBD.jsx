import React from "react";
import "./MonitoringBD.css";
import { FiChevronRight } from "react-icons/fi";
import breadcrumbBg from "../../assets/breadcumb-bg.png";

const MonitoringBD = () => {
  return (
    <section className="monitoringBD">
      <div
        className="monitoringBD__inner"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="monitoringBD__overlay"></div>

        <div className="monitoringBD__content">
          <h1 className="monitoringBD__title">MONITORING</h1>

          <div className="monitoringBD__path">
            <span className="monitoringBD__pathLink">HOME</span>
            <span className="monitoringBD__pathIcon">
              <FiChevronRight />
            </span>
            <span className="monitoringBD__pathActive">MONITORING</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringBD;