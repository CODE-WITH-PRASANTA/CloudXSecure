import React from "react";
import "./BlogGrid.css";

import img1 from "../../assets/blog-grid-1.webp";
import img2 from "../../assets/blog-grid-2.webp";
import img3 from "../../assets/blog-grid-3.webp";
import img4 from "../../assets/blog-grid-4.webp";
import img5 from "../../assets/blog-grid-5.webp";
import img6 from "../../assets/blog-grid-6.webp";

import { FaUser, FaCalendarAlt } from "react-icons/fa";

const blogData = [
  {
    id: 1,
    img: img1,
    title: "Supervisor Disapproved Of Latest Work.",
  },
  {
    id: 2,
    img: img2,
    title: "Simplify Streamline Succeed IT Solutions",
  },
  {
    id: 3,
    img: img3,
    title: "Unlocking Potential Through Technology",
  },
  {
    id: 4,
    img: img4,
    title: "Balancing AI Innovation with Ethical Standards",
  },
  {
    id: 5,
    img: img5,
    title: "UX/UI Designing the Future Web Design",
  },
  {
    id: 6,
    img: img6,
    title: "Your Business Safe & Ensure High Readiness",
  },
];

const BlogGrid = () => {
  return (
    <section className="blogGrid-section">
      <div className="blogGrid-container">

        {blogData.map((item) => (
          <div className="blogGrid-card" key={item.id}>

            {/* IMAGE */}
            <div className="blogGrid-imgWrap">
              <img src={item.img} alt="blog" />
            </div>

            {/* CONTENT */}
            <div className="blogGrid-content">

              {/* META */}
              <div className="blogGrid-meta">
                <span><FaUser /> By wotech</span>
                <span><FaCalendarAlt /> January 5, 2024</span>
              </div>

              {/* TITLE */}
              <h3 className="blogGrid-title">{item.title}</h3>

              {/* BUTTON */}
              <button className="blogGrid-btn">
                Read More →
              </button>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default BlogGrid;