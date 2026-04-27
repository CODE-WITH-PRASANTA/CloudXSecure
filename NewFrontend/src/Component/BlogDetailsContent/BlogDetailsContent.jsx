import React from "react";
import "./BlogDetailsContent.css";
import { useEffect, useState } from "react";
import API, { IMAGE_URL } from "../../api/axios";
import { useParams } from "react-router-dom";

// IMPORT IMAGES
import heroImg from "../../assets/blog-thu.webp";
import img1 from "../../assets/blog-thu2.webp";
import img2 from "../../assets/blog-thu3.webp";

// ICONS
import { FaCalendarAlt, FaFolderOpen } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const BlogDetailsContent = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const loadBlog = async () => {
    try {
      const res = await API.get(`/blogs/${id}`);
      setBlog(res.data.data || res.data);
      // console.log(res.data.data);
    } catch (error) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadBlog();
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="bdc">
      <div className="bdc__container">
        {/* HERO IMAGE */}
        <div className="bdc__hero">
          <img src={`${IMAGE_URL}${blog.image}`} alt="blog" />
        </div>

        {/* CONTENT CARD */}
        <div className="bdc__card">
          {/* META */}
          <div className="bdc__meta">
            <span className="bdc__metaItem">
              <span className="bdc__line"></span> By {blog.author || "Admin"}
            </span>

            <span className="bdc__metaItem">
              <FaCalendarAlt /> {new Date(blog.createdAt).toDateString()}
            </span>

            <span className="bdc__metaItem">
              <FaFolderOpen /> {blog.category || "General"}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="bdc__title">{blog.title}</h1>

          {/* ✅ MAIN CONTENT (HTML RENDER) */}
          <div
            className="bdc__text"
            dangerouslySetInnerHTML={{
              __html: blog.content || "<p>No content available</p>",
            }}
          />

          {/* ✅ QUOTE */}
          {blog.quotes && (
            <div className="bdc__quote">
              <p>“ {blog.quotes} ”</p>
              <span>{blog.author}</span>
            </div>
          )}

          {/* ✅ OPTIONAL STATIC SECTION (you can remove if not needed) */}
          <h2 className="bdc__subtitle">Additional Insights</h2>

          <p className="bdc__text">
            This section can be used for extra static or dynamic content like
            recommendations, summaries, or related explanations.
          </p>

          {/* ✅ TAGS */}
          <div className="bdc__footer">
            <div className="bdc__tags">
              {blog.tags?.length > 0 ? (
                blog.tags.map((tag, i) => <span key={i}>{tag}</span>)
              ) : (
                <span>No Tags</span>
              )}
            </div>

            {/* SOCIAL */}
            <div className="bdc__social">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsContent;
