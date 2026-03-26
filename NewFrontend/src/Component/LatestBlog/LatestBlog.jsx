import React from "react";
import "./LatestBlog.css";
import { FiCalendar, FiMessageSquare, FiArrowRight } from "react-icons/fi";

const LatestBlog = () => {
  const latestBlogMainCard = {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    date: "20 June 2024",
    comments: "Comment-05",
    title: "Leveraging Descriptive Solutions for Business Growth.",
    description:
      "Appropriately promote enterprise-wide vortals throuh in information without equity best revolutioniz enterprise-wide vortals throuh.",
  };

  const latestBlogSideCards = [
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
      date: "20 June 2024",
      comments: "Comment-05",
      title: "How to Create Modern Web Site For Your Business..",
      description:
        "Appropriatel promote enterprise-wide vortals throuh in information without equity best revolutioniz",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
      date: "20 June 2024",
      comments: "Comment-05",
      title: "How to Create Modern Web Site For Your Business..",
      description:
        "Appropriatel promote enterprise-wide vortals throuh in information without equity best revolutioniz",
    },
  ];

  return (
    <section className="latestBlog">
      <div className="latestBlog__container">
        <div className="latestBlog__top">
          <div className="latestBlog__topLeft">
            <div className="latestBlog__badge">
              <span className="latestBlog__badgeLine"></span>
              <span className="latestBlog__badgeText">OUR LATEST BLOG</span>
            </div>

            <h2 className="latestBlog__title">
              Exploring Its Potential in
              <br />
              Various <span>Industries.</span>
            </h2>
          </div>

          <div className="latestBlog__topRight">
            <button className="latestBlog__viewButton">VIEW ALL POST</button>
            <div className="latestBlog__line"></div>
          </div>
        </div>

        <div className="latestBlog__grid">
          {/* Left Main Card */}
          <article className="latestBlog__mainCard">
            <div className="latestBlog__mainImageWrap">
              <img
                src={latestBlogMainCard.image}
                alt={latestBlogMainCard.title}
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
                READ MORE <FiArrowRight />
              </button>
            </div>
          </article>

          {/* Right Side Cards */}
          <div className="latestBlog__sideCards">
            {latestBlogSideCards.map((card) => (
              <article key={card.id} className="latestBlog__sideCard">
                <div className="latestBlog__sideImageWrap">
                  <img
                    src={card.image}
                    alt={card.title}
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

                  <h3 className="latestBlog__sideTitle">{card.title}</h3>

                  <p className="latestBlog__sideDescription">
                    {card.description}
                  </p>

                  <button className="latestBlog__readMore latestBlog__readMore--side">
                    READ MORE <FiArrowRight />
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