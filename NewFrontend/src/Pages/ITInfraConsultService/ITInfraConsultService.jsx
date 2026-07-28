import React from "react";
import "./ITInfraConsultService.css";
import ITInfraConsultCont from "../../Component/ITInfraConsultCont/ITInfraConsultCont";
import CloudMigrationSidebar from "../../Component/CloudMigrationSidebar/CloudMigrationSidebar";
import ITInfraConsultBD from "../../Component/ITInfraConsultBD/ITInfraConsultBD";

const ITInfraConsultService = () => {
  return (
    <section className="itinfraconsultservice">
      <ITInfraConsultBD />
      <div className="itinfraconsultservice__container">
        <div className="itinfraconsultservice__grid">
          {/* LEFT CONTENT */}
          <div className="itinfraconsultservice__left">
            <ITInfraConsultCont />
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="itinfraconsultservice__right">
            <CloudMigrationSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITInfraConsultService;