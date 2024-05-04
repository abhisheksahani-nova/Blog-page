import React from "react";
import "./BlogSection.css";
import DOMPurify from "dompurify";
import { useBlogContext } from "../../context/blog-context";
import { useSort, applySort } from "../../reducer/sortReducer";

export default function BlogSection() {
  const { blogs } = useBlogContext();

  const { state, dispatch } = useSort();

  const sortedBlogs = applySort(state, blogs);

  return (
    <div className="blog-section-container">
      {sortedBlogs?.map(({ title, publishedAt, author, content }, index) => {
        return (
          <div key={index} className="blog-container">
            <h2 className="blog-title"> {title} </h2>
            <p className="blog-date">
              {publishedAt} by <span className="blog-author"> {author} </span>
            </p>

            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(content),
              }}
            />
          </div>
        );
      })}

      <div className="blogs-sort-btn-container">
        <button
          className={`sort-btn ${
            state.sortBy === "Newer" ? "active-btn" : null
          } `}
          onClick={() => {
            dispatch({ type: "SORT_BY_NEWER" });
          }}
        >
          Newer
        </button>

        <button
          className={`sort-btn ${
            state.sortBy === "Older" ? "active-btn" : null
          } `}
          onClick={() => {
            dispatch({ type: "SORT_BY_OLDER" });
          }}
        >
          Older
        </button>
      </div>
    </div>
  );
}
