import React from "react";
import "./DigitalMarketing.css";

import DigitalMarketingCont from "../../Component/DigitalMarketingCont/DigitalMarketingCont";
import DigiMarketSidebar from "../../Component/DigiMarketSidebar/DigiMarketSidebar";
import DigitalMarketingBD from "../../Component/DigitalMarketingBD/DigitalMarketingBD";

const DigitalMarketing = () => {
  return (
    <section className="DigitalMarketing">
      <DigitalMarketingBD/>
      <div className="DigitalMarketing__container">
        <div className="DigitalMarketing__grid">
          
          {/* LEFT */}
          <div className="DigitalMarketing__left">
            <DigitalMarketingCont/>
          </div>

          {/* RIGHT */}
          <div className="DigitalMarketing__right">
            <DigiMarketSidebar/>
          </div> 

        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;