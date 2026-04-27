import React from "react";
import "./BlogGrid.css";

import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import API, { IMAGE_URL } from "../../api/axios";

const BlogGrid = () => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs[1]);
  const loadBlogs = async () => {
    try {
      const res = await API.get("/blogs");

      // adjust based on your backend response
      setBlogs(res.data.data || res.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  return (
    <section className="blogGrid-section">
      <div className="blogGrid-container">
        {blogs.map((item) => (
          <div className="blogGrid-card" key={item._id}>
            {/* IMAGE */}
            <div className="blogGrid-imgWrap">
              <img src={`${IMAGE_URL}${item.image}`} alt="blog" />
            </div>

            {/* CONTENT */}
            <div className="blogGrid-content">
              {/* META */}
              <div className="blogGrid-meta">
                <span>
                  <FaUser /> By {item.author || "Admin"}
                </span>
                <span>
                  <FaCalendarAlt /> {new Date(item.createdAt).toDateString()}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="blogGrid-title">{item.title}</h3>

              {/* BUTTON */}
              <button className="blogGrid-btn">Read More →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogGrid;
