import React from "react";
import "./AwsConsultingBD.css";
import { FiChevronRight } from "react-icons/fi";
import breadcrumbBg from "../../assets/breadcumb-bg.png";

const AwsConsultingBD = () => {
  return (
    <section className="awsconsultingBD">
      <div
        className="awsconsultingBD__inner"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="awsconsultingBD__overlay"></div>

        <div className="awsconsultingBD__content">
          <h1 className="awsconsultingBD__title">AWS CONSULTING</h1>

          <div className="awsconsultingBD__path">
            <span className="awsconsultingBD__pathLink">HOME</span>
            <span className="awsconsultingBD__pathIcon">
              <FiChevronRight />
            </span>
            <span className="awsconsultingBD__pathActive">AWS CONSULTING</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwsConsultingBD;