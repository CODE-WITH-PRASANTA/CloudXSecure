import React, { useState } from "react";
import "./GetInTouchForm.css";

const GetInTouchForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Message sent successfully!");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="getintouch-section">
      <div className="getintouch-container">

        {/* LEFT INFO */}
        <div className="getintouch-info">
          <h2>Contact Information</h2>
          <p>
            We have grown up with the internet revolution, and we know how to
            deliver on its promise.
          </p>

          <div className="info-box">
            <span className="icon">📞</span>
            <div>
              <h4>Contact Us</h4>
              <p>7666488777</p>
            </div>
          </div>

          <div className="info-box">
            <span className="icon">✉️</span>
            <div>
              <h4>Send Us a Mail</h4>
              <p> cloudxsecure@gmail.com</p>
            </div>
          </div>

          <div className="info-box">
            <span className="icon">📍</span>
            <div>
              <h4>Office Location</h4>
              <p>
                 Room 407 c wing building no 18 , Aqsa apt<br />
               amrut Nagar near Ajit glass jogeshwari west mumbai 400102
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="getintouch-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Submit <span>→</span>
          </button>
        </form>

      </div>
    </section>
  );
};

export default GetInTouchForm;
