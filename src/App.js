import { useState } from "react";
import "./App.css";
import {
  Navbar,
  BlogCategoryList,
  FeaturedBlogSection,
  BlogSection,
  CreateBlogModal,
  Footer,
} from "./components/index";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div>
      <div className="blog-page-container">
        <Navbar />
        <BlogCategoryList />

        <div className="banner-blog-container">
          <div className="banner-blog-content-container">
            <h2 className="banner-title">
              What is the standard Lorem Ipsum passage, used since the 1500s?
            </h2>
            <p className="banner-desc">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.
            </p>
            <button className="banner-readmore-text">
              Continue reading...
            </button>
          </div>
        </div>

        <FeaturedBlogSection />

        <button className="create-blog-btn" onClick={handleOpenModal}>
          Create Blog
        </button>

        <CreateBlogModal isOpen={openModal} onClose={handleCloseModal} />

        <BlogSection />
      </div>

      <Footer />
    </div>
  );
}

export default App;
