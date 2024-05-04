import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <p className="subscription-text">Subscribe</p>
      <h2 className="brandname">Large</h2>
      <button className="auth-btn">Sign Up</button>
    </div>
  );
}
