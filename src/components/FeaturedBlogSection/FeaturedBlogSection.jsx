import React from "react";
import FeaturedBlogCard from "./FeaturedBlogCard/FeaturedBlogCard";
import "./FeaturedBlogSection.css";
import thumbnail1 from "../../assets/images/typewriter-thumbnail.jpg";
import thumbnail2 from "../../assets/images/desk-thumbnail.jpg";

const featuredBlogs = [
  {
    id: "10383fs",
    category: " World",
    title: "Featured Post",
    publishedAt: "2023/10/26",
    desc: `It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout.`,
    thumbnail: thumbnail1,
  },
  {
    id: "245236js",
    category: "Travel",
    title: "Lorem Ipsum",
    publishedAt: "2024/2/14",
    desc: `It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout.`,
    thumbnail: thumbnail2,
  },
];

export default function FeaturedBlogSection() {
  return (
    <div className="featured-blogs-section">
      {featuredBlogs?.map((featuredBlog, index) => {
        return <FeaturedBlogCard key={index} featuredBlog={featuredBlog} />;
      })}
    </div>
  );
}
