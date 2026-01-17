import React, { useState } from "react";
import "./DevopsTestimonial.css";

import mainImg from "../../assets/devops-feedback-img.webp";
import userImg from "../../assets/devops-feedback-smoll-img.webp";
import quoteImg from "../../assets/devops-qute.webp";

const devopsTestimonials = [
  {
    text: `I should be incapable of drawing a single stroke at the present moment;
    and yet I feel that I never was a best greater artist than now. The lovely
    valley teems with vapor around me, & the meridian sun strikes.`,
    name: "Shakib Mahmud",
    role: "Operating Officer",
  },
  {
    text: `I should be incapable of drawing a single stroke at the present moment;
    and yet I feel that I never was a best greater artist than now. The lovely
    valley teems with vapor around me, & the meridian sun strikes.`,
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
          Feedback from <span>Customers</span>
        </h2>
        <p>
          Whether you are looking to enhance productivity, improve efficiency,
          or stay ahead of technological advancements, we've got you covered.
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
