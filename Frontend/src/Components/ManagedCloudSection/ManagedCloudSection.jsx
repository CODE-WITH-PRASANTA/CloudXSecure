
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

          <h2>Cyber Security Solution</h2>

          <p className="desc">
            In today’s rapidly evolving digital landscape, the security of your
            business data is more critical than ever. Our Cyber Security
            Solutions offer a multi-layered approach to protect your business
            from cyber threats.
          </p>

          <ul className="features">
            <li>Incident Response & Recovery</li>
            <li>Compliance Risk Management</li>
            <li>Secure Access Controls</li>
            <li>Vulnerability Assessments</li>
          </ul>

          <div className="highlight-box">
            <h3>Safeguard Your Business With Advanced Cybersecurity</h3>
            <p>
              Our comprehensive cybersecurity services are designed to defend
              against evolving threats with precision and reliability.
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
