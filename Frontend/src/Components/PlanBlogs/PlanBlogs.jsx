import React from "react";
import "./PlanBlogs.css";

// IMPORT YOUR IMAGES
import blogImg1 from "../../assets/blog-1.webp";
import blogImg2 from "../../assets/blog-2.webp";
import blogImg3 from "../../assets/blog-3.webp";

const BizBlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: blogImg1,
      title: "Cybersecurity Best Practices Every Business Should Follow in 2026",
      author: "Jane Doe",
      date: "Jan 05, 2026",
    },
    {
      id: 2,
      image: blogImg2,
      title: "Why Professional Web Design Matters for Business Growth",
      author: "John Doe",
      date: "Jan 15, 2026",
    },
    {
      id: 3,
      image: blogImg3,
      title: "Building Scalable Cloud-Based Applications for the Future",
      author: "CloudXSecure Team",
      date: "Jan 25, 2026",
    },
  ];

  return (
    <section className="bizblog-section">
      <div className="bizblog-container">
        {/* SECTION HEADING */}
        <h2 className="bizblog-heading">
          CloudXSecure Insights: <br />
          <span>Cloud, Security & Digital Solutions</span>
        </h2>

        {/* BLOG CARDS */}
        <div className="bizblog-grid">
          {blogs.map((blog) => (
            <div className="bizblog-card" key={blog.id}>
              <div className="bizblog-content">
                {/* IMAGE */}
                <div className="bizblog-image-wrapper">
                  <img src={blog.image} alt={blog.title} />
                </div>

                {/* META */}
                <div className="bizblog-meta">
                  <span>By {blog.author}</span>
                  <span className="bizblog-dot"></span>
                  <span>{blog.date}</span>
                </div>

                {/* TITLE */}
                <h3 className="bizblog-title">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BizBlogSection;
