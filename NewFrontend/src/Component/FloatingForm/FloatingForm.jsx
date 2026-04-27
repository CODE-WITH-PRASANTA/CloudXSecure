import React, { useEffect, useState } from "react";
import "./FloatingForm.css";
import { Phone, MessageCircle, X } from "lucide-react";

import Swal from "sweetalert2";
import API from "../../api/axios";

const FloatingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [open, setOpen] = useState(false);

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
        Swal.fire("Success 🎉", "Request submitted!", "success");

        // reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        setOpen(false);
      }
    } catch (err) {
      Swal.fire(
        "Error ❌",
        err.response?.data?.message || "Something went wrong",
        "error",
      );
    }
  };

  // ✅ Show every time page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Button
      <div className="float-btn" onClick={() => setOpen(true)}>
        Get Quote
      </div> */}

      {/* Overlay */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Center Modal */}
      <div className={`modal-wrapper ${open ? "show" : ""}`}>
        <div className="floating-form">
          {/* Header */}
          <div className="form-header">
            <h3>Get Free Consultation</h3>
            <X className="close-icon" onClick={() => setOpen(false)} />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                title="Enter valid 10-digit number"
                required
              />
            </div>

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

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message (Optional)"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit Request
            </button>
          </form>

          {/* Bottom Actions */}
          <div className="form-actions">
            <a href="tel:+919999999999" className="call-btn">
              <Phone size={18} /> Call
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingForm;
