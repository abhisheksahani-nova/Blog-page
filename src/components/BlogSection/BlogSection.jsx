import React, { useState } from "react";
import "./BlogSection.css";
import DOMPurify from "dompurify";
import { useBlogContext } from "../../context/blog-context";

export default function BlogSection() {
  const { blogs } = useBlogContext();

  return (
    <div className="blog-section-container">
      {blogs.map(({ id, title, publishedAt, author, content }) => {
        return (
          <div key={id} className="blog-container">
            <h2 className="blog-title"> {title} </h2>
            <p className="blog-date">
              {publishedAt} by <span className="blog-author"> {author} </span>
            </p>

            <div
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
            />
          </div>
        );
      })}
    </div>
  );
}
