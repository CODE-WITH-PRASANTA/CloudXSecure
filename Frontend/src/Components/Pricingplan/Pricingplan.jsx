import React, { useEffect, useRef, useState } from "react";
import "./Pricingplan.css";

const Pricingplan = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const plans = [
    {
      price: "₹60",
      title: "Basic Plan",
      features: [
        "Managed Cloud Services (Basic)",
        "Secure Cloud Hosting",
        "Website Maintenance & Support",
        "Basic Cybersecurity Protection",
        "Data Backup & Recovery",
        "Performance Monitoring",
        "IT Infrastructure Management",
        "Data Encryption & Compliance",
      ],
    },
    {
      price: "₹80",
      title: "Pro Plan",
      pro: true,
      features: [
        "Advanced Managed Cloud Services",
        "Scalable Cloud Solutions",
        "Cloud Backup & Disaster Recovery",
        "Professional Web Design & Development",
        "Secure Data Backup & Recovery",
        "DevOps & Automation Support",
        "Mobile App Support & Integration",
        "Data Encryption & Compliance",
      ],
    },
    {
      price: "₹70",
      title: "Premium Plan",
      features: [
        "Enterprise Cloud Solutions",
        "Custom Web & App Development",
        "Cloud Migration & Optimization",
        "Priority Support & SLA",
        "Custom Software Development",
        "Dedicated Cloud Consulting",
        "24/7 Cloud Monitoring & Support",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToCard = (index) => {
    if (sliderRef.current) {
      const width = sliderRef.current.clientWidth;
      sliderRef.current.scrollTo({
        left: width * index,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    const scrollLeft = sliderRef.current.scrollLeft;
    const width = sliderRef.current.clientWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  return (
    <section className="pricing-section" ref={sectionRef}>
      <div className={`pricing-header ${visible ? "animate" : ""}`}>
        <span className="pricing-badge">PRICING PLAN</span>
        <h2>
          Flexible Pricing Plans for <br />
          Cloud, Web & App Solutions
        </h2>
      </div>

      <div
        className="pricing-grid"
        ref={sliderRef}
        onScroll={handleScroll}
      >
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card fade-up ${
              visible ? "show" : ""
            } ${plan.pro ? "pro-card" : ""}`}
          >
            <div className={`hex-badge ${plan.pro ? "pro-hex" : ""}`}>
              <h3>{plan.price}</h3>
              <span>Per Month</span>
            </div>

            <h4 className={`plan-title ${plan.pro ? "pro-title" : ""}`}>
              {plan.title}
            </h4>

            <ul className={`feature-list ${plan.pro ? "pro-features" : ""}`}>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <button className={`plan-btn ${plan.pro ? "pro-btn" : ""}`}>
              Choose A Plan ↗
            </button>
          </div>
        ))}
      </div>

      {/* Mobile Pagination */}
      <div className="pricing-pagination">
        <button
          onClick={() =>
            scrollToCard(activeIndex > 0 ? activeIndex - 1 : 0)
          }
        >
          ◀
        </button>

        {plans.map((_, index) => (
          <span
            key={index}
            className={activeIndex === index ? "dot active" : "dot"}
            onClick={() => scrollToCard(index)}
          ></span>
        ))}

        <button
          onClick={() =>
            scrollToCard(
              activeIndex < plans.length - 1
                ? activeIndex + 1
                : plans.length - 1
            )
          }
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default Pricingplan;