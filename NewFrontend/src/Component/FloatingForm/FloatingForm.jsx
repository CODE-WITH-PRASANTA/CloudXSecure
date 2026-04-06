import React, { useEffect, useState } from "react";
import "./FloatingForm.css";
import { Phone, MessageCircle, X } from "lucide-react";

const FloatingForm = () => {
  const [open, setOpen] = useState(false);

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
          <form>
            <div className="form-group">
              <input type="text" placeholder="Full Name" required />
            </div>

            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>

            <div className="form-group">
              <input type="tel" placeholder="Phone Number" required />
            </div>

            <div className="form-group">
              <select required>
                <option value="">Select Service</option>
                <option>Cloud Migration</option>
                <option>Cloud Security</option>
                <option>DevOps & Automation</option>
                <option>Web/App Development</option>
                <option>Consulting</option>
              </select>
            </div>

            <div className="form-group">
              <textarea placeholder="Message (Optional)" />
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