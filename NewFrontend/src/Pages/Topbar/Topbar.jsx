import React from "react";
import "./Topbar.css";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Topbar = () => {

  const handleWhatsApp = () => {
    window.open("https://wa.me/917666488777", "_blank");
  };

  return (
    <div className="topbar">
      <div className="topbar-container">

        {/* LEFT */}
        <div className="topbar-left">
          <span>
            <FaEnvelope /> cloudxsecure@gmail.com
          </span>

          <span>
            <FaPhoneAlt /> +91 7666488777
          </span>
        </div>

        {/* RIGHT */}
        <div className="topbar-right">
          <p className="topbar-text">
            Secure Web Development & Cloud Solutions
          </p>

          <button className="topbar-whatsapp" onClick={handleWhatsApp}>
            <FaWhatsapp /> Chat Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default Topbar;