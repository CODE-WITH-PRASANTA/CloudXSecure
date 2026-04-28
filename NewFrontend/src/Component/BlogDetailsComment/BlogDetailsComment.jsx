import React, { useState } from "react";
import "./BlogDetailsComment.css";
import avatar1 from "../../assets/testi-2.webp";
import avatar2 from "../../assets/testi-1.webp";

const BlogDetailsComment = () => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [replyText, setReplyText] = useState("");
  const [activeReply, setActiveReply] = useState(null);

  // ADD COMMENT
  const addComment = () => {
    if (!text.trim()) return;

    const newComment = {
      name: "User",
      date: new Date().toDateString(),
      text,
      replies: [],
    };

    setComments((prev) => [newComment, ...prev]);
    setText("");
  };

  // ADD REPLY
  const addReply = (index) => {
    if (!replyText.trim()) return;

    const updated = [...comments];
    updated[index].replies.push({
      name: "Author",
      date: new Date().toDateString(),
      text: replyText,
    });

    setComments(updated);
    setReplyText("");
    setActiveReply(null);
  };

  return (
    <div className="bdcmt">
      <div className="bdcmt__container">

        <h2 className="bdcmt__title">{comments.length} Comments</h2>

        {comments.length === 0 && (
          <p className="bdcmt__empty">No comments yet</p>
        )}

        {comments.map((c, i) => (
          <div key={i} className="bdcmt__comment">

            <div className="bdcmt__commentTop">
              <div className="bdcmt__left">
                <img src={avatar1} alt="user" />
                <div>
                  <h4>{c.name}</h4>
                  <span>{c.date}</span>
                </div>
              </div>

              <button
                className="bdcmt__replyBtn"
                onClick={() =>
                  setActiveReply(activeReply === i ? null : i)
                }
              >
                Reply
              </button>
            </div>

            <p className="bdcmt__text">{c.text}</p>

            {/* REPLIES */}
            {c.replies.map((r, idx) => (
              <div key={idx} className="bdcmt__comment bdcmt__comment--nested">
                <div className="bdcmt__left">
                  <img src={avatar2} alt="user" />
                  <div>
                    <h4>{r.name}</h4>
                    <span>{r.date}</span>
                  </div>
                </div>
                <p className="bdcmt__text">{r.text}</p>
              </div>
            ))}

            {/* REPLY BOX */}
            {activeReply === i && (
              <div className="bdcmt__replyBox">
                <input
                  type="text"
                  placeholder="Write reply..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
                <button onClick={() => addReply(i)}>Post</button>
              </div>
            )}
          </div>
        ))}

        {/* COMMENT FORM */}
        <div className="bdcmt__formWrapper">
          <h3>Leave a Comment</h3>

          <textarea
            rows="5"
            placeholder="Write your comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <button onClick={addComment} className="bdcmt__submit">
            Post Comment
          </button>
        </div>

      </div>
    </div>
  );
};

export default BlogDetailsComment;