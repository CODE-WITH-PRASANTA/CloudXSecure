import React from "react";
import "./CloudMigrationBD.css";
import { FiChevronRight } from "react-icons/fi";
import breadcrumbBg from "../../assets/breadcumb-bg.png";

const CloudMigrationBD = () => {
  return (
    <section className="cloudmiBD">
      <div
        className="cloudmiBD__inner"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="cloudmiBD__overlay"></div>

        <div className="cloudmiBD__content">
          <h1 className="cloudmiBD__title">CLOUD MIGRATION</h1>

          <div className="cloudmiBD__path">
            <span className="cloudmiBD__pathLink">HOME</span>
            <span className="cloudmiBD__pathIcon">
              <FiChevronRight />
            </span>
            <span className="cloudmiBD__pathActive">CLOUD MIGRATION</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudMigrationBD;