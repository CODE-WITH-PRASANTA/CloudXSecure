import React from "react";
import "./ConsultBlogSection.css";

import blogImg1 from "../../assets/const-blog_img01.webp";
import blogImg2 from "../../assets/const-blog_img02.webp";
import blogImg3 from "../../assets/const-blog_img03.webp";

const blogData = [
  {
    img: blogImg1,
    date: "25",
    month: "Jan",
    category: "Cloud Services",
    title: "Secure Cloud Solutions for Modern Businesses",
    desc: "Discover how CloudXSecure delivers scalable cloud infrastructure, data security, and performance-driven cloud services to help businesses grow faster and smarter.",
  },
  {
    img: blogImg2,
    date: "25",
    month: "Jan",
    category: "Web & App Development",
    title: "Build High-Performance Websites & Mobile Apps",
    desc: "Learn how our expert team designs responsive websites and powerful mobile apps that improve user experience, boost conversions, and strengthen your digital presence.",
  },
  {
    img: blogImg3,
    date: "25",
    month: "Jan",
    category: "Managed Cloud Solutions",
    title: "Complete Cloud Management for Business Success",
    desc: "Explore CloudXSecure’s end-to-end cloud solutions including DevOps, monitoring, maintenance, and 24/7 support—so you can focus on scaling your business.",
  },
];

const BlogSection = () => {
  return (
    <section className="gerow-blog-section">
      {/* Background Overlay */}
      <div className="gerow-blog-bg-overlay"></div>

      <div className="gerow-blog-container">
        {/* Header */}
        <div className="gerow-blog-header">
          <span className="gerow-blog-subtitle">NEWS BLOGS</span>
          <h2>Latest Insights on Cloud, Web & App Solutions</h2>
          <p>
            CloudXSecure shares quick insights on cloud services, web design, app development, and secure cloud solutions—helping businesses stay modern, scalable, and protected in today’s digital world.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="gerow-blog-grid">
          {blogData.map((item, index) => (
            <div className="gerow-blog-card" key={index}>
              <div className="gerow-blog-img-wrap">
                <img src={item.img} alt="blog" />

                {/* Date Badge */}
                <div className="gerow-blog-date">
                  <span>{item.date}</span>
                  <small>{item.month}</small>
                </div>
              </div>

              <div className="gerow-blog-content">
                <span className="gerow-blog-category">
                  {item.category}
                </span>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <a href="#" className="gerow-blog-readmore">
                  READ MORE <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
