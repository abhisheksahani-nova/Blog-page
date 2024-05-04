import React from "react";
import "./FeaturedBlogCard.css";

export default function FeaturedBlogCard({ featuredBlog }) {
  const { title, desc, category, publishedAt, thumbnail } = featuredBlog;

  return (
    <div className="featured-blogcard-container">
      <div className="featured-blogcard-content-container">
        <p className="featured-blog-category"> {category} </p>
        <h3 className="featured-blog-title"> {title} </h3>
        <p className="featured-blog-date"> {publishedAt} </p>
        <p className="featured-blog-desc">{desc}</p>
        <button className="featured-blog-readmore-link">
          Continue reading
        </button>
      </div>

      <div className="featured-blog-thumbnail-container">
        <img
          className="featured-blog-thumbnail"
          src={thumbnail}
          alt="featured blog thumbnail"
        />
      </div>
    </div>
  );
}
