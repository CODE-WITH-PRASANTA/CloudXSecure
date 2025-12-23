import React, { memo } from "react";
import "./OurBlog.css";

const OurBlog = memo(() => {
  return (
    <section className="ourblog-section">
      <div className="ourblog-container">
        {/* Header */}
        <header className="ourblog-header">
          <span className="ourblog-badge">
            <span className="ourblog-badge-icon">★</span>
            OUR BLOG
          </span>

          <h2 className="ourblog-title">
            Stay Updated with the <br />
            Latest in IT Solutions
          </h2>
        </header>

        {/* Cards */}
        <div className="ourblog-cards">
          {BLOGS.map((blog, index) => (
            <article className="ourblog-card" key={index}>
              <div className="ourblog-image-wrapper">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="ourblog-image"
                  loading="lazy"
                />
                <div className="ourblog-overlay" />
              </div>

              <div className="ourblog-content">
                <div className="ourblog-meta">
                  <span>📅 {blog.date}</span>
                  <span>👤 {blog.author}</span>
                </div>

                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>

                <button
                  className="ourblog-arrow"
                  aria-label="Read more"
                >
                  ↗
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="ourblog-cta">
          <button>
            Read More Blog And News <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
});

export default OurBlog;

/* Static data (keeps component light) */
const BLOGS = [
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978",
    date: "26 August 2024",
    author: "Alex Roy",
    title:
      "Revolutionize Your Business Operations with Advanced IT Solution Technology",
    desc:
      "Fuel your business success with our custom IT services. We design solutions that are tailored to your specific needs.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    date: "26 August 2024",
    author: "Alex Roy",
    title:
      "Transform Your Business Operations with Tailored IT Solutions Designed",
    desc:
      "Fuel your business success with our custom IT services. We design solutions that are tailored to your specific needs.",
  },
];
