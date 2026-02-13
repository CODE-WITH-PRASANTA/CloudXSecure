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
    <section className="pricing-section" ref={sectionRef}>
      <div className={`pricing-header ${visible ? "animate" : ""}`}>
        <span className="pricing-badge">PRICING PLAN</span>
        <h2>
          Flexible Pricing Plans for <br />
          Cloud, Web & App Solutions
        </h2>
      </div>

      <div className="pricing-grid">

        {/* BASIC PLAN */}
        <div className={`pricing-card fade-up ${visible ? "show" : ""}`}>
          <div className="hex-badge">
            <h3>$60</h3>
            <span>Per Month</span>
          </div>

          {/* <span className="sub-label">Best for Startups & Small Businesses</span> */}
          <h4 className="plan-title">Basic Plan</h4>

          <ul className="feature-list">
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
            Choose A Plan ↗
          </button>
        </div>

        {/* PRO PLAN (Highlighted Center Card) */}
        <div className={`pricing-card pro-card fade-up ${visible ? "show delay-1" : ""}`}>
          <div className="hex-badge pro-hex">
            <h3>$80</h3>
            <span>Per Month</span>
          </div>

          {/* <span className="sub-label pro-label">Pro Packages</span> */}
          <h4 className="plan-title pro-title">Pro Plan</h4>

          <ul className="feature-list pro-features">
            <li>Advanced Managed Cloud Services</li>
            <li>Scalable Cloud Solutions</li>
            <li>Cloud Backup & Disaster Recovery</li>
            <li>Professional Web Design & Development</li>
            <li>Secure Data Backup & Recovery</li>
            <li>DevOps & Automation Support</li>
            <li>Mobile App Support & Integration</li>
            <li>Data Encryption & Compliance</li>
          </ul>

          <button className="plan-btn pro-btn">
            Choose A Plan ↗
          </button>
        </div>

        {/* PREMIUM PLAN */}
        <div className={`pricing-card fade-up ${visible ? "show delay-2" : ""}`}>
          <div className="hex-badge">
            <h3>$70</h3>
            <span>Per Month</span>
          </div>

          {/* <span className="sub-label">Premium Packages</span> */}
          <h4 className="plan-title">Premium Plan</h4>

          <ul className="feature-list">
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
            Choose A Plan ↗
          </button>
        </div>

      </div>
    </section>
  );
};

export default Pricingplan;
