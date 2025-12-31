import React, { useState } from "react";
import "./BlogSection.css";

// BLOG IMAGES
import blog1 from "../../assets/blog-img9.webp";
import blog2 from "../../assets/blog-img8.webp";
import blog3 from "../../assets/blog-img10.webp";
import blog4 from "../../assets/blog-img11.webp";
import blog5 from "../../assets/blog-img12.webp";
import blog6 from "../../assets/blog-img13.webp";
import blog7 from "../../assets/blog-img9.webp";
import blog8 from "../../assets/blog-img10.webp";
import blog9 from "../../assets/blog-img11.webp";
import blog10 from "../../assets/blog-img12.webp";
import blog11 from "../../assets/blog-img13.webp";
import blog12 from "../../assets/blog-img8.webp";

// AUTHOR IMAGES
import author1 from "../../assets/author-img1.webp";
import author2 from "../../assets/author-img2.webp";
import author3 from "../../assets/author-img3.webp";
import author4 from "../../assets/author-img4.webp";
import author5 from "../../assets/author-img5.webp";
import author6 from "../../assets/author-img6.webp";
import author7 from "../../assets/author-img7.webp";
import author8 from "../../assets/author-img8.webp";

const BLOGS = [
  { img: blog1, date: "4 Aug 2024", title: "Scalable IT solutions tailored to unique business needs" },
  { img: blog2, date: "5 Aug 2024", title: "Unlock the full potential of your business with IT" },
  { img: blog3, date: "6 Aug 2024", title: "Optimize your operations with smart IT services" },
  { img: blog4, date: "7 Aug 2024", title: "Unlock the future of your IT with innovation" },
  { img: blog5, date: "8 Aug 2024", title: "Transform business operations using technology" },
  { img: blog6, date: "9 Aug 2024", title: "Empowering enterprises through IT excellence" },
  { img: blog7, date: "10 Aug 2024", title: "Advanced cybersecurity strategies for enterprises" },
  { img: blog8, date: "11 Aug 2024", title: "Cloud solutions that scale with your growth" },
  { img: blog9, date: "12 Aug 2024", title: "Data protection best practices for modern companies" },
  { img: blog10, date: "13 Aug 2024", title: "How IT consulting improves business efficiency" },
  { img: blog11, date: "14 Aug 2024", title: "Managed services that simplify IT operations" },
  { img: blog12, date: "15 Aug 2024", title: "Future-ready IT infrastructure solutions" },
];

const AUTHORS = [
  author1, author2, author3, author4,
  author5, author6, author7, author8,
];

const PER_PAGE = 6;

const BlogSection = () => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(BLOGS.length / PER_PAGE);
  const startIndex = (page - 1) * PER_PAGE;
  const currentBlogs = BLOGS.slice(startIndex, startIndex + PER_PAGE);

  return (
    <section className="blog-wrapper">
      {/* SIDEBAR */}
      <aside className="blog-sidebar">
        <div className="sidebar-box">
          <h4>Search</h4>
          <div className="search-box">
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="sidebar-box">
          <h4>Blog Category</h4>
          {[
            "Cyber Security Solution",
            "Cloud Services",
            "Data Protection",
            "IT Consulting",
            "HelpDesk Solutions",
            "Software Development",
          ].map((cat) => (
            <div className="category-item" key={cat}>
              {cat} <span>›</span>
            </div>
          ))}
        </div>

        <div className="sidebar-box">
          <h4>Popular Tags</h4>
          <div className="tags">
            {[
              "#ITSolutions",
              "#CyberSecurity",
              "#CloudComputing",
              "#BusinessIT",
              "#DataProtection",
              "#TechTrends",
            ].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="sidebar-box">
          <h4>Our Author</h4>
          <div className="authors">
            {AUTHORS.map((img, i) => (
              <img src={img} alt="author" key={i} />
            ))}
          </div>
        </div>
      </aside>

      {/* BLOG CONTENT */}
      <div className="blog-content">
        <div className="blog-grid">
          {currentBlogs.map((blog, i) => (
            <div className="blog-card" key={i}>
              <div className="blog-image">
                <img src={blog.img} alt="" />
              </div>

              <div className="blog-info">
                <span className="date">{blog.date}</span>
                <h3>{blog.title}</h3>
                <a href="/">Learn More ↗</a>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
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
