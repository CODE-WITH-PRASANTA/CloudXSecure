import React from "react";
import "./DevOpsServices.css";
import DevOpsServicesCont from "../../Component/DevOpsServicesCont/DevOpsServicesCont";
import CloudMigrationSidebar from "../../Component/CloudMigrationSidebar/CloudMigrationSidebar";
import DevOpsServicesBD from "../../Component/DevOpsServicesBD/DevOpsServicesBD";

const DevOpsServices = () => {
  return (
    <section className="devops">
      <DevOpsServicesBD />
      <div className="devops__container">
        <div className="devops__grid">
          {/* LEFT CONTENT */}
          <div className="devops__left">
            <DevOpsServicesCont />
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="devops__right">
            <CloudMigrationSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsServices;