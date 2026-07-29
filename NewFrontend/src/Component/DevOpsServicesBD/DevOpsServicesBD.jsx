import React from "react";
import "./DevOpsServicesBD.css";
import { FiChevronRight } from "react-icons/fi";
import breadcrumbBg from "../../assets/breadcumb-bg.png";

const DevOpsServicesBD = () => {
  return (
    <section className="devopsservicesBD">
      <div
        className="devopsservicesBD__inner"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="devopsservicesBD__overlay"></div>

        <div className="devopsservicesBD__content">
          <h1 className="devopsservicesBD__title">DEVOPS SERVICES</h1>

          <div className="devopsservicesBD__path">
            <span className="devopsservicesBD__pathLink">HOME</span>
            <span className="devopsservicesBD__pathIcon">
              <FiChevronRight />
            </span>
            <span className="devopsservicesBD__pathActive">
              DEVOPS SERVICES
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsServicesBD;