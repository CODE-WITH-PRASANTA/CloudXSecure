import React, { useEffect, useState } from "react";
import "./ConsultTestimonial.css";

import bgMap from "../../assets/const-testimonial_bg.webp";
import personImg from "../../assets/const-testimonial_img.webp";
import ratingStar from "../../assets/const-rating.svg";
import quoteIcon from "../../assets/const-quote.svg";

const testimonials = [
  {
    text:
      "CloudXSecure transformed our infrastructure with secure cloud deployment and seamless application development. Their team delivered a fast, scalable website and helped us migrate to the cloud without downtime. Professional, reliable, and highly skilled.",
    name: "Mr. Robey Alexa",
    role: "CEO, Gerow Agency",
  },
  {
    text:
      "From cloud architecture to mobile app development, CloudXSecure handled everything end-to-end. Their managed cloud services and DevOps support keep our systems running 24/7 while improving performance and security.",
    name: "Guy Hawkins",
    role: "CEO, Gerow Agency",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      className="testimonial-section"
      style={{ backgroundImage: `url(${bgMap})` }}
    >
      <div className="testimonial-wrapper">
        {/* LEFT IMAGE */}
        <div className="testimonial-img-wrap">
          <img src={personImg} alt="testimonial" />

          <div className="review-badge">
            <img src={ratingStar} alt="rating" />
            <h4>50k</h4>
            <span>Positive Review</span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="testimonial-content">
          <div className="star-row">
            {[...Array(2)].map((_, i) => (
              <img src={ratingStar} alt="star" key={i} />
            ))}
          </div>

          <img src={quoteIcon} alt="quote" className="quote-icon" />

          <p className="testimonial-text">
            {testimonials[index].text}
          </p>

          <h4 className="testimonial-name">
            {testimonials[index].name}
          </h4>
          <span className="testimonial-role">
            {testimonials[index].role}
          </span>

          <div className="slider-arrows">
            <button onClick={prevSlide}>←</button>
            <button onClick={nextSlide}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
