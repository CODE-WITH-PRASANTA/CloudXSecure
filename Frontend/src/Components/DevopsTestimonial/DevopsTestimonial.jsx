import React, { useState } from "react";
import "./DevopsTestimonial.css";

import mainImg from "../../assets/devops-feedback-img.webp";
import userImg from "../../assets/devops-feedback-smoll-img.webp";
import quoteImg from "../../assets/devops-qute.webp";

const devopsTestimonials = [
  {
    text: `CloudXSecure delivered secure cloud solutions and outstanding web and app development for our business. Their team improved performance, scalability, and data security while keeping everything on schedule.`,
    name: "Shakib Mahmud",
    role: "Operating Officer",
  },
  {
    text: `Working with CloudXSecure was seamless. From cloud infrastructure to custom web and mobile app design, their expertise helped us streamline operations and grow faster.`,
    name: "Shakib Mahmud",
    role: "Operating Officer",
  },
];

const DevopsTestimonialScroll = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % devopsTestimonials.length);

  const prevSlide = () =>
    setIndex(
      (prev) => (prev - 1 + devopsTestimonials.length) % devopsTestimonials.length
    );

  return (
    <section className="devops-testimonial-section">
      {/* HEADER */}
      <div className="devops-testimonial-header">
        <span className="devops-testimonial-tag">Testimonials</span>
        <h2 className="devops-testimonial-title">
          Trusted by Businesses Worldwide
          <span> Client Feedback</span>
        </h2>
        <p className="devops-testimonial-subtitle">
          Discover how CloudXSecure helps organizations grow with secure cloud
          services, modern web design, scalable app development, and end-to-end
          cloud solutions.
        </p>
      </div>

      {/* MAIN LAYOUT */}
      <div className="devops-testimonial-container">

        {/* LEFT IMAGE */}
        <div className="devops-testimonial-image-box">
          <img src={mainImg} alt="Client feedback" />
          <div className="devops-image-overlay"></div>
        </div>

        {/* RIGHT CARD */}
        <div className="devops-testimonial-card">
          <div
            className="devops-testimonial-slider"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {devopsTestimonials.map((item, i) => (
              <div className="devops-testimonial-slide" key={i}>
                <img src={quoteImg} alt="quote" className="devops-quote-icon" />

                <p className="devops-testimonial-text">{item.text}</p>

                <div className="devops-user-info">
                  <img src={userImg} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* NAVIGATION */}
          <div className="devops-nav-buttons">
            <button onClick={prevSlide}>←</button>
            <button onClick={nextSlide}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevopsTestimonialScroll;
