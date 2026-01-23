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
    category: "Development",
    title: "Meet AutoManage, the best AI management tools",
    desc: "Everything You Need To Start Building Area Atching Presence For Your Business.",
  },
  {
    img: blogImg2,
    date: "25",
    month: "Jan",
    category: "Development",
    title: "Meet AutoManage, the best AI management tools",
    desc: "Everything You Need To Start Building Area Atching Presence For Your Business.",
  },
  {
    img: blogImg3,
    date: "25",
    month: "Jan",
    category: "Development",
    title: "Meet AutoManage, the best AI management tools",
    desc: "Everything You Need To Start Building Area Atching Presence For Your Business.",
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
          <h2>Read Our Latest Updates</h2>
          <p>
            Ever Find Yourself Staring At Your Computer Screen A Good Consulting
            Slogan To Come To Mind? Oftentimes.
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
