import React from "react";
import "./CloudMaigrationslove.css";

// images
import img1 from "../../assets/a10.webp";
import img2 from "../../assets/a11.webp";
import img3 from "../../assets/a12.webp";
import img4 from "../../assets/a13.webp";

// icons
import icon1 from "../../assets/s-icon-1.webp";
import icon2 from "../../assets/s-icon-2.webp";
import icon3 from "../../assets/s-icon-3.webp";
import icon4 from "../../assets/s-icon-5.webp";

export default function ServiceCards() {
  const services = [
    { img: img1, icon: icon1, title: "Cloud Infrastructure Services" },
    { img: img2, icon: icon2, title: "Professional Web Design" },
    { img: img3, icon: icon3, title: "Mobile & App Development" },
    { img: img4, icon: icon4, title: "Cloud Security Solutions" },
  ];

  return (
    <section className="prg-services-wrap">
      <div className="prg-services-container">

        {/* HEADER */}
        <div className="prg-services-header">
          <span className="prg-services-tag">WHAT WE DO</span>
          <h2 className="prg-services-title">
           We Power Businesses With Secure Cloud & Digital Solutions
          </h2>

          <button className="prg-services-btn">
            See All Services →
          </button>
        </div>

        {/* CARDS */}
        <div className="prg-services-grid">
          {services.map((item, i) => (
            <div className="prg-service-card" key={i}>

              <div className="prg-card-img-wrap">
                <img src={item.img} alt="" />
              </div>

              <div className="prg-card-body">
                <div className="prg-card-icon">
                  <img src={item.icon} alt="" />
                </div>

                <h4>{item.title}</h4>
                <p>
                 CloudXSecure delivers secure cloud services, professional web design, and custom app development to help businesses grow faster. Our end-to-end cloud solutions focus on performance, scalability, and data protection—ensuring reliable digital experiences from infrastructure to applications.
                </p>

                <a href="#" className="prg-read-more">
                  Read More →
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
