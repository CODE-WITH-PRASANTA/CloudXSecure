import React from "react";
import "./WhyChooseUs.css";
import familyImg from "../../assets/family.png";

const WhyChooseUs = () => {
  return (
    <section className="why-page">
      {/* ================= MAIN SECTION ================= */}
      <div className="why-container">
        {/* LEFT INFOGRAPHIC IMAGE */}
        <div className="why-image">
          <div className="image-blob">
            <img src={familyImg} alt="Family" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="why-content">
          <span className="why-badge">WHY CHOOSE CLOUDXSECURE</span>

          <h2>
           We Help Businesses Grow with Secure Cloud <br />
            & Digital Solutions
          </h2>

          <p>
            At CloudXSecure, we empower businesses with modern cloud services, professional web design, and custom app development. Our expert team delivers scalable cloud solutions, secure infrastructure, and high-performance digital products that help organizations reduce costs, improve efficiency, and accelerate growth. From cloud migration and DevOps automation to responsive websites and mobile applications, we provide end-to-end technology solutions tailored to your business goals.
          </p>

          {/* CIRCULAR STATS */}
          <div className="why-stats">
            <div className="stat-circle">
              <svg>
                <circle cx="60" cy="60" r="54" />
                <circle cx="60" cy="60" r="54" style={{ strokeDashoffset: "85" }} />
              </svg>
              <span>67%</span>
            </div>

            <div className="stat-circle">
              <svg>
                <circle cx="60" cy="60" r="54" />
                <circle cx="60" cy="60" r="54" style={{ strokeDashoffset: "85" }} />
              </svg>
              <span>67%</span>
            </div>

            <div className="stat-circle">
              <svg>
                <circle cx="60" cy="60" r="54" />
                <circle cx="60" cy="60" r="54" style={{ strokeDashoffset: "85" }} />
              </svg>
              <span>67%</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONTACT CTA ================= */}
      <div className="contact-bar">
        <div className="contact-left">
          <div className="phone-icon">📞</div>
          <div>
            <span>Talk to Our Cloud Experts</span>
            <strong>+1 (123) 456-7890</strong>
          </div>
        </div>

        <h3>Let’s Build Your Secure Cloud & Digital Solutions — Get a Free Consultation Today</h3>

        <button className="contact-btn">
          Start Your Cloud Journey →
        </button>
      </div>
    </section>
  );
};

export default WhyChooseUs;
