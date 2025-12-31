import React, { useEffect, useRef, useState } from "react";
import "./ManagedCloudApproach.css";

const faqs = [
  {
    q: "How Does Cloud Computing Benefit My Business?",
    a: "Cloud computing enables scalability, cost efficiency, enhanced security, and remote accessibility, helping businesses adapt and grow faster."
  },
  {
    q: "What Included In IT Solution Infrastructure Services?",
    a: "Infrastructure services include network setup, server management, cloud integration, monitoring, and disaster recovery solutions."
  },
  {
    q: "How Can IT Solutions Improve My Business Security?",
    a: "IT solutions strengthen security using firewalls, endpoint protection, access control, encryption, and real-time monitoring."
  },
  {
    q: "Can IT Solutions Help Remote Work Capabilities?",
    a: "Yes, secure VPNs, cloud collaboration tools, and endpoint security enable safe and efficient remote work."
  },
  {
    q: "How To Often Should I Update My IT Systems?",
    a: "IT systems should be reviewed annually, with critical security updates applied immediately upon release."
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
          <h2>Our Eitech Approach</h2>
          <p>
            In an era where cyber threats are becoming increasingly sophisticated,
            protecting your business has never been more crucial. Our proactive
            cybersecurity strategy safeguards your infrastructure and data.
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
