import React from "react";
import "./ContactMainPage.css";

import bg from "../../assets/contact-bg-1.png";

const ContactMainPage = () => {
  return (
    <section
      className="contactSection"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="contactSection-container">

        <div className="contactSection-left">
          <p className="contactSection-subtitle">CONTACT US</p>

          <h2 className="contactSection-title">
            Make an Online Appoinemnt Booking
            <br />
            For Business Planing.
          </h2>

          <form className="contactSection-form">

            <div className="contactSection-row">
              <input type="text" placeholder="Your Name *" />
              <input type="email" placeholder="Your E-Mail *" />
            </div>

            <div className="contactSection-row">
              <input type="text" placeholder="Subject *" />
              <input type="text" placeholder="Phone *" />
            </div>

            <textarea placeholder="Message"></textarea>

            <button type="submit">
              SEND NOW ↗
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactMainPage;