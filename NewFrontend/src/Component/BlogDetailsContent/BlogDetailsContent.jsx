import React from "react";
import "./BlogDetailsContent.css";

// IMPORT IMAGES
import heroImg from "../../assets/blog-thu.webp";
import img1 from "../../assets/blog-thu2.webp";
import img2 from "../../assets/blog-thu3.webp";

// ICONS
import { FaCalendarAlt, FaFolderOpen } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const BlogDetailsContent = () => {
  return (
    <div className="bdc">
      <div className="bdc__container">

        {/* HERO IMAGE */}
        <div className="bdc__hero">
          <img src={heroImg} alt="blog" />
        </div>

        {/* CONTENT CARD */}
        <div className="bdc__card">

          {/* META */}
          <div className="bdc__meta">
            <span className="bdc__metaItem">
              <span className="bdc__line"></span> By Author
            </span>

            <span className="bdc__metaItem">
              <FaCalendarAlt /> 05 January, 2024
            </span>

            <span className="bdc__metaItem">
              <FaFolderOpen /> IT Solutions
            </span>
          </div>

          {/* TITLE */}
          <h1 className="bdc__title">
            Solution This Business For is Marketing Blog
          </h1>

          {/* TEXT */}
          <p className="bdc__text">
            Alternative innovation to ethical network environmental whiteboard
            pursue compelling results for methods empowerment. Dramatically
            architect go forward opportunities before user-centric Credibly
            implement exceptional
          </p>

          <p className="bdc__text">
            Continually fashion orthogonal leadership skills whereas wireless
            metrics. Uniquely syndicate exce opportunities with interdependent
            users. Globally enhance fully tested meta-services rather than
            solutions. Proactively integrate client-integrate go forward
            architectures and turnkey meta Interactively harness integrated ROI
            whereas frictionless products.
          </p>

          {/* QUOTE */}
          <div className="bdc__quote">
            <p>
              “ Competently architect intermandated deliverables client with
              niches continually underwhelm build cross-media growth strategies
              without robust.”
            </p>
            <span>CEO & Founder</span>
          </div>

          {/* SECTION */}
          <h2 className="bdc__subtitle">
            Our Begin Now To Beingonl
          </h2>

          <p className="bdc__text">
            Dynamically optimize leading-edge value via pandemic manufactured
            products. Conveniently seize sticky growth strategies and ethical
            potentialities. Professionally create high-quality rather than
            intuitive portals.
          </p>

          {/* CHECK LIST */}
          <div className="bdc__list">
            <div><BsCheckCircleFill /> Innovate wireless market</div>
            <div><BsCheckCircleFill /> Productivate resource sucking</div>
            <div><BsCheckCircleFill /> Proactively unleash oriented communities</div>
            <div><BsCheckCircleFill /> Credibly develop progressive archi</div>
          </div>

          {/* IMAGE GRID */}
          <div className="bdc__imageGrid">
            <img src={img1} alt="img1" />
            <img src={img2} alt="img2" />
          </div>

          {/* FINAL TEXT */}
          <h2 className="bdc__subtitle">
            Arcu At Mauris Facilisis Fermentum
          </h2>

          <p className="bdc__text">
            Progressively target highly efficient business for distributed
            interfaces. Globally evisculate pand networks rather than viral
            collaboration and idea-sharing. Continually utilize turnkey networks
            via productize intuitive information whereas
          </p>

          {/* FOOTER */}
          <div className="bdc__footer">
            <div className="bdc__tags">
              <span>Digital Marketing</span>
              <span>Development</span>
            </div>

            <div className="bdc__social">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogDetailsContent;