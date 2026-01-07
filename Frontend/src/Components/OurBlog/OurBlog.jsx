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
            Latest Insights on Cloud, Web & App Solutions
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
      "How Cloud Solutions Are Transforming Modern Business Operations",
    desc:
      "Discover how secure and scalable cloud services help businesses improve efficiency, reduce operational costs, and accelerate digital transformation through modern cloud infrastructure and automation.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    date: "26 August 2024",
    author: "Alex Roy",
    title:
      "Why Modern Web Design Is Critical for Business Growth in 2024",
    desc:
      "Learn how professional web design and development improves user experience, boosts SEO rankings, and increases conversions with fast, responsive, and secure websites.",
  },
];
