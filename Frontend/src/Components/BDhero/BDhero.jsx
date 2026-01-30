import React from "react";
import "./BDhero.css";
import { FaChartLine, FaBriefcase, FaFileInvoiceDollar } from "react-icons/fa";

// MAIN IMAGE
import heroImg from "../../assets/h2_banner_img.png";

// BACKGROUND SHAPES
import arcImg from "../../assets/h2_banner_shape01.png";
import waveImg from "../../assets/h2_banner_shape02.png";
import dotsGridImg from "../../assets/about-one-shape-1.png";
import gradientBoxImg from "../../assets/banner-one-img-shape-5.png";

const BDhero = () => {
  return (
    <section className="he-wrapper">
      {/* BACKGROUND SHAPES */}
      <img src={arcImg} alt="" className="bg-shape bg-arc" />
      <img src={waveImg} alt="" className="bg-shape bg-wave" />
      <img src={dotsGridImg} alt="" className="bg-shape bg-dots-grid" />
      <img src={gradientBoxImg} alt="" className="bg-shape bg-gradient-box" />

      {/* HERO CONTENT */}
      <div className="he-container">
        {/* LEFT */}
        <div className="he-left">
          <span className="he-badge">SECURE BACKUP & DISASTER RECOVERY EXPERTS</span>

          <h1>
           Reliable Backup & Disaster Recovery<br /> for Business Continuity
          </h1>

          <p>
            CloudXSecure provides end-to-end backup and disaster recovery services for cloud environments, websites, and applications. From secure data replication and encrypted storage to fast restoration and business continuity planning, we help organizations minimize downtime, protect sensitive information, and maintain compliance.
          </p>

          <div className="he-actions">
            <button className="he-btn-primary">
              Explore Backup Solutions <span>→</span>
            </button>

            <button className="he-btn-video">
              <span className="play">▶</span>
              Watch The Video
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="he-right">
          <img src={heroImg} alt="Business Consultant" />
        </div>
      </div>

      {/* ================= BOTTOM FEATURES ================= */}
      <div className="he-features">
        <div className="he-feature">
          <div className="he-icon animated-icon">
            <FaChartLine />
          </div>
          <div>
            <h4>Business Continuity & Growth</h4>
            <p>
              Ensure uninterrupted operations with CloudXSecure’s backup and disaster recovery solutions. We help businesses protect critical systems, websites, and applications while enabling secure growth through reliable cloud infrastructure and rapid recovery strategies.
            </p>
          </div>
        </div>

        <div className="he-feature">
          <div className="he-icon animated-icon delay-1">
            <FaBriefcase />
          </div>
          <div>
            <h4>Secure Cloud Recovery</h4>
            <p>
              Our secure cloud recovery services deliver automated backups, encrypted storage, and fast data restoration. CloudXSecure ensures your cloud platforms, web applications, and business systems remain protected against outages, cyber threats, and unexpected failures.
            </p>
          </div>
        </div>

        <div className="he-feature">
          <div className="he-icon animated-icon delay-2">
            <FaFileInvoiceDollar />
          </div>
          <div>
            <h4>Application & Data Protection</h4>
            <p>
              CloudXSecure safeguards your websites, mobile apps, and enterprise data with advanced backup frameworks and monitoring. Our solutions minimize downtime and protect sensitive information while maintaining compliance and performance across your digital ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BDhero;
