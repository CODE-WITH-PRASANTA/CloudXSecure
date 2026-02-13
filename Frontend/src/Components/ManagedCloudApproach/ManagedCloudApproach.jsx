import React, { useEffect, useRef, useState } from "react";
import "./ManagedCloudApproach.css";

const faqs = [
  {
    q: "How Does Cloud Computing Benefit My Business?",
    a: "Cloud computing enables businesses to scale resources on demand, reduce infrastructure costs, and improve operational flexibility. With CloudXSecure’s cloud services, organizations gain secure access to data, improved collaboration, faster deployment, and enhanced performance without heavy upfront investments."
  },
  {
    q: "What Is Included in IT Solution & Infrastructure Services?",
    a: "CloudXSecure’s IT infrastructure services include network setup, server and cloud management, system monitoring, security integration, backup, and disaster recovery solutions. We ensure your IT environment is reliable, secure, and optimized for performance and scalability."
  },
  {
    q: "How Can IT Solutions Improve My Business Security?",
    a: "Our IT solutions strengthen business security through cloud security frameworks, access control, data encryption, threat monitoring, and regular system updates. CloudXSecure proactively protects your applications, networks, and data from cyber threats and unauthorized access."
  },
  {
    q: "Can IT Solutions Support Remote Work Capabilities?",
    a: "Yes. CloudXSecure enables secure remote work through cloud-based applications, secure network access, data protection, and collaboration tools. Our solutions allow teams to work efficiently from anywhere without compromising security or performance."
  },
  {
    q: "Why Choose CloudXSecure for Cloud & Digital Solutions?",
    a: "CloudXSecure delivers secure cloud services, professional web design, custom app development, and complete IT solutions under one roof. Our expert-driven approach ensures reliability, scalability, and long-term digital success for modern businesses."
  }
];

const ApproachFaq = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`approach-section ${visible ? "show" : ""}`}>
      <div className="approach-grid">
        {/* LEFT */}
        <div className="approach-left">
          <h2>Our CloudXSecure Approach</h2>
          <p>
               In an era where cyber threats, cloud complexity, and digital transformation are rapidly increasing, CloudXSecure follows a proactive and security-first approach to protect and scale your business.We combine advanced cybersecurity practices, scalable cloud architecture, and modern development strategies to deliver reliable, high-performance digital solutions. Our approach ensures your infrastructure, applications, and data remain secure, compliant, and future-ready while supporting continuous business growth.       
          </p>

          <h3>Frequently Asked Question</h3>
          <p className="faq-intro">
            Our IT solutions streamline operations, enhance security,
            and support scalable business growth.
          </p>

          <div className="faq-list">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`faq-item ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                <div className="faq-question">
                  {item.q}
                  <span>{active === i ? "▲" : "▼"}</span>
                </div>
                {active === i && <p className="faq-answer">{item.a}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="approach-right">
          <h3>Get A Free Quote</h3>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">
              Submit Now <span>↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApproachFaq;
