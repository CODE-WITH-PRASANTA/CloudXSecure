import React from "react";
import "./DevAuto.css";
import DevAutoBD from "../../Component/DevAutoBD/DevAutoBD";
import DevAutoCont from "../../Component/DevAutoCont/DevAutoCont";
import DevAutosidebar from "../../Component/DevAutosidebar/DevAutosidebar";


const DevAuto = () => {
  return (
    <section className="dev-auto">
     <DevAutoBD/>
      <div className="dev-auto__container">
        <div className="dev-auto__grid">
          
          {/* LEFT */}
          <div className="dev-auto__left">
            <DevAutoCont/>
          </div>

          {/* RIGHT */}
          <div className="dev-auto__right">
            <DevAutosidebar/>
          </div> 

        </div>
      </div>
    </section>
  );
};

export default DevAuto;