import React, { useEffect, useState } from "react";
import "./ConsultTestimonial.css";

import bgMap from "../../assets/const-testimonial_bg.webp";
import personImg from "../../assets/const-testimonial_img.webp";
import ratingStar from "../../assets/const-rating.svg";
import quoteIcon from "../../assets/const-quote.svg";

const testimonials = [
  {
    text:
      "Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Floria Sum Dolor Sit Amet, Consecteture. Borem Ipsum Dolor Sit Amet, Elita Moremsit Amet.",
    name: "Mr. Robey Alexa",
    role: "CEO, Gerow Agency",
  },
  {
    text:
      "Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Floria Sum Dolor Sit Amet, Consecteture. Borem Ipsum Dolor Sit Amet, Elita Moremsit Amet.",
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
