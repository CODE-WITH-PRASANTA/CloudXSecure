import React, { useEffect, useState } from "react";
import "./BlogSection.css";
import API, { IMAGE_URL } from "../../api/axios";

const PER_PAGE = 6;

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);

  /* ================= FETCH BLOGS ================= */
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await API.get("/blogs");

      const published =
        res.data.data?.filter(
          (blog) => blog.status?.toLowerCase() === "published"
        ) || [];

      setBlogs(published);
    } catch (err) {
      console.error("BLOG FETCH ERROR:", err);
    }
  };

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(blogs.length / PER_PAGE);
  const startIndex = (page - 1) * PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, startIndex + PER_PAGE);

  return (
    <section className="blog-wrapper">
      {/* SIDEBAR (UNCHANGED DESIGN) */}
      <aside className="blog-sidebar">
        <div className="sidebar-box">
          <h4>Search</h4>
          <div className="search-box">
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="sidebar-box">
          <h4>Blog Category</h4>
          {[...new Set(blogs.map((b) => b.category))].map((cat) => (
            <div className="category-item" key={cat}>
              {cat} <span>›</span>
            </div>
          ))}
        </div>

        <div className="sidebar-box">
          <h4>Popular Tags</h4>
          <div className="tags">
            {[
              ...new Set(
                blogs.flatMap((b) => b.tags || [])
              ),
            ].map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </div>

        <div className="sidebar-box">
          <h4>Our Author</h4>
          <div className="authors">
            {[...new Set(blogs.map((b) => b.author))].map((author) => (
              <div key={author} style={{ fontSize: "14px", marginBottom: "5px" }}>
                {author}
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* BLOG CONTENT */}
      <div className="blog-content">
        <div className="blog-grid">
          {currentBlogs.map((blog) => (
            <div className="blog-card" key={blog._id}>
              <div className="blog-image">
                <img
                  src={`${IMAGE_URL}${blog.image}`}
                  alt=""
                />
              </div>

              <div className="blog-info">
                <span className="date">
                  {blog.createdAt?.slice(0, 10)}
                </span>

                <h3>{blog.title}</h3>

                <a href={`/blog/${blog._id}`}>
                  Learn More ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="pagination">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            ‹
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={page === i + 1 ? "active" : ""}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;