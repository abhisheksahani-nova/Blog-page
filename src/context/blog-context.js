import React, { createContext, useState, useContext } from "react";
import { blogsData } from "../data/blogs";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([...blogsData]);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};

const useBlogContext = () => useContext(BlogContext);

export { useBlogContext, BlogProvider };
