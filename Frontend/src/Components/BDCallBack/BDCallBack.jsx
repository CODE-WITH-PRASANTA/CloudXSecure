import React from "react";
import "./BDCallBack.css";

const BDCallBack = () => {
  return (
    <section className="bd-callback">
      <div className="bd-callback-container">
        {/* LEFT CONTENT */}
        <div className="bd-callback-left">
          <h2>Request a Call Back</h2>
          <p>
            Ever Find Yourself Staring At Your Computer Screen A Good Consulting
            Slogan To Come To Mind? Oftentimes.
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
