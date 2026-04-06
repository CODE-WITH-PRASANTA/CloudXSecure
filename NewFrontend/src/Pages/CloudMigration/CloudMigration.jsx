import React from "react";
import "./CloudMigration.css";
import CloudMigrationBD from "../../Component/CloudMigrationBD/CloudMigrationBD";
import CloudMigrationCont from "../../Component/CloudMigrationCont/CloudMigrationCont";
import CloudMigrationSidebar from "../../Component/CloudMigrationSidebar/CloudMigrationSidebar";


const CloudMigration = () => {
  return (
    <section className="cloudmi">
     <CloudMigrationBD/>
      <div className="cloudmi__container">
        <div className="cloudmi__grid">
          
          {/* LEFT */}
          <div className="cloudmi__left">
            <CloudMigrationCont/>
          </div>

          {/* RIGHT */}
          <div className="cloudmi__right">
            <CloudMigrationSidebar/>
          </div> 

        </div>
      </div>
    </section>
  );
};

export default CloudMigration;