import React from "react";
import "./ServicesMember.css";

const ServicesMember = () => {
  const servicesMemberData = [
    {
      id: 1,
      name: "Cameron William",
      role: "UI/UX DESIGNER",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      name: "Sophia Carter",
      role: "WEB DEVELOPER",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      name: "Emma Watson",
      role: "MARKETING EXPERT",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      name: "Daniel Robert",
      role: "APP DESIGNER",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="servicesMember">
      <div className="servicesMember__container">
        <div className="servicesMember__header">
          <div className="servicesMember__badge">
            <span className="servicesMember__badgeLine"></span>
            <span className="servicesMember__badgeText">OUR TEAM MEMBER</span>
          </div>

          <h2 className="servicesMember__title">Dedicated Team Members</h2>
        </div>

        <div className="servicesMember__grid">
          {servicesMemberData.map((item) => (
            <article key={item.id} className="servicesMember__card">
              <div className="servicesMember__imageWrap">
                <div className="servicesMember__topLine">
                  <span className="servicesMember__topLineOrange"></span>
                  <span className="servicesMember__topLineNavy"></span>
                </div>

                <img
                  src={item.image}
                  alt={item.name}
                  className="servicesMember__image"
                />

                <div className="servicesMember__overlay">
                  <div className="servicesMember__overlayDark"></div>

                  <div className="servicesMember__overlayOrange">
                    <h3 className="servicesMember__name">{item.name}</h3>
                    <p className="servicesMember__role">{item.role}</p>
                  </div>

                  <div className="servicesMember__overlaySocial">
                    <a href="/" className="servicesMember__socialLink">
                      FACEBOOK
                    </a>
                    <a href="/" className="servicesMember__socialLink">
                      TWITTER
                    </a>
                    <a
                      href="/"
                      className="servicesMember__socialLink servicesMember__socialLink--active"
                    >
                      BEHANCE
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesMember;