import React from "react";
import "./contactMainPage.css";

import bg from "../../assets/contact-bg-1.png";
import API from "../../api/axios";
import Swal from "sweetalert2";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/leads", formData);

      if (res.status === 201) {
        Swal.fire("Success 🎉", "Request sent successfully!", "success");

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      }
    } catch (err) {
      Swal.fire(
        "Error ❌",
        err.response?.data?.message || "Something went wrong",
        "error",
      );
    }
  };
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

          <form className="contactSection-form" onSubmit={handleSubmit}>
            <div className="contactSection-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your E-Mail *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contactSection-row">
              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option>Cloud Migration</option>
                  <option>Cloud Security</option>
                  <option>DevOps & Automation</option>
                  <option>Web/App Development</option>
                  <option>Consulting</option>
                </select>
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                title="Enter valid 10-digit number"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />

            <button type="submit">SEND NOW ↗</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
