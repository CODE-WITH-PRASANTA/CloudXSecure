import React from "react";
import "./Monitoring.css";
import MonitoringBD from "../../Component/MonitoringBD/MonitoringBD";
import MonitoringCont from "../../Component/MonitoringCont/MonitoringCont";
import MonitoringSidebar from "../../Component/MonitoringSidebar/MonitoringSidebar";



const Monitoring = () => {
  return (
    <section className="monitoring">
      <MonitoringBD/>
      <div className="monitoring__container">
        <div className="monitoring__grid">
          
          {/* LEFT */}
          <div className="monitoring__left">
            <MonitoringCont/>
          </div>

          {/* RIGHT */}
          <div className="monitoring__right">
            <MonitoringSidebar/>
          </div> 

        </div>
      </div>
    </section>
  );
};

export default Monitoring;