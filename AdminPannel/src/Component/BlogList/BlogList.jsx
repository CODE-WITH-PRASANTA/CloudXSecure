import React, { useState } from "react";
import "./BlogList.css";

import { FaEllipsisV, FaCalendarAlt, FaUser } from "react-icons/fa";
import { useEffect } from "react";
import API, { IMAGE_URL } from "../../api/axios";

const BlogList = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [blogs, setBlogs] = useState([]);

  const loadBlogs = async () => {
    try {
      const res = await API.get("/blogs");
      setBlogs(res.data.data || res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  const handleAction = async (id, action) => {
    try {
      if (action === "delete") {
        await API.delete(`/blogs/${id}`);
      } else {
        // publish / unpublish toggle
        await API.put(`/blogs/toggle/${id}`);
      }

      // reload blogs after action
      loadBlogs();
    } catch (error) {
      console.log(error);
    }

    setOpenMenu(null);
  };

  return (
    <div className="abl">
      <div className="abl__container">
        {blogs.map((blog) => (
          <div className="abl__card" key={blog._id}>
            {/* MENU */}
            <div className="abl__menuWrap">
              <button
                className="abl__menuBtn"
                onClick={() => toggleMenu(blog._id)} // ✅ FIX
              >
                <FaEllipsisV />
              </button>

              {openMenu === blog._id && ( // ✅ FIX
                <div className="abl__dropdown">
                  <div onClick={() => handleAction(blog._id, "published")}>
                    {" "}
                    {/* ✅ FIX */}
                    Publish
                  </div>
                  <div onClick={() => handleAction(blog._id, "unpublished")}>
                    {" "}
                    {/* ✅ FIX */}
                    Unpublish
                  </div>
                  <div
                    className="abl__delete"
                    onClick={() => handleAction(blog._id, "delete")} // ✅ FIX
                  >
                    Delete
                  </div>
                </div>
              )}
            </div>

            {/* IMAGE */}
            <div className="abl__imgWrap">
              <img src={`${IMAGE_URL}${blog.image}`} alt="blog" />
            </div>

            {/* META */}
            <div className="abl__meta">
              <span>
                <FaUser /> By {blog.author}
              </span>
              <span>
                <FaCalendarAlt /> {new Date(blog.createdAt).toDateString()}
              </span>
            </div>

            {/* TITLE */}
            <h3 className="abl__title">{blog.title}</h3>

            {/* STATUS */}
            <span
              className={`abl__status ${
                blog.status === "published"
                  ? "abl__status--pub"
                  : "abl__status--unpub"
              }`}
            >
              {blog.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
