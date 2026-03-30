import React from "react";
import "./Testimonials.css";

// avatar images
import avatar1 from "../../assets/testi-1.webp";
import avatar2 from "../../assets/testi-2.webp";
import avatar3 from "../../assets/testi-3.webp";

// background image
import bg from "../../assets/testi-bg.png";

const testimonialData = [
  {
    id: 1,
    name: "Alberta Infantino",
    role: "Software Engineer",
    image: avatar1,
    feedback:
      "Working with CloudXsecure has been a great experience. Their team delivered a fast and secure web application that significantly improved our workflow and system performance.",
  },
  {
    id: 2,
    name: "Hosain Al-Amin",
    role: "UI/UX Designer",
    image: avatar2,
    feedback:
      "CloudXsecure understands both design and technology. They helped us build a clean, responsive platform with strong backend support and excellent user experience.",
  },
  {
    id: 3,
    name: "M. Kamrul Islam",
    role: "Project Manager",
    image: avatar3,
    feedback:
      "We partnered with CloudXsecure for cloud infrastructure and DevOps setup. Their solutions are reliable, scalable, and backed by excellent support.",
  },
];

const Testimonials = () => {
  return (
    <section
      className="testimonials"
      id="testimonials"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="testimonials-overlay">
        <div className="testimonials-container">
          
          {/* SUBTITLE */}
          <p className="testimonials-subtitle">
            CLOUDXSECURE TESTIMONIALS
          </p>

          {/* TITLE */}
          <h2 className="testimonials-title">
            Trusted by Businesses for Reliable <span>IT & Cloud Solutions</span>
          </h2>

    

          <div className="testimonials-grid">
            {testimonialData.map((item) => (
              <div key={item.id} className="testimonials-card">

                <div className="quote">❝</div>

                <p className="testimonials-text">
                  {item.feedback}
                </p>

                <div className="divider"></div>

                <div className="stars">★★★★★</div>

                <h4 className="name">
                  {item.name} <span>{item.role}</span>
                </h4>

                <div className="avatar-wrapper">
                  <div className="line"></div>
                  <img
                    src={item.image}
                    alt={`${item.name} testimonial for CloudXsecure IT services`}
                  />
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;