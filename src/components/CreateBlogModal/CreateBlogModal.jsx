import React, { useState } from "react";
import "./CreateBlogModal.css";
import closeIcon from "../../assets/icons/close.png";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { v4 as uuidv4 } from "uuid";

export default function CreateBlogModal({ isOpen, onClose }) {
  const [newBlogData, setNewBlogData] = useState({
    id: uuidv4(),
    author: "",
    title: "",
    content: "",
    category: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleContentChange = (content) => {
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
                  onChange={(event) =>
                    setNewBlogData((prev) => ({
                      ...prev,
                      title: event.target.value,
                    }))
                  }
                />
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
                  onChange={(event) =>
                    setNewBlogData((prev) => ({
                      ...prev,
                      author: event.target.value,
                    }))
                  }
                />
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
                  onChange={(event) =>
                    setNewBlogData((prev) => ({
                      ...prev,
                      category: event.target.value,
                    }))
                  }
                />
              </div>

              <button className="submit-btn" type="submit">
                Create Blog
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
