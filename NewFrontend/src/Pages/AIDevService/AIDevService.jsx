import React from "react";
import "./AIDevService.css";
import AIDevServiceCont from "../../Component/AIDevServiceCont/AIDevServiceCont";
import CloudMigrationSidebar from "../../Component/CloudMigrationSidebar/CloudMigrationSidebar";
import AIDevServiceBD from "../../Component/AIDevServiceBD/AIDevServiceBD";

const AIDevService = () => {
  return (
    <section className="aidevservice">
      <AIDevServiceBD />
      <div className="aidevservice__container">
        <div className="aidevservice__grid">
          {/* LEFT CONTENT */}
          <div className="aidevservice__left">
            <AIDevServiceCont />
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="aidevservice__right">
            <CloudMigrationSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDevService;