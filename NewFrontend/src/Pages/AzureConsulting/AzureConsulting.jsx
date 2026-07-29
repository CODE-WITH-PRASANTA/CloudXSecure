import React from "react";
import "./AzureConsulting.css";
import AzureConsultingCont from "../../Component/AzureConsultingCont/AzureConsultingCont";
import CloudMigrationSidebar from "../../Component/CloudMigrationSidebar/CloudMigrationSidebar";
import AwsConsultingBD from "../../Component/AwsConsultingBD/AwsConsultingBD";

const AzureConsulting = () => {
  return (
    <section className="azureconsult">
      <AwsConsultingBD />
      <div className="azureconsult__container">
        <div className="azureconsult__grid">
          {/* LEFT CONTENT */}
          <div className="azureconsult__left">
            <AzureConsultingCont />
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="azureconsult__right">
            <CloudMigrationSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AzureConsulting;