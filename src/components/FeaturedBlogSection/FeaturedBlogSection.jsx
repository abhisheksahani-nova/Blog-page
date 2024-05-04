import React from "react";
import FeaturedBlogCard from "./FeaturedBlogCard/FeaturedBlogCard";
import "./FeaturedBlogSection.css";

export default function FeaturedBlogSection() {
  return (
    <div className="featured-blogs-section">
      <FeaturedBlogCard />
      <FeaturedBlogCard />
    </div>
  );
}
