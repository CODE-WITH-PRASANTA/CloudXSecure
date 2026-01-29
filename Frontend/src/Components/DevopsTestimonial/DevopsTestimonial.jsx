import React, { useState } from "react";
import "./DevopsTestimonial.css";

import mainImg from "../../assets/devops-feedback-img.webp";
import userImg from "../../assets/devops-feedback-smoll-img.webp";
import quoteImg from "../../assets/devops-qute.webp";

const devopsTestimonials = [
  {
    text: `CloudXSecure delivered secure cloud solutions and outstanding web and app development for our business. Their team improved performance, scalability, and data security while keeping everything on schedule. A trusted partner for modern IT solutions.`,
    name: "Shakib Mahmud",
    role: "Operating Officer",
  },
  {
    text: `Working with CloudXSecure was seamless. From cloud infrastructure to custom web and mobile app design, their expertise helped us streamline operations and grow faster. Highly recommended for reliable cloud services and digital solutions.`,
    name: "Shakib Mahmud",
    role: "Operating Officer",
  },
];

const DevopsTestimonialScroll = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % devopsTestimonials.length);
  };

  const prevSlide = () => {
    setIndex(
      (prev) => (prev - 1 + devopsTestimonials.length) % devopsTestimonials.length
    );
  };

  return (
    <section className="devops-testimonial-section">
      {/* HEADER */}
      <div className="devops-testimonial-header">
        <span className="devops-testimonial-tag">Testimonial</span>
        <h2>
          Trusted by Businesses Worldwide –<span>Client Feedback</span>
        </h2>
        <p>
          Discover how CloudXSecure helps organizations grow with secure cloud services, modern web design, scalable app development, and end-to-end cloud solutions.
        </p>
      </div>

      {/* CONTENT */}
      <div className="devops-testimonial-wrapper">
        {/* IMAGE */}
        <div className="devops-testimonial-img">
          <img src={mainImg} alt="testimonial" />
          <div className="devops-testimonial-overlay"></div>
        </div>

        {/* CARD */}
<div className="devops-testimonial-card">
  <div
    className="devops-testimonial-slider"
    style={{ transform: `translateX(-${index * 100}%)` }}
  >
    {devopsTestimonials.map((item, i) => (
      <div className="devops-testimonial-slide" key={i}>
        <img src={quoteImg} alt="quote" className="devops-quote" />

        <p className="devops-testimonial-text">{item.text}</p>

        <div className="devops-testimonial-user">
          <img src={userImg} alt="user" />
          <div>
            <h4>{item.name}</h4>
            <span>{item.role}</span>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* NAV */}
  <div className="devops-testimonial-nav">
    <button onClick={prevSlide}>←</button>
    <button onClick={nextSlide}>→</button>
  </div>
</div>

      </div>
    </section>
  );
};

export default DevopsTestimonialScroll;
