import React from "react";
import "./ManageCloud.css";
import ManageCloudBD from "../../Component/ManageCloudBD/ManageCloudBD";
import ManageCloudCont from "../../Component/ManageCloudCont/ManageCloudCont";
import ManageCloudSidebar from "../../Component/ManageCloudSidebar/ManageCloudSidebar";


const ManageCloud = () => {
  return (
    <section className="ManageCloud">
      <ManageCloudBD/>
      <div className="ManageCloud__container">
        <div className="ManageCloud__grid">
          
          {/* LEFT */}
          <div className="ManageCloud__left">
            <ManageCloudCont/>
          </div>

          {/* RIGHT */}
          <div className="ManageCloud__right">
            <ManageCloudSidebar/>
          </div> 

        </div>
      </div>
    </section>
  );
};

export default ManageCloud;