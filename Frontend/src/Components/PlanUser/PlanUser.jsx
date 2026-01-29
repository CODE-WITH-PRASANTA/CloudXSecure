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
    title: "Outstanding Cloud Support",
    text: "CloudXSecure transformed our infrastructure with their managed cloud services. From migration to optimization, everything was seamless.",
    name: "Rahul Mehta",
    role: "IT Manager",
    rating: 5,
    avatar: user1,
  },
  {
    title: "Exceptional Cybersecurity Expertise",
    text: "Security was our biggest concern, and CloudXSecure delivered beyond expectations.",
    name: "Amit Sharma",
    role: "Marketing Lead",
    rating: 5,
    avatar: user2,
  },
  {
    title: "Reliable App Development Partner",
    text: "The CloudXSecure team built a secure and scalable application tailored to our business needs.",
    name: "Priya Verma",
    role: "Startup Founder",
    rating: 5,
    avatar: user3,
  },
  {
    title: "Professional Web Design Experience",
    text: "CloudXSecure designed a modern, responsive website that significantly increased engagement.",
    name: "Abhisek Singh",
    role: "Marketing Lead",
    rating: 5,
    avatar: user4,
  },
];

const BizTestimonials = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const statsRef = useRef(null);

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

  return (
    <section className="biz-testimonial-section">
      <div className="biz-testimonial-container">

        <h2 className="biz-testimonial-heading">What Our Users Say</h2>
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

        {/* MARQUEE SLIDER */}
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

      </div>
    </section>
  );
};

export default BizTestimonials;
