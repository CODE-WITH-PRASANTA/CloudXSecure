import React from "react";
import "./CustomSoftwareService.css";
import CustomSoftwareCont from "../../Component/CustomSoftwareCont/CustomSoftwareCont";
import CloudMigrationSidebar from "../../Component/CloudMigrationSidebar/CloudMigrationSidebar";
import CustomSoftwareServiceBD from "../../Component/CustomSoftwareServiceBD/CustomSoftwareServiceBD";

const CustomSoftwareService = () => {
  return (
    <section className="customsoftwareservice">
      <CustomSoftwareServiceBD />
      <div className="customsoftwareservice__container">
        <div className="customsoftwareservice__grid">
          {/* LEFT CONTENT */}
          <div className="customsoftwareservice__left">
            <CustomSoftwareCont />
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="customsoftwareservice__right">
            <CloudMigrationSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSoftwareService;