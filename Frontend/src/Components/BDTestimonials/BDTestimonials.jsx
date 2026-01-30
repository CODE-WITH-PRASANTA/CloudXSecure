import React from "react";
import "./BDTestimonials.css";
import { FaStar } from "react-icons/fa";

import avatar1 from "../../assets/testi_avatar01.png";
import avatar2 from "../../assets/testi_avatar02.png";

const testimonials = [
  {
    text:
      "CloudXSecure helped us migrate to the cloud and implement reliable backup and disaster recovery. Their cloud solutions improved performance while protecting our business data. Highly recommended for secure cloud services and digital transformation.",
    name: "Mr. Robey Alexa",
    role: "CEO, Gerow Agency",
    img: avatar1,
  },
  {
    text:
      "From professional web design to scalable app development, CloudXSecure delivered exactly what we needed. Their team built secure cloud-based applications that support our growth and improve customer experience.",
    name: "Rajesh Kumar",
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
            What Our Clients Say About <br /> CloudXSecure 
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
