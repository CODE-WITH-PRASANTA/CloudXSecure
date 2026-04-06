import React from "react";
import "./CloudConsulting.css";
import CloudConsultingBD from "../../Component/CloudConsulting/CloudConsultingBD";
import CloudConsultingCont from "../../Component/CloudConsultingCont/CloudConsultingCont";
import CloudConsultingSidebar from "../../Component/CloudConsultingSidebar/CloudConsultingSidebar";



const CloudConsulting = () => {
  return (
    <section className="cloud-consult">
      <CloudConsultingBD/>
      <div className="cloud-consult__container">
        <div className="cloud-consult__grid">
          
          {/* LEFT */}
          <div className="cloud-consult__left">
           <CloudConsultingCont/>
          </div>

          {/* RIGHT */}
          <div className="cloud-consult__right">
            <CloudConsultingSidebar/>
          </div> 

        </div>
      </div>
    </section>
  );
};

export default CloudConsulting;