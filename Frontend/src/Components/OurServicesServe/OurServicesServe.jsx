import { useEffect, useRef } from "react";
import "./OurServicesServe.css";

const services = [
  {
    title: "Consulting Service",
    desc: "Strategic IT planning roadmap development. Business process analysis and improvement for IT solution & technology.",
    icon: "💡",
  },
  {
    title: "Software Development",
    desc: "Mobile app development for iOS, Android, and cross-platform solutions & web application development.",
    icon: "⚙️",
  },
  {
    title: "Cloud Solution",
    desc: "Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).",
    icon: "☁️",
  },
  {
    title: "Cyber Security",
    desc: "Threat assessment and vulnerability analysis. Security strategy development and implementation.",
    icon: "🔐",
  },
  {
    title: "Data Analytics",
    desc: "Data visualization and business intelligence solutions. Predictive analytics and ML solutions.",
    icon: "📊",
  },
  {
    title: "Manage IT Services",
    desc: "Proactive IT monitoring and management. Network infrastructure setup and maintenance.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    desc: "Custom mobile applications with secure and scalable architecture.",
    icon: "📱",
  },
  {
    title: "IT Infrastructure & Networking",
    desc: "Enterprise-grade infrastructure and networking solutions.",
    icon: "🖧",
  },
  {
    title: "Custom Software Development",
    desc: "Tailored software solutions for business automation and growth.",
    icon: "🧩",
  },
];

export default function Services() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section">
      <div className="services-grid">
        {services.map((item, index) => (
          <div
            className="service-card reveal"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <div className="icon-wrapper">
              <div className="icon-circle">{item.icon}</div>
              <div className="arrow-btn">↗</div>
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
