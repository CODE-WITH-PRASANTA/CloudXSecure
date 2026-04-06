import React from "react";
import "./ManageCloudBD.css";
import { FiChevronRight } from "react-icons/fi";
import breadcrumbBg from "../../assets/breadcumb-bg.png";

const ManageCloudBD = () => {
  return (
    <section className="ManageCloudBD">
      <div
        className="ManageCloudBD__inner"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="ManageCloudBD__overlay"></div>

        <div className="ManageCloudBD__content">
          <h1 className="ManageCloudBD__title">MANAGED CLOUD</h1>

          <div className="ManageCloudBD__path">
            <span className="ManageCloudBD__pathLink">HOME</span>
            <span className="ManageCloudBD__pathIcon">
              <FiChevronRight />
            </span>
            <span className="ManageCloudBD__pathActive">MANAGED CLOUD</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageCloudBD;