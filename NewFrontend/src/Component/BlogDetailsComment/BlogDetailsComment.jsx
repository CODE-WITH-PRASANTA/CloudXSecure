import React from "react";
import "./BlogDetailsComment.css";

// IMPORT AVATARS
import avatar1 from "../../assets/testi-2.webp";
import avatar2 from "../../assets/testi-1.webp";

const BlogDetailsComment = () => {
  return (
    <div className="bdcmt">
      <div className="bdcmt__container">

        {/* COMMENTS COUNT */}
        <h2 className="bdcmt__title">2 Comments</h2>

        {/* COMMENT 1 */}
        <div className="bdcmt__comment">
          <div className="bdcmt__commentTop">

            <div className="bdcmt__left">
              <img src={avatar1} alt="user" />
              <div>
                <h4>Maria Manda</h4>
                <span>22 August, 2024</span>
              </div>
            </div>

            <button className="bdcmt__replyBtn">Reply</button>
          </div>

          <p className="bdcmt__text">
            Interactively visualize top-line internal or organic sources rather
            than top-line niche mark unleash 24/7 opportunities after high
            standards in process improvements. Uniquely deploy methodologies
            with reliable information.
          </p>

          {/* NESTED COMMENT */}
          <div className="bdcmt__comment bdcmt__comment--nested">
            <div className="bdcmt__commentTop">

              <div className="bdcmt__left">
                <img src={avatar2} alt="user" />
                <div>
                  <h4>Johon Alex</h4>
                  <span>22 August, 2024</span>
                </div>
              </div>

              <button className="bdcmt__replyBtn">Reply</button>
            </div>

            <p className="bdcmt__text">
              Interactively visualize top-line internal or organic sources rather
              than top-line niche mark unleash 24/7 opportunities after high
              standards in process.
            </p>
          </div>

        </div>

        {/* FORM */}
        {/* <div className="bdcmt__formWrapper">
          <h3 className="bdcmt__formTitle">Leave A Comments</h3>

          <form className="bdcmt__form">
            <div className="bdcmt__row">
              <input type="text" placeholder="Full Name*" />
              <input type="email" placeholder="Email Address*" />
            </div>

            <input
              type="text"
              placeholder="Your Website*"
              className="bdcmt__full"
            />

            <textarea
              placeholder="Write Comments..."
              rows="6"
            ></textarea>

            <div className="bdcmt__checkbox">
              <input type="checkbox" />
              <span>
                Save your email info in the browser for next comments.
              </span>
            </div>

            <button type="submit" className="bdcmt__submit">
              POST COMMENTS
            </button>
          </form>
        </div> */}

      </div>
    </div>
  );
};

export default BlogDetailsComment;