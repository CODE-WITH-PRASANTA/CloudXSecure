import React from "react";
import "./BDTestimonials.css";
import { FaStar } from "react-icons/fa";

import avatar1 from "../../assets/testi_avatar01.png";
import avatar2 from "../../assets/testi_avatar02.png";

const testimonials = [
  {
    text:
      "Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Florai Sum Dolor Sit Amet, Consecteture.",
    name: "Mr. Robey Alexa",
    role: "CEO, Gerow Agency",
    img: avatar1,
  },
  {
    text:
      "Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Florai Sum Dolor Sit Amet, Consecteture.",
    name: "Mr. John Carter",
    role: "Founder, Carter Group",
    img: avatar2,
  },
];

const BDTestimonials = () => {
  return (
    <section className="bd-testimonial">
      <div className="bd-testimonial-container">
        {/* HEADER */}
        <div className="bd-testimonial-header">
          <span className="bd-badge dark">OUR TESTIMONIALS</span>
          <h2>
            What Customers Say’s About Our <br /> Gerow Services
          </h2>
        </div>

        {/* INFINITE MARQUEE */}
        <div className="bd-marquee">
          <div className="bd-marquee-track">
            {/* FIRST SET */}
            {testimonials.map((t, i) => (
              <div className="bd-testimonial-card" key={`a-${i}`}>
                <div className="bd-stars">
                  {[...Array(5)].map((_, s) => (
                    <FaStar key={s} />
                  ))}
                </div>

                <p className="bd-testimonial-text">“ {t.text} ”</p>

                <div className="bd-user">
                  <img src={t.img} alt={t.name} />
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* DUPLICATE SET (REQUIRED FOR INFINITE LOOP) */}
            {testimonials.map((t, i) => (
              <div className="bd-testimonial-card" key={`b-${i}`}>
                <div className="bd-stars">
                  {[...Array(5)].map((_, s) => (
                    <FaStar key={s} />
                  ))}
                </div>

                <p className="bd-testimonial-text">“ {t.text} ”</p>

                <div className="bd-user">
                  <img src={t.img} alt={t.name} />
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BDTestimonials;
