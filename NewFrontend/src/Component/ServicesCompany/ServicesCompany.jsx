import React from "react";
import "./ServicesCompany.css";
import { FiPlus } from "react-icons/fi";
import { HiOutlineCog6Tooth, HiOutlineChartBarSquare } from "react-icons/hi2";
import { TbWorldWww, TbDeviceMobileCode } from "react-icons/tb";
import topShape from "../../assets/service8.png";

const ServicesCompany = () => {
  const servicesCompanyData = [
    {
      id: 1,
      title: "IT Management",
      description: "Marketing repurpose success tech sapien maximus design.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      icon: <HiOutlineCog6Tooth />,
    },
    {
      id: 2,
      title: "Digital Marketing",
      description: "Marketing repurpose success tech sapien maximus design.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      icon: <HiOutlineChartBarSquare />,
    },
    {
      id: 3,
      title: "Web Development",
      description: "Marketing repurpose success tech sapien maximus design.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      icon: <TbWorldWww />,
    },
    {
      id: 4,
      title: "App Development",
      description: "Marketing repurpose success tech sapien maximus design.",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
      icon: <TbDeviceMobileCode />,
    },
  ];

  return (
    <section className="servicesCompany">
      <img
        src={topShape}
        alt="shape"
        className="servicesCompany__topShape"
      />

      <div className="servicesCompany__container">
        <div className="servicesCompany__header">
          <div className="servicesCompany__badge">
            <span className="servicesCompany__badgeLine"></span>
            <span className="servicesCompany__badgeText">SOLUTEK COMPANY</span>
          </div>

          <h2 className="servicesCompany__title">
            How Professional IT Services
            <br />
            Can Drive <span>Success.</span>
          </h2>
        </div>

        <div className="servicesCompany__grid">
          {servicesCompanyData.map((item) => (
            <article key={item.id} className="servicesCompany__card">
              <div className="servicesCompany__imageWrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="servicesCompany__image"
                />
              </div>

              <div className="servicesCompany__content">
                <div className="servicesCompany__icon">{item.icon}</div>

                <h3 className="servicesCompany__cardTitle">{item.title}</h3>

                <p className="servicesCompany__description">{item.description}</p>

                <div className="servicesCompany__footer">
                  <button type="button" className="servicesCompany__readMore">
                    <span className="servicesCompany__readMoreCircle">
                      <FiPlus />
                    </span>
                    <span className="servicesCompany__readMoreText">
                      READ MORE
                    </span>
                  </button>

                  <div className="servicesCompany__dots">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
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

export default ServicesCompany;