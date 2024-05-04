import React from "react";
import { blogCategories } from "../../constants/categories";
import "./BlogCategoryList.css";

export default function BlogCategoryList() {
  return (
    <div className="blog-category-container">
      {blogCategories?.map((category) => {
        return (
          <button key={category} className="category">
            {category}
          </button>
        );
      })}
    </div>
  );
}
