import React from "react";
import "./Testimonials.css";

// avatar images (you can replace later)
import avatar1 from "../../assets/testi-1.webp";
import avatar2 from "../../assets/testi-2.webp";
import avatar3 from "../../assets/testi-3.webp";

// background image
import bg from "../../assets/testi-bg.png";

const testimonialData = [
  {
    id: 1,
    name: "Alberta Infantino",
    role: "DEVELOPER",
    image: avatar1,
  },
  {
    id: 2,
    name: "Hosain Al-Amin",
    role: "DESIGNER",
    image: avatar2,
  },
  {
    id: 3,
    name: "M.Kamrul Islam",
    role: "DEVELOPER",
    image: avatar3,
  },
];

const Testimonials = () => {
  return (
    <section
      className="testimonials"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="testimonials-overlay">
        <div className="testimonials-container">
          
          <p className="testimonials-subtitle">TESTIMONIALS</p>

          <h2 className="testimonials-title">
            What Our Customer <span>Says</span>
          </h2>

          <div className="testimonials-grid">
            {testimonialData.map((item) => (
              <div key={item.id} className="testimonials-card">

                <div className="quote">❝</div>

                <p className="testimonials-text">
                  paradigms. Monotonectally extend open-source
                  mvia competitive methods of empowerment dri
                  revolutionize stand- business
                </p>

                <div className="divider"></div>

                <div className="stars">★★★★★</div>

                <h4 className="name">
                  {item.name} <span>{item.role}</span>
                </h4>

                <div className="avatar-wrapper">
                  <div className="line"></div>
                  <img src={item.image} alt="" />
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