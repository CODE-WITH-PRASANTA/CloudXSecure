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
      <div className="contact-floating-bulb"></div>

      <div className="contact-container">
        {/* Left Content */}
        <div className="contact-left">
          <span className="contact-subtitle">GET IN TOUCH</span>
          <h2>
            We Are Connected To Help <br /> Your Business!
          </h2>
          <p>
            Ever find yourself staring at your computer screen a good consulting
            slogan to come to mind? Oftentimes.
          </p>
        </div>

        {/* Right Form */}
        <div className="contact-right">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Name *" />
              <input type="email" placeholder="E-mail *" />
            </div>

            <div className="form-row">
              <input type="tel" placeholder="Phone *" />
              <input type="text" placeholder="Subject *" />
            </div>

            <textarea placeholder="Comments *"></textarea>

            <button type="submit">SUBMIT NOW</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
