import React from "react";
import "./CloudConsultingBD.css";
import { FiChevronRight } from "react-icons/fi";
import breadcrumbBg from "../../assets/breadcumb-bg.png";

const CloudConsultingBD = () => {
  return (
    <section className="cloud-consultBD">
      <div
        className="cloud-consultBD__inner"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="cloud-consultBD__overlay"></div>

        <div className="cloud-consultBD__content">
          <h1 className="cloud-consultBD__title">CLOUD CONSULTING</h1>

          <div className="cloud-consultBD__path">
            <span className="cloud-consultBD__pathLink">HOME</span>
            <span className="cloud-consultBD__pathIcon">
              <FiChevronRight />
            </span>
            <span className="cloud-consultBD__pathActive">CLOUD CONSULTING</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudConsultingBD;