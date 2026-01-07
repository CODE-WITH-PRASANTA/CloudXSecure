import React, { useEffect, useRef, useState } from "react";
import "./Pricingplan.css";

const Pricingplan = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <section className="pricing" ref={sectionRef}>
      <div className={`pricing-header ${visible ? "animate" : ""}`}>
        <span className="pricing-badge">PRICING PLAN</span>
        <h2>
          Flexible Pricing Plans for<br />
          Cloud, Web & App Solutions
        </h2>
      </div>

      <div className="pricing-grid">
        {/* BASIC */}
        <div className={`pricing-card ${visible ? "show delay-1" : ""}`}>
          <div className="price-badge">
            <h3>$60</h3>
            <span>Per Month</span>
          </div>

          <span className="plan-label">Best for Startups & Small Businesses</span>
          <h4>Basic Plan</h4>

          <ul>
            <li>Managed Cloud Services (Basic)</li>
            <li>Secure Cloud Hosting</li>
            <li>Website Maintenance & Support</li>
            <li>Basic Cybersecurity Protection</li>
            <li>Data Backup & Recovery</li>
            <li>Performance Monitoring</li>
            <li>IT Infrastructure Management</li>
            <li>Data Encryption & Compliance</li>
          </ul>

          <button className="plan-btn">
            Choose A Plan <span>↗</span>
          </button>
        </div>

        {/* PRO */}
        <div className={`pricing-card active ${visible ? "show delay-2" : ""}`}>
          <div className="price-badge">
            <h3>$80</h3>
            <span>Per Month</span>
          </div>

          <span className="plan-label">Pro Packages</span>
          <h4>Pro Plan</h4>

          <ul>
            <li>Advanced Managed Cloud Services</li>
            <li>Scalable Cloud Solutions</li>
            <li>Cloud Backup & Disaster Recovery</li>
            <li>Professional Web Design & Development</li>
            <li>Secure Data Backup & Recovery</li>
            <li>DevOps & Automation Support</li>
            <li>Mobile App Support & Integration</li>
            <li>Data Encryption & Compliance</li>
          </ul>

          <button className="plan-btn white">
            Choose A Plan <span>↗</span>
          </button>
        </div>

        {/* PREMIUM */}
        <div className={`pricing-card ${visible ? "show delay-3" : ""}`}>
          <div className="price-badge">
            <h3>$70</h3>
            <span>Per Month</span>
          </div>

          <span className="plan-label">Premium Packages</span>
          <h4>Premium Plan</h4>

          <ul>
            <li>Enterprise Cloud Solutions</li>
            <li>Custom Web & App Development</li>
            <li>Cloud Migration & Optimization</li>
            <li>Cloud Migration & Optimization</li>
            <li>Priority Support & SLA</li>
            <li>Custom Software Development</li>
            <li>Dedicated Cloud Consulting</li>
            <li>24/7 Cloud Monitoring & Support</li>
          </ul>

          <button className="plan-btn">
            Choose A Plan <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricingplan;
