import React from "react";
import "./ConsultContact.css";
import bgImg from "../../assets/const-contact_bg.webp";

const ContactSection = () => {
  return (
    <section
      className="gerow-contact"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Floating bulb */}
      <div className="consult-contact-floating-bulb"></div>

      <div className="consult-contact-container">
        {/* Left Content */}
        <div className="consult-contact-left">
          <span className="consult-contact-subtitle">GET IN TOUCH</span>
          <h2>
            We’re Here to Power Your  <br /> Digital Growth
          </h2>
          <p>
            CloudXSecure delivers secure cloud solutions, modern web design, and mobile app development to help your business grow faster. Connect with our experts today for scalable, reliable, and performance-driven digital services
          </p>
        </div>

        {/* Right Form */}
        <div className="consult-contact-right">
          <form className="consult-contact-form">
            <div className="form-row">
              <input type="text" placeholder="Name *" />
              <input type="email" placeholder="E-mail *" />
            </div>

            <div className="form-row">
              <input type="tel" placeholder="Phone *" />
              <input type="text" placeholder="Subject *" />
            </div>

            <textarea placeholder="Comments *"></textarea>

            <button type="submit">Get Free Consultation</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
