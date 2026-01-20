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
      title: "Build Faster and Smarter with Coreai Multipurpose Template",
      author: "John Doe",
      date: "March 15, 2025",
    },
    {
      id: 2,
      image: blogImg2,
      title: "If You Have The Self-Discipline, Start Honing These 4 Habits",
      author: "John Doe",
      date: "March 15, 2025",
    },
    {
      id: 3,
      image: blogImg3,
      title: "This Long-Awaited Technology May Finally Change the World",
      author: "John Doe",
      date: "March 15, 2025",
    },
  ];

  return (
    <section className="bizblog-section">
      <div className="bizblog-container">
        {/* SECTION HEADING */}
        <h2 className="bizblog-heading">
          Insight & Updates, Discover <br />
          <span>Our Blog Articles</span>
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
