import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <p className="footer-desc">
          Blog template build by <span className="blue-clr">React</span> ⭐
        </p>
        <button onClick={scrollToTop} className="back-to-top-btn">
          Back to Top
        </button>
      </div>
    </div>
  );
}
