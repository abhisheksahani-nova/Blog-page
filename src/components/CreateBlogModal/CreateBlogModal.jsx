import React, { useState } from "react";
import "./CreateBlogModal.css";
import closeIcon from "../../assets/icons/close.png";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useBlogContext } from "../../context/blog-context";
import { v4 as uuidv4 } from "uuid";
import { getCurrentDate } from "../../utils";

export default function CreateBlogModal({ isOpen, onClose }) {
  const [newBlogData, setNewBlogData] = useState({
    id: uuidv4(),
    author: "",
    title: "",
    content: "",
    category: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
  });

  const { setBlogs } = useBlogContext();

  const checkBlogDataValidity = () => {
    const blogData = newBlogData;
    const { author, title, content, category } = blogData;

    let regex = /^[A-Za-z]+$/;
    let isValid = true;

    if (!author.trim()) {
      setErrors((errors) => ({
        ...errors,
        author: "Author is required",
      }));
      isValid = false;
    } else if (!regex.test(author)) {
      setErrors((errors) => ({
        ...errors,
        author: "Name is invalid",
      }));
      isValid = false;
    }

    if (!title.trim()) {
      setErrors((errors) => ({
        ...errors,
        title: "Title is required",
      }));
      isValid = false;
    }

    if (!content.trim()) {
      setErrors((errors) => ({
        ...errors,
        content: "Content is required",
      }));
      isValid = false;
    }

    if (!category.trim()) {
      setErrors((errors) => ({
        ...errors,
        category: "Category is required",
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = checkBlogDataValidity();
    const publishedAt = getCurrentDate();

    if (isValid) {
      setBlogs((prev) => [...prev, { ...newBlogData, publishedAt }]);
      setNewBlogData({
        id: uuidv4(),
        author: "",
        title: "",
        content: "",
        category: "",
      });

      onClose();
    }
  };

  const handleContentChange = (content) => {
    setErrors((errors) => ({ ...errors, content: "" }));
    setNewBlogData((prev) => ({ ...prev, content: content }));
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2 className="modal-heading">Create new blog</h2>
              <img
                className="modal-close-icon"
                src={closeIcon}
                onClick={onClose}
                alt="modal close icon"
              />
            </div>

            <form onSubmit={handleSubmit} className="blog-form">
              <div className="input-wrapper">
                <label className="label" htmlFor="title">
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  value={newBlogData.title}
                  placeholder="Enter blog title"
                  className="form-input"
                  onChange={(event) => {
                    setErrors((errors) => ({ ...errors, title: "" }));

                    setNewBlogData((prev) => ({
                      ...prev,
                      title: event.target.value,
                    }));
                  }}
                />
                {errors.title && (
                  <span className="error-message"> {errors.title} </span>
                )}
              </div>

              <div className="input-wrapper">
                <label className="label" htmlFor="content">
                  Content:
                </label>
                <ReactQuill
                  theme="snow"
                  value={newBlogData.content}
                  onChange={handleContentChange}
                  id="content"
                  className="content-editor"
                  placeholder="Enter blog content here..."
                />
                {errors.content && (
                  <span className="error-message"> {errors.content} </span>
                )}
              </div>

              <div className="input-wrapper">
                <label className="label" htmlFor="author">
                  Author:
                </label>
                <input
                  type="text"
                  id="author"
                  value={newBlogData.author}
                  placeholder="Enter author name"
                  className="form-input"
                  onChange={(event) => {
                    setErrors((errors) => ({ ...errors, author: "" }));
                    setNewBlogData((prev) => ({
                      ...prev,
                      author: event.target.value,
                    }));
                  }}
                />
                {errors.author && (
                  <span className="error-message"> {errors.author} </span>
                )}
              </div>

              <div className="input-wrapper">
                <label className="label" htmlFor="category">
                  Category:
                </label>
                <input
                  type="text"
                  id="category"
                  value={newBlogData.category}
                  placeholder="Enter category name"
                  className="form-input"
                  onChange={(event) => {
                    setErrors((errors) => ({ ...errors, category: "" }));
                    setNewBlogData((prev) => ({
                      ...prev,
                      category: event.target.value,
                    }));
                  }}
                />
                {errors.category && (
                  <span className="error-message"> {errors.category} </span>
                )}
              </div>

              <button className="create-blog-btn" type="submit">
                Create Blog
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
