import { useEffect, useRef } from "react";
import "./OurServicesServe.css";

const services = [
  {
    title: "Managed Cloud Services",
    desc: "CloudXSecure provides fully managed cloud services to ensure your cloud environment is secure, optimized, and always available. We handle monitoring, maintenance, performance tuning, and ongoing support so you can focus on growing your business.",
    icon: "💡",
  },
  {
    title: "Cloud Security",
    desc: "Protect your cloud infrastructure with advanced cloud security services. CloudXSecure delivers threat detection, access control, encryption, compliance support, and continuous monitoring to keep your data and applications secure.",
    icon: "⚙️",
  },
  {
    title: "Cloud Hosting",
    desc: "CloudXSecure offers scalable cloud hosting solutions with high availability, fast performance, and enterprise-level security. Our cloud hosting services are designed to support websites, applications, and business systems of all sizes.",
    icon: "☁️",
  },
  {
    title: "Cloud Migration",
    desc: "We help businesses migrate applications, data, and infrastructure to the cloud with minimal downtime. CloudXSecure ensures a secure, efficient, and smooth cloud migration process tailored to your business needs.",
    icon: "🔐",
  },
  {
    title: "DevOps & Automation",
    desc: "CloudXSecure implements DevOps practices and automation to accelerate development, improve deployment efficiency, and enhance system reliability. Our solutions help teams deliver faster and scale smarter.",
    icon: "📊",
  },
  {
    title: "Monitoring & Cost Optimization",
    desc: "Optimize cloud performance and reduce operational costs with real-time monitoring and cost optimization strategies. CloudXSecure ensures efficient resource utilization without compromising performance or security.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    desc: "CloudXSecure delivers custom mobile app development services designed to help businesses build secure, scalable, and high-performance mobile applications. We develop intuitive and user-friendly apps for Android, iOS, and cross-platform environments, ensuring seamless performance and future-ready architecture.",
    icon: "📱",
  },
  {
    title: "Backup & Disaster Recovery",
    desc: "Protect your critical business data with reliable cloud backup and disaster recovery solutions. CloudXSecure ensures data availability, fast recovery, and business continuity during unexpected incidents.",
    icon: "🖧",
  },
  {
    title: "Cloud Consulting",
    desc: "Our cloud consulting experts help you plan, design, and implement cloud strategies that align with your business goals. CloudXSecure provides guidance on architecture, security, scalability, and optimization.",
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
            entry.target.classList.add("ourservicesreveal-active");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="ourservicesserve-section">
      <div className="ourservicesserve-grid">
        {services.map((item, index) => (
          <div
            className="service-card ourservicesreveal"
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
