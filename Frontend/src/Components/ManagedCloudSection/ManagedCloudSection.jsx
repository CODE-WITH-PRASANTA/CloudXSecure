
import React, { useEffect, useRef } from "react";
import "./ManagedCloudSection.css";

import heroImg from "../../assets/service-img2.webp";
import imgOne from "../../assets/service-img3.webp";
import imgTwo from "../../assets/service-img4.webp";

const CyberSecuritySection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cyber-wrapper" ref={sectionRef}>
      <div className="cyber-main">
        {/* LEFT CONTENT */}
        <div className="cyber-content">
          <img src={heroImg} alt="Cyber Security" className="hero-image" />

          <h2>Cloud, Security & Digital Solutions You Can Trust</h2>

          <p className="managecloud-desc">
            In today’s digital-first world, businesses need secure, scalable, and high-performance technology solutions to stay competitive. CloudXSecure delivers end-to-end cloud services, cybersecurity solutions, web design, and app development to help organizations grow securely and efficiently.

We combine industry best practices, modern cloud architecture, and proactive security strategies to protect your digital assets while enabling seamless business operations.
          </p>

          <ul className="features">
            <li>Cloud Security & Compliance</li>
            <li>Managed Cloud Services</li>
            <li>Mobile & Web App Development</li>
            <li>Cloud Migration & Hosting</li>
          </ul>

          <div className="highlight-box">
            <h3>Safeguard Your Business with CloudXSecure</h3>
            <p>
              CloudXSecure delivers enterprise-grade cybersecurity and cloud solutions designed to protect your business from cyber threats while supporting digital growth. From cloud consulting and DevOps automation to web and app design, we provide secure, scalable, and future-ready technology solutions under one roof.
            </p>
          </div>

          <div className="image-grid">
            <div className="image-card">
              <img src={imgOne} alt="Cyber Lab" />
            </div>
            <div className="image-card">
              <img src={imgTwo} alt="Data Protection" />
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="cyber-sidebar">
          <div className="sidebar-box">
            <h4>Search</h4>
            <input type="text" placeholder="Search..." />
          </div>

          <div className="sidebar-box">
            <h4>Our Service</h4>
            {[
              "Cyber Security Solution",
              "Scalable Cloud Solution",
              "Data Protection Services",
              "Optimization Management",
              "HelpDesk 360 Solutions",
              "Software Development",
              "Custom App Development",
              "IT Infrastructure Networking",
              "Business Consulting",
            ].map((service, i) => (
              <div className="sidebar-item" key={i}>
                {service}
              </div>
            ))}
          </div>

          <div className="sidebar-box">
            <h4>Popular Tags</h4>
            <div className="tags">
              {[
                "#TechSolution",
                "#CloudComputing",
                "#ManagedServices",
                "#BusinessIT",
                "#DataSecurity",
                "#TechForBusiness",
                "#TechUpgrades",
                "#ITInfrastructure",
              ].map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default CyberSecuritySection;
