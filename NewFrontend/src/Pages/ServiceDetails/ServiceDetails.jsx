import React from "react";
import "./ServiceDetails.css";

import ServiceDetailsCont from "../../Component/ServiceDetailsCont/ServiceDetailsCont";
import ServiceSidebar from "../../Component/ServiceSidebar/ServiceSidebar";
import ServiceDetailsBD from "../../Component/ServiceDetailsBD/ServiceDetailsBD";

const ServiceDetails = () => {
  return (
    <section className="serviceDetails">
      <ServiceDetailsBD/>
      <div className="serviceDetails__container">
        <div className="serviceDetails__grid">
          
          {/* LEFT */}
          <div className="serviceDetails__left">
            <ServiceDetailsCont/>
          </div>

          {/* RIGHT */}
          <div className="serviceDetails__right">
            <ServiceSidebar/>
          </div> 

        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;