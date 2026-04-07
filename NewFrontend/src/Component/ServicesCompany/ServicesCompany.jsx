import React, { useState, useEffect } from "react";
import "./ServicesCompany.css";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import cloudhosting from "../../assets/cloudhosting.webp";
import cloudmig from "../../assets/CloudMigration.webp";
import cldsecu from "../../assets/cloudsecurity.webp";
import manage from "../../assets/managecloud.webp";
import itmanage from "../../assets/itmanage.webp";
import webdev from "../../assets/webdev.webp";
import appdev from "../../assets/app-develop.webp";
import digi from "../../assets/Digital-Marketing.webp";
import devops from "../../assets/devops.webp";
import monitor from "../../assets/monitor.webp";
import backup from "../../assets/backup.webp";
import consult from "../../assets/cloudconsult.webp";

import {
  HiOutlineCog6Tooth,
  HiOutlineChartBarSquare,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import {
  TbWorldWww,
  TbDeviceMobileCode,
  TbCloud,
  TbCloudLock,
  TbServer,
} from "react-icons/tb";
import { MdStorage } from "react-icons/md";

import topShape from "../../assets/service8.png";

const ServicesCompany = () => {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setPerPage(1);
      } else if (window.innerWidth <= 992) {
        setPerPage(6);
      } else {
        setPerPage(8);
      }
      setPage(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    {
      title: "IT Management",
      path: "/it/service/details",
      desc: "CloudXSecure offers end-to-end IT management services designed to optimize business operations, enhance system performance, and ensure 24/7 reliability. Our solutions include infrastructure monitoring, network management, server maintenance, and IT support using modern tools like AWS, Microsoft Azure, Linux servers, and automation frameworks. We help businesses reduce downtime, improve security, and scale efficiently with proactive IT strategies.",
      img: itmanage,
      icon: <HiOutlineCog6Tooth />,
    },
    {
      title: "Digital Marketing",
      path: "/digital/service/details",
      desc: "CloudXSecure delivers result-driven digital marketing services to boost your online visibility and ROI. Our expertise includes SEO optimization, Google Ads, social media marketing, content marketing, and performance analytics. Using tools like Google Analytics, SEMrush, and Meta Ads Manager, we create targeted campaigns that drive traffic, generate leads, and improve brand authority across digital platforms.",
      img: digi,
      icon: <HiOutlineChartBarSquare />,
    },
    {
      title: "Web Development",
      path: "/web-development",
      desc: "CloudXSecure builds high-performance, scalable, and SEO-optimized websites using modern technologies like React.js, Next.js, Node.js, and MongoDB. We focus on responsive design, fast loading speed, and user-friendly interfaces to enhance user experience and search engine rankings. Our web solutions are tailored for startups, enterprises, and eCommerce businesses.",
      img: webdev,
      icon: <TbWorldWww />,
    },
    {
      title: "App Development",
      path: "/app-development",
      desc: "CloudXSecure develops robust and scalable mobile applications for Android and iOS using technologies like Flutter, React Native, and Swift. Our apps are designed with intuitive UI/UX, high performance, and strong backend integration. We help businesses create engaging mobile experiences that drive user retention and growth.",
      img: appdev,
      icon: <TbDeviceMobileCode />,
    },
    {
      title: "Managed Cloud",
      path: "/managecloud/service/details",
      desc: "CloudXSecure provides fully managed cloud services to help businesses streamline operations and reduce infrastructure costs. We manage deployments, scaling, monitoring, and optimization on platforms like AWS, Azure, and Google Cloud. Our managed cloud solutions ensure high availability, performance, and cost efficiency.",
      img: manage,
      icon: <TbCloud />,
    },
    {
      title: "Cloud Security",
      path: "/cloudsecurity/service/details",
      desc: "CloudXSecure delivers advanced cloud security solutions to protect your data and infrastructure from cyber threats. Our services include threat detection, firewall management, encryption, identity access management (IAM), and compliance monitoring. We use industry-leading security practices to ensure data privacy and regulatory compliance.",
      img: cldsecu,
      icon: <TbCloudLock />,
    },
    {
      title: "Cloud Hosting",
      path: "/cloudhosting/service/details",
      desc: "CloudXSecure offers scalable and high-performance cloud hosting solutions tailored for businesses of all sizes. We provide secure hosting environments with load balancing, CDN integration, and uptime monitoring using AWS, DigitalOcean, and other platforms. Our hosting ensures fast performance and reliability.",
      img: cloudhosting,
      icon: <TbServer />,
    },
    {
      title: "Cloud Migration",
      path: "/cloudmigration/service/details",
      desc: "CloudXSecure provides seamless cloud migration services to help businesses transition from on-premise infrastructure to the cloud. We ensure minimal downtime, data integrity, and optimized performance using migration tools and strategies tailored to AWS, Azure, and hybrid environments.",
      img: cloudmig,
      icon: <TbCloud />,
    },
    {
      title: "DevOps & Automation",
      path: "/devops/details",
      desc: "CloudXSecure enables faster and more reliable software delivery through DevOps and automation practices. We implement CI/CD pipelines, containerization using Docker, orchestration with Kubernetes, and infrastructure as code using Terraform. Our DevOps solutions improve deployment speed, scalability, and system reliability.",
      img: devops,
      icon: <HiOutlineCog6Tooth />,
    },
    {
      title: "Monitoring",
      path: "/monitoring/service/details",
      desc: "CloudXSecure provides real-time monitoring solutions to ensure system performance, uptime, and security. Using tools like Prometheus, Grafana, and ELK Stack, we monitor applications, servers, and networks to detect issues early and maintain smooth operations.",
      img: monitor,
      icon: <HiOutlineChartBarSquare />,
    },
    {
      title: "Backup & Recovery",
      path: "/backup/service/details",
      desc: "CloudXSecure ensures business continuity with reliable backup and disaster recovery solutions. We implement automated backups, secure storage, and rapid recovery systems using cloud technologies. Our solutions protect critical data and minimize downtime during unexpected failures.",
      img: backup,
      icon: <MdStorage />,
    },
    {
      title: "Cloud Consulting",
      path: "/cloudconsult/service/details",
      desc: "CloudXSecure offers expert cloud consulting services to help businesses design, implement, and optimize their cloud strategies. Our consultants analyze your requirements and recommend the best solutions using AWS, Azure, and Google Cloud to improve performance, security, and cost efficiency.",
      img: consult,
      icon: <HiOutlineShieldCheck />,
    },
  ];
  
  const totalPages = Math.ceil(services.length / perPage);

  const currentData = services.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="servicesCompany">
      <img src={topShape} alt="" className="servicesCompany__topShape" />

      <div className="servicesCompany__container">
        <div className="servicesCompany__header">
          <div className="servicesCompany__badge">
            <span className="servicesCompany__badgeLine"></span>
            <span className="servicesCompany__badgeText">
              CLOUDXSECURE SERVICES
            </span>
          </div>

          <h2 className="servicesCompany__title">
            Secure, Scalable & Future-Ready
            <br />
            Cloud & IT <span>Solutions</span>
          </h2>
        </div>

        <div className="servicesCompany__grid">
          {currentData.map((item, i) => (
            <article key={i} className="servicesCompany__card">
              <div className="servicesCompany__imageWrap">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="servicesCompany__content">
                <div className="servicesCompany__icon">{item.icon}</div>

                <h3 className="servicesCompany__cardTitle">{item.title}</h3>

                <p className="servicesCompany__description">{item.desc}</p>

                <div className="servicesCompany__footer">
                  <Link to={item.path} className="servicesCompany__readMore">
                    <span className="servicesCompany__readMoreCircle">
                      <FiPlus />
                    </span>
                    <span className="servicesCompany__readMoreText">
                      READ MORE
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="servicesCompany__pagination">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              className={i === page ? "active" : ""}
              onClick={() => setPage(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCompany;
