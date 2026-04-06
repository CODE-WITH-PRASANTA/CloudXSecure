import React from "react";
import "./CloudHosting.css";
import CloudHostingBD from "../../Component/CloudHostingBD/CloudHostingBD";
import CloudHostingCont from "../../Component/CloudHostingCont/CloudHostingCont";
import CloudHostSidebar from "../../Component/CloudHostSidebar/CloudHostSidebar";


const CloudHosting = () => {
  return (
    <section className="chDetails">
      <CloudHostingBD/>
      <div className="chDetails__container">
        <div className="chDetails__grid">
          
          {/* LEFT */}
          <div className="chDetails__left">
            <CloudHostingCont/>
          </div>

          {/* RIGHT */}
          <div className="chDetails__right">
            <CloudHostSidebar/>
          </div> 

        </div>
      </div>
    </section>
  );
};

export default CloudHosting;