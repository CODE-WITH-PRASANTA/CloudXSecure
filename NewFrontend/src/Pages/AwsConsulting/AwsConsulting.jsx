import React from "react";
import "./AwsConsulting.css";
import AwsConsultingCont from "../../Component/AwsConsultingCont/AwsConsultingCont";
import AwsConsultingBD from "../../Component/AwsConsultingBD/AwsConsultingBD";
import CloudMigrationSidebar from "../../Component/CloudMigrationSidebar/CloudMigrationSidebar";

const AwsConsulting = () => {
  return (
    <section className="awsconsult">
      <AwsConsultingBD />
      <div className="awsconsult__container">
        <div className="awsconsult__grid">
          {/* LEFT CONTENT */}
          <div className="awsconsult__left">
            <AwsConsultingCont />
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="awsconsult__right">
            <CloudMigrationSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwsConsulting;