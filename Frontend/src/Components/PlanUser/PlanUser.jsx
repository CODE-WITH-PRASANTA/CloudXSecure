import React, { useEffect, useRef, useState } from "react";
import "./PlanUser.css";
import { FaQuoteRight, FaStar } from "react-icons/fa";

import user1 from "../../assets/avatar-1.png";
import user2 from "../../assets/avatar-2.png";
import user3 from "../../assets/avatar-3.png";
import user4 from "../../assets/avatar-1.png";

/* STATS */
const stats = [
  { value: 50, label: "Global Reach", suffix: "+" },
  { value: 130, label: "User", suffix: "M" },
  { value: 4, label: "User Ratings", suffix: "/5" },
  { value: 55, label: "User Satisfaction", suffix: "%" },
];

/* TESTIMONIALS */
const testimonials = [
  {
    title: "Amazing!",
    text: "This API transformed our workflow! The integration was seamless, and the support team was always available.",
    name: "Michael K. Wilson",
    role: "CEO & Founder",
    rating: 5,
    avatar: user1,
  },
  {
    title: "Exceptional",
    text: "This API transformed our workflow! The integration was seamless, and the support team was always available.",
    name: "Sarah Johnson",
    role: "Marketing Head",
    rating: 5,
    avatar: user2,
  },
  {
    title: "Exceptional Service",
    text: "This API transformed our workflow! The integration was seamless, and the support team was always available.",
    name: "David Miller",
    role: "CTO",
    rating: 5,
    avatar: user3,
  },
  {
    title: "Superb!",
    text: "This API transformed our workflow! The integration was seamless, and the support team was always available.",
    name: "Emily Clark",
    role: "Product Manager",
    rating: 5,
    avatar: user4,
  },
];

const VISIBLE = 3;
const TOTAL = testimonials.length;

const BizTestimonials = () => {
  const [index, setIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const statsRef = useRef(null);

  /* AUTO SLIDE (LEFT → RIGHT) */
  useEffect(() => {
    const timer = setInterval(() => {
      setEnableTransition(true);
      setIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  /* SILENT RESET */
  useEffect(() => {
    if (index === TOTAL) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(0);
      }, 900); // must match transition duration
    }
  }, [index]);

  /* COUNTER */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        stats.forEach((stat, i) => {
          let start = 0;
          const interval = setInterval(() => {
            start++;
            setCounts((prev) => {
              const updated = [...prev];
              updated[i] = start;
              return updated;
            });
            if (start === stat.value) clearInterval(interval);
          }, 30);
        });

        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
  }, []);

  const handleDotClick = (i) => {
    setEnableTransition(true);
    setIndex(i);
  };

  return (
    <section className="biz-testimonial-section">
      <div className="biz-testimonial-container">

        <h2 className="biz-testimonial-heading">What is the User Say</h2>
        <p className="biz-testimonial-subheading">
          Explore how we've helped businesses grow organically with SEO.
        </p>

        {/* STATS */}
        <div className="biz-stats-wrapper" ref={statsRef}>
          {stats.map((item, i) => (
            <div className="biz-stat-box" key={i}>
              <h3>{counts[i]}{item.suffix}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        {/* SLIDER */}
       
<div className="biz-slider-wrapper">
  <div className="biz-testimonial-slider marquee">
    {[...testimonials, ...testimonials].map((item, i) => (
      <div className="biz-testimonial-card" key={i}>
        <div className="biz-card-header">
          <h4>{item.title}</h4>
          <FaQuoteRight className="biz-quote-icon" />
        </div>

        <p className="biz-testimonial-text">"{item.text}"</p>

        <div className="biz-testimonial-footer">
          <div className="biz-user-info">
            <img src={item.avatar} alt={item.name} />
            <div>
              <h5>{item.name}</h5>
              <span>{item.role}</span>
            </div>
          </div>

          <div className="biz-rating">
            {[...Array(item.rating)].map((_, j) => (
              <FaStar key={j} />
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* DOTS */}
        <div className="biz-slider-dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`biz-dot ${index === i ? "active" : ""}`}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BizTestimonials;
