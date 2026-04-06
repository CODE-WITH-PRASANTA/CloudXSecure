import React from "react";
import "./ITManagement.css";

import ITManagementCont from "../../Component/ITManagementCont/ITManagementCont";
import ITManagementSidebar from "../../Component/ITManagementSidebar/ITManagementSidebar";
import ITManagementBD from "../../Component/ITManagementBD/ITManagementBD";

const ITManagement = () => {
  return (
    <section className="ITManagement">
      <ITManagementBD/>
      <div className="ITManagement__container">
        <div className="ITManagement__grid">
          
          {/* LEFT */}
          <div className="ITManagement__left">
            <ITManagementCont/>
          </div>

          {/* RIGHT */}
          <div className="ITManagement__right">
            <ITManagementSidebar/>
          </div> 

        </div>
      </div>
    </section>
  );
};

export default ITManagement;