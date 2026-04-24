import React, { useState } from "react";
import "./BlogList.css";

import { FaEllipsisV, FaCalendarAlt, FaUser } from "react-icons/fa";

const blogsData = [
  {
    id: 1,
    title: "Supervisor Disapproved Of Latest Work.",
    author: "wotech",
    date: "January 5, 2024",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    status: "published",
  },
  {
    id: 2,
    title: "Simplify Streamline Succeed IT Solutions",
    author: "wotech",
    date: "January 5, 2024",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    status: "published",
  },
  {
    id: 3,
    title: "Unlocking Potential Through Technology",
    author: "wotech",
    date: "January 5, 2024",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    status: "unpublished",
  },
];

const BlogList = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [blogs, setBlogs] = useState(blogsData);
  console.log(blogs);
  

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  const handleAction = (id, action) => {
    if (action === "delete") {
      setBlogs(blogs.filter((b) => b.id !== id));
    } else {
      setBlogs(
        blogs.map((b) =>
          b.id === id ? { ...b, status: action } : b
        )
      );
    }
    setOpenMenu(null);
  };

  return (
    <div className="abl">
      <div className="abl__container">
        {blogs.map((blog) => (
          <div className="abl__card" key={blog.id}>

            {/* MENU */}
            <div className="abl__menuWrap">
              <button
                className="abl__menuBtn"
                onClick={() => toggleMenu(blog.id)}
              >
                <FaEllipsisV />
              </button>

              {openMenu === blog.id && (
                <div className="abl__dropdown">
                  <div onClick={() => handleAction(blog.id, "published")}>
                    Publish
                  </div>
                  <div onClick={() => handleAction(blog.id, "unpublished")}>
                    Unpublish
                  </div>
                  <div
                    className="abl__delete"
                    onClick={() => handleAction(blog.id, "delete")}
                  >
                    Delete
                  </div>
                </div>
              )}
            </div>

            {/* IMAGE */}
            <div className="abl__imgWrap">
              <img src={blog.image} alt="blog" />
            </div>

            {/* META */}
            <div className="abl__meta">
              <span><FaUser /> By {blog.author}</span>
              <span><FaCalendarAlt /> {blog.date}</span>
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