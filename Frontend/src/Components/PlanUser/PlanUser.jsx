import React, { useEffect, useRef, useState } from "react";
import "./PlanUser.css";
import { FaQuoteRight, FaStar } from "react-icons/fa";

/* IMPORT LOCAL IMAGES */
import user1 from "../../assets/avatar-1.png";
import user2 from "../../assets/avatar-2.png";
import user3 from "../../assets/avatar-3.png";
import user4 from "../../assets/avatar-1.png";

/* STATS DATA */
const stats = [
  { value: 50, label: "Global Reach", suffix: "+" },
  { value: 130, label: "User", suffix: "M" },
  { value: 4, label: "User Ratings", suffix: "/5" },
  { value: 55, label: "User Satisfaction", suffix: "%" },
];

const testimonials = [
  {
    title: "Amazing!",
    text:
      "This API transformed our workflow! The integration was seamless, and the support team was always available.",
    name: "Michael K. Wilson",
    role: "CEO & Founder",
    rating: 5,
    avatar: user1,
  },
  {
    title: "Exceptional",
    text:
      "This API transformed our workflow! The integration was seamless, and the support team was always available.",
    name: "Sarah Johnson",
    role: "Marketing Head",
    rating: 5,
    avatar: user2,
  },
  {
    title: "Exceptional Service",
    text:
      "This API transformed our workflow! The integration was seamless, and the support team was always available.",
    name: "David Miller",
    role: "CTO",
    rating: 5,
    avatar: user3,
  },
  {
    title: "Superb!",
    text:
      "This API transformed our workflow! The integration was seamless, and the support team was always available.",
    name: "Emily Clark",
    role: "Product Manager",
    rating: 5,
    avatar: user4,
  },
];

const BizTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  /* SCROLL COUNT ANIMATION */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          stats.forEach((stat, i) => {
            let start = 0;
            const end = stat.value;
            const duration = 1200;
            const stepTime = Math.max(Math.floor(duration / end), 20);

            const counter = setInterval(() => {
              start += 1;
              setCounts((prev) => {
                const updated = [...prev];
                updated[i] = start;
                return updated;
              });

              if (start === end) clearInterval(counter);
            }, stepTime);
          });
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const getVisibleCards = () => [
    testimonials[activeIndex % 4],
    testimonials[(activeIndex + 1) % 4],
    testimonials[(activeIndex + 2) % 4],
  ];

  return (
    <section className="biz-testimonial-section">
      <div className="biz-testimonial-container">

        {/* HEADING */}
        <h2 className="biz-testimonial-heading">What is the User Say</h2>
        <p className="biz-testimonial-subheading">
          Explore how we've helped businesses grow organically with SEO.
        </p>

        {/* STATS */}
        <div className="biz-stats-wrapper" ref={statsRef}>
          {stats.map((item, index) => (
            <div className="biz-stat-box" key={index}>
              <h3>
                {counts[index]}
                {item.suffix}
              </h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        {/* CARDS */}
        <div className="biz-testimonial-slider">
          {getVisibleCards().map((item, index) => (
            <div className="biz-testimonial-card" key={index}>

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
                  {Array(item.rating)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="biz-slider-dots">
          {[0, 1, 2, 3].map((dot) => (
            <span
              key={dot}
              className={`biz-dot ${activeIndex === dot ? "active" : ""}`}
              onClick={() => setActiveIndex(dot)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BizTestimonials;
