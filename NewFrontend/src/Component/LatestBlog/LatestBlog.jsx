import React, { useEffect, useState } from "react";
import "./LatestBlog.css";
import { FiCalendar, FiArrowRight } from "react-icons/fi";
import API, { IMAGE_URL } from "../../api/axios";
import { useNavigate } from "react-router-dom";

const LatestBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const loadBlogs = async () => {
    try {
      const res = await API.get("/blogs");

      const data = (res.data.data || res.data)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 3);

      setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const mainBlog = blogs[0];
  const sideBlogs = blogs.slice(1);

  if (!blogs.length) return <p>Loading blogs...</p>;

  return (
    <section className="latestBlog" id="latest-blog">
      <div className="latestBlog__container">

        {/* TOP SECTION */}
        <div className="latestBlog__top">
          <div className="latestBlog__topLeft">
            <div className="latestBlog__badge">
              <span className="latestBlog__badgeLine"></span>
              <span className="latestBlog__badgeText">BLOG</span>
            </div>

            <h2 className="latestBlog__title">
              Latest <span>Articles</span>
            </h2>

            <p className="latestBlog__desc">
              Read our latest blogs and insights about technology, development,
              and digital solutions.
            </p>
          </div>

          <div className="latestBlog__topRight">
            <button
              className="latestBlog__viewButton"
              onClick={() => navigate("/blog")}
            >
              View All Articles
            </button>
            <div className="latestBlog__line"></div>
          </div>
        </div>

        <div className="latestBlog__grid">

          {/* 🔥 MAIN CARD */}
          {mainBlog && (
            <article className="latestBlog__mainCard">
              <div className="latestBlog__mainImageWrap">
                <img
                  src={`${IMAGE_URL}${mainBlog.image}`}
                  alt={mainBlog.title}
                  className="latestBlog__mainImage"
                />

                <div className="latestBlog__mainMeta">
                  <div className="latestBlog__metaItem">
                    <FiCalendar />
                    <span>
                      {new Date(mainBlog.createdAt).toDateString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="latestBlog__mainContent">
                <h3 className="latestBlog__mainTitle">
                  {mainBlog.title}
                </h3>

                <p className="latestBlog__mainDescription">
                  {mainBlog.content
                    ?.replace(/<[^>]+>/g, "")
                    .slice(0, 120)}...
                </p>

                <button
                  className="latestBlog__readMore"
                  onClick={() => navigate(`/blogs/${mainBlog._id}`)}
                >
                  Read More <FiArrowRight />
                </button>
              </div>
            </article>
          )}

          {/* 🔥 SIDE CARDS */}
          <div className="latestBlog__sideCards">
            {sideBlogs.map((blog) => (
              <article key={blog._id} className="latestBlog__sideCard">
                <div className="latestBlog__sideImageWrap">
                  <img
                    src={`${IMAGE_URL}${blog.image}`}
                    alt={blog.title}
                    className="latestBlog__sideImage"
                  />
                </div>

                <div className="latestBlog__sideContent">
                  <div className="latestBlog__sideMeta">
                    <div className="latestBlog__sideMetaItem">
                      <FiCalendar />
                      <span>
                        {new Date(blog.createdAt).toDateString()}
                      </span>
                    </div>
                  </div>

                  <h3 className="latestBlog__sideTitle">
                    {blog.title}
                  </h3>

                  <p className="latestBlog__sideDescription">
                    {blog.content
                      ?.replace(/<[^>]+>/g, "")
                      .slice(0, 80)}...
                  </p>

                  <button
                    className="latestBlog__readMore latestBlog__readMore--side"
                    onClick={() => navigate(`/blog/${blog._id}`)}
                  >
                    Read More <FiArrowRight />
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LatestBlog;