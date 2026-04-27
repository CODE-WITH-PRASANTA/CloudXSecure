import React from "react";
import "./BlogGrid.css";

import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import API, { IMAGE_URL } from "../../api/axios";
import { useNavigate } from "react-router-dom";

const BlogGrid = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  const loadBlogs = async () => {
    try {
      const res = await API.get("/blogs");

      // adjust based on your backend response
      //  public/blogs only show

      const publishedBlogs = res.data.data.filter((blog)=> blog.status === "published");
      setBlogs(publishedBlogs);
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
              <button
                className="blogGrid-btn"
                onClick={() => navigate(`/blogs/${item._id}`)}
              >
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
