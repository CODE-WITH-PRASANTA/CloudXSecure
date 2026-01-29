import React from "react";
import "./BDCallBack.css";

const BDCallBack = () => {
  return (
    <section className="bd-callback">
      <div className="bd-callback-container">
        {/* LEFT CONTENT */}
        <div className="bd-callback-left">
          <h2>Request a Free Cloud Consultation</h2>
          <p>
            Talk with CloudXSecure experts about secure cloud services, backup & disaster recovery, professional web design, custom app development, and complete cloud solutions—built to scale your business.
          </p>
        </div>

        {/* RIGHT FORM */}
        <form className="bd-callback-form">
          <input type="text" placeholder="Name *" required />
          <input type="email" placeholder="E-mail *" required />
          <input type="tel" placeholder="Phone *" required />
          <button type="submit">SEND NOW</button>
        </form>
      </div>
    </section>
  );
};

export default BDCallBack;
