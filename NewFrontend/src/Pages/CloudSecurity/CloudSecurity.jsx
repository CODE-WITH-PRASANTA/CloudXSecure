import React from "react";
import "./CloudSecurity.css";
import CloudSecurityBD from "../../Component/CloudSecurityBD/CloudSecurityBD";
import CloudSecurityCont from "../../Component/CloudSecurityCont/CloudSecurityCont";
import CloudSecuritySidebar from "../../Component/CloudSecuritySidebar/CloudSecuritySidebar";



const CloudSecurity = () => {
  return (
    <section className="CloudSecurity">
      <CloudSecurityBD/>
      <div className="CloudSecurity__container">
        <div className="CloudSecurity__grid">
          
          {/* LEFT */}
          <div className="CloudSecurity__left">
            <CloudSecurityCont/>
          </div>

          {/* RIGHT */}
          <div className="CloudSecurity__right">
            <CloudSecuritySidebar/>
          </div> 

        </div>
      </div>
    </section>
  );
};

export default CloudSecurity;