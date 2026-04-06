import React, { useState } from "react";
import "./DigitalMarketingCont.css";
import { FiPlus } from "react-icons/fi";

import serviceImg from "../../assets/service-details.webp";
import iconImg from "../../assets/det-icon.png"; 

const DigitalMarketingCont = () => {
  const [active, setActive] = useState(2);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <div className="dmc">

      {/* IMAGE */}
      <div className="dmc__imageWrap">
        <img src={serviceImg} alt="service" />
      </div>

      {/* TITLE */}
      <h2 className="dmc__title">
        Best Solutions for Digital Marketing with CloudXSecure
      </h2>

      {/* TEXT */}
      <p className="dmc__text">
       At Cloudxsecure, we provide result-driven digital marketing services designed to boost your online presence, generate quality leads, and maximize ROI. Whether you're a startup or an established enterprise, CloudX secure helps you build a strong digital footprint through data-driven strategies and innovative marketing techniques.
      </p>

      <p className="dmc__text">
        From search engine optimization (SEO) to social media marketing and paid advertising, CloudxSecure ensures your brand reaches the right audience at the right time. Our expert team combines creativity with analytics to deliver measurable growth and long-term success.
      </p>

      {/* CARDS */}
      <div className="dmc__cards">

        {/* LEFT CARD */}
        <div className="dmc__card">
          <h3>Why Choose CloudXSecure</h3>

          <p>
           At CloudxSecure, we go beyond traditional marketing by combining technology and strategy to deliver powerful results.
          </p>

          <ul className="dmc__list">
            <li><span className="dmc__arrow">→</span> Data-Driven Digital Marketing Strategies</li>
            <li><span className="dmc__arrow">→</span> SEO & Performance Optimization</li>
            <li><span className="dmc__arrow">→</span> Social Media Growth & Brand Awareness</li>
            <li><span className="dmc__arrow">→</span> Secure & Scalable Marketing Infrastructure</li>
            <li><span className="dmc__arrow">→</span> Integrated IT Management Support</li>


          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="dmc__card dmc__card--highlight">
          <img src={iconImg} alt="icon" className="dmc__customIcon" />
          <h3>Empowering Your Success</h3>

          <p>
            Cloudxsecure empowers businesses to grow digitally by leveraging the latest marketing trends and technologies. We create personalized campaigns that align with your business goals and target audience behavior.By integrating CloudXSecure IT management services, we ensure your digital platforms remain secure, fast, and scalable. This means better website performance, improved search rankings, and higher customer engagement.</p>
        </div>

      </div>

      {/* FAQ */}
{/* FAQ */}
<div className="dmc__faq">
  <h2>Frequently Asked Questions</h2>

  {[0, 1, 2].map((item, i) => (
    <div key={i} className="dmc__faqItem">

      <div
        className="dmc__faqHeader"
        onClick={() => toggle(i)}
      >
        <span>
          {i === 0 && "What digital marketing services does CloudXSecure provide?"}
          {i === 1 && "How does Cloudxsecure improve online visibility and SEO rankings?"}
          {i === 2 && "How does CloudX secure integrate IT management with digital marketing?"}
        </span>

        <FiPlus
          className={`dmc__plus ${active === i ? "active" : ""}`}
        />
      </div>

      <div
        className={`dmc__faqBody ${
          active === i ? "open" : ""
        }`}
      >
        <p>
          {i === 0 &&
            "CloudxSecure offers a full range of digital marketing services including SEO, social media marketing, pay-per-click advertising, content marketing, and email campaigns. With CloudX secure, businesses can increase brand visibility, generate qualified leads, and achieve sustainable online growth."}

          {i === 1 &&
            "Cloudxsecure improves online visibility through advanced SEO strategies such as keyword optimization, technical SEO, high-quality content creation, and performance tracking. CloudXSecure ensures your website ranks higher on search engines, drives organic traffic, and delivers measurable results."}

          {i === 2 &&
            "CloudX secure combines IT management with digital marketing by providing secure hosting, fast-loading websites, data protection, and real-time monitoring. CloudxSecure ensures that your marketing platforms remain secure, scalable, and optimized for performance, leading to better user experience and higher conversion rates."}
        </p>
      </div>

    </div>
  ))}
</div>

    </div>
  );
};

export default DigitalMarketingCont;