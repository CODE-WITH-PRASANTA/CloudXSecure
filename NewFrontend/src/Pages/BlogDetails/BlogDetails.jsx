import React from "react";
import "./BlogDetails.css";
import BlogDetailsContent from "../../Component/BlogDetailsContent/BlogDetailsContent";
import BlogDetailsComment from "../../Component/BlogDetailsComment/BlogDetailsComment";
import BlogDetailsSidebar from "../../Component/BlogDetailsSidebar/BlogDetailsSidebar";
import BlogDetailsBD from "../../Component/BlogDetailsBD/BlogDetailsBD";


const BlogDetails = () => {
  return (
    <section className="BlogDetails">
        <BlogDetailsBD/>
      <div className="BlogDetails__container">
        <div className="BlogDetails__grid">
          
          {/* LEFT */}
          <div className="BlogDetails__left">
            <BlogDetailsContent/>
            <BlogDetailsComment/>
          </div>

          {/* RIGHT */}
          <div className="BlogDetails__right">
            <BlogDetailsSidebar/>
          </div> 

        </div>
      </div>
    </section>
  );
};

export default BlogDetails;