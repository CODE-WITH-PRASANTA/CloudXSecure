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
          <span className="why-badge">WHY CHOOSE US</span>

          <h2>
            We’ll Ensure You Always Get <br />
            the Best Guidance.
          </h2>

          <p>
            Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Florai
            Ipsum Dolor Sit Amet, Consecteture. Borem.
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
            <span>Call For More Info</span>
            <strong>+123 8989 444</strong>
          </div>
        </div>

        <h3>Let’s Request a Schedule For Free Consultation</h3>

        <button className="contact-btn">
          CONTACT US →
        </button>
      </div>
    </section>
  );
};

export default WhyChooseUs;
