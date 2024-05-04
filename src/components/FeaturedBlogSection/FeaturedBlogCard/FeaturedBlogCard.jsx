import React from "react";
import thumbnail from "../../../assets/images/typewriter-thumbnail.jpg";
import "./FeaturedBlogCard.css";

export default function FeaturedBlogCard() {
  return (
    <div className="featured-blogcard-container">
      <div className="featured-blogcard-content-container">
        <p className="featured-blog-category">World</p>
        <h3 className="featured-blog-title">Featured Post</h3>
        <p className="featured-blog-date">Nov 12</p>
        <p className="featured-blog-desc">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
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
