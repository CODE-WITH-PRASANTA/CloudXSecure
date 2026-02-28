import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OurBlog.css";
import API, { IMAGE_URL } from "../../api/axios";

const OurBlog = memo(() => {
  const [BLOGS, setBLOGS] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await API.get("/blogs");
      const blogs = res.data.data || [];

      // Filter only published blogs
      const publishedBlogs = blogs.filter(
        (blog) => blog.status === "published"
      );

      // Sort latest first and take only 2
      const latestTwo = publishedBlogs
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 2);

      setBLOGS(latestTwo);
    } catch (err) {
      console.error("FETCH BLOG ERROR:", err);
    }
  };

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
          {BLOGS.map((blog) => (
            <article className="ourblog-card" key={blog._id}>
              <div className="ourblog-image-wrapper">
                <img
                  src={
                    blog.image
                      ? `${IMAGE_URL}${blog.image}`
                      : "https://via.placeholder.com/600x400"
                  }
                  alt={blog.title}
                  className="ourblog-image"
                  loading="lazy"
                />
                <div className="ourblog-overlay" />
              </div>

              <div className="ourblog-content">
                <div className="ourblog-meta">
                  <span>
                    📅{" "}
                    {blog.createdAt
                      ? new Date(blog.createdAt).toLocaleDateString()
                      : ""}
                  </span>
                  <span>👤 {blog.author || "Admin"}</span>
                </div>

                <h3>{blog.title}</h3>
                <p>
                  {blog.content
                    ?.replace(/<[^>]+>/g, "")
                    .slice(0, 120)}
                  ...
                </p>

                <button
                  className="ourblog-arrow"
                  aria-label="Read more"
                  onClick={() => navigate(`/blogs/${blog._id}`)}
                >
                  ↗
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="ourblog-cta">
          <button onClick={() => navigate("/blogs")}>
            Read More Blog And News <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
});

export default OurBlog;