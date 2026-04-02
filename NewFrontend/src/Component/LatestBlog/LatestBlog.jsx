import React from "react";
import "./LatestBlog.css";
import { FiCalendar, FiMessageSquare, FiArrowRight } from "react-icons/fi";

const LatestBlog = () => {
  const latestBlogMainCard = {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    date: "20 June 2024",
    comments: "5 Comments",
    title:
      "How Cloud Computing is Transforming Modern Business Operations",
    description:
      "CloudXsecure helps businesses move to secure and scalable cloud environments that improve performance and reduce infrastructure costs. With the right cloud strategy, companies can streamline operations, enhance data security, and adapt quickly to changing market demands.",
  };

  const latestBlogSideCards = [
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
      date: "18 June 2024",
      comments: "3 Comments",
      title:
        "Best Practices for Secure Web Development in 2024",
      description:
        "Building a secure website is essential for any business. CloudXsecure focuses on modern development practices, optimized performance, and strong security measures to ensure your web applications remain reliable and protected from threats.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
      date: "15 June 2024",
      comments: "4 Comments",
      title:
        "Why DevOps and Automation Are Essential for Business Growth",
      description:
        "DevOps and automation help businesses deliver faster and more reliable services. CloudXsecure enables continuous integration, smooth deployment, and better system management, allowing teams to focus on growth instead of manual processes.",
    },
  ];

  return (
    <section className="latestBlog" id="latest-blog">
      <div className="latestBlog__container">

        {/* TOP SECTION */}
        <div className="latestBlog__top">
          <div className="latestBlog__topLeft">
            <div className="latestBlog__badge">
              <span className="latestBlog__badgeLine"></span>
              <span className="latestBlog__badgeText">
                CLOUDXSECURE BLOG
              </span>
            </div>

            <h2 className="latestBlog__title">
              Insights on Cloud, Web Development <br />
              and <span>Digital Transformation</span>
            </h2>

            {/* MID-LENGTH SEO DESCRIPTION */}
            <p className="latestBlog__desc">
              Stay updated with CloudXsecure insights on cloud computing, web
              development, and modern IT solutions. Our blog shares practical
              knowledge to help businesses improve performance, strengthen
              security, and grow in today’s digital environment.
            </p>
          </div>

          <div className="latestBlog__topRight">
            <button className="latestBlog__viewButton">
              View All Articles
            </button>
            <div className="latestBlog__line"></div>
          </div>
        </div>

        <div className="latestBlog__grid">
          {/* MAIN CARD */}
          <article className="latestBlog__mainCard">
            <div className="latestBlog__mainImageWrap">
              <img
                src={latestBlogMainCard.image}
                alt="CloudXsecure blog on cloud computing and business growth strategies"
                className="latestBlog__mainImage"
              />

              <div className="latestBlog__mainMeta">
                <div className="latestBlog__metaItem">
                  <FiCalendar />
                  <span>{latestBlogMainCard.date}</span>
                </div>

                <span className="latestBlog__metaDivider"></span>

                <div className="latestBlog__metaItem">
                  <FiMessageSquare />
                  <span>{latestBlogMainCard.comments}</span>
                </div>
              </div>
            </div>

            <div className="latestBlog__mainContent">
              <h3 className="latestBlog__mainTitle">
                {latestBlogMainCard.title}
              </h3>

              <p className="latestBlog__mainDescription">
                {latestBlogMainCard.description}
              </p>

              <button className="latestBlog__readMore">
                Read More <FiArrowRight />
              </button>
            </div>
          </article>

          {/* SIDE CARDS */}
          <div className="latestBlog__sideCards">
            {latestBlogSideCards.map((card) => (
              <article key={card.id} className="latestBlog__sideCard">
                <div className="latestBlog__sideImageWrap">
                  <img
                    src={card.image}
                    alt={`${card.title} - CloudXsecure blog`}
                    className="latestBlog__sideImage"
                  />
                </div>

                <div className="latestBlog__sideContent">
                  <div className="latestBlog__sideMeta">
                    <div className="latestBlog__sideMetaItem">
                      <FiCalendar />
                      <span>{card.date}</span>
                    </div>

                    <span className="latestBlog__sideMetaDivider"></span>

                    <div className="latestBlog__sideMetaItem">
                      <FiMessageSquare />
                      <span>{card.comments}</span>
                    </div>
                  </div>

                  <h3 className="latestBlog__sideTitle">
                    {card.title}
                  </h3>

                  <p className="latestBlog__sideDescription">
                    {card.description}
                  </p>

                  <button className="latestBlog__readMore latestBlog__readMore--side">
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