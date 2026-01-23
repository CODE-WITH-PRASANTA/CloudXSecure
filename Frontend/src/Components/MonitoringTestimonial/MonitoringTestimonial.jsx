import React, { useState } from "react";
import "./MonitoringTestimonial.css";
import LeftImage from "../../assets/market5.png"; 
import QuoteIcon from "../../assets/quote-single.svg"; // ADD YOUR SINGLE QUOTE ICON HERE

const MonitoringTestimonial = () => {
  const testimonials = [
    {
      text: "Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Florai Sum Dolor Sit Amet, Consecteture. Borem Ipsum Consectetur Adipiscinsit Consectetur Adipiscing.",
      name: "Mr. Robey Alexa",
      title: "CEO, Gerow Agency",
    },
    {
      text: "Professional Monitoring Support Provided With Complete Transparency And Real-time Reporting. Excellent Team Performance And Communication Skills.",
      name: "Ms. Alisha Brown",
      title: "Founder, TechNova",
    },
    {
      text: "Their Monitoring Solutions Helped Us Improve System Efficiency And Performance. Highly Recommended For Businesses Requiring Continuous Oversight.",
      name: "Mr. David Wilson",
      title: "Manager, Bright Ventures",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const { text, name, title } = testimonials[index];

  return (
    <section className="monitoring-testimonial-section">
      <div className="monitoring-testimonial-container">

        {/* LEFT SIDE IMAGE WITH BACKGROUND DESIGN + QUOTE ICON OVERLAY */}
        <div className="mt-left">
          <div className="mt-img-wrapper">
            
            {/* Decorative background circle */}
            <div className="mt-bg-circle"></div>

            {/* Main Image */}
            <img src={LeftImage} alt="testimonial visual" className="mt-left-img" />

            {/* Quote icon overlay */}
            <img src={QuoteIcon} alt="quote icon" className="mt-quote-icon" />
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="mt-right">
          <div className="mt-stars">{"★".repeat(5)}</div>

          <p className="mt-text">“ {text} ”</p>

          <div className="mt-user-info">
            <h3>{name}</h3>
            <p>{title}</p>
          </div>

          <div className="mt-controls">
            <button onClick={prevSlide} className="mt-control-btn">←</button>
            <button onClick={nextSlide} className="mt-control-btn">→</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MonitoringTestimonial;
