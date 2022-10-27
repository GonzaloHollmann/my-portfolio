import React from "react";
import "./Navbar.css";

const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar-logo" onClick={toTheTop}>
        Gonzalo Hollmann
      </div>
      <div className="sns-links">
          <a
            href="https://www.linkedin.com/in/gonzalo-hollmann-655a0421b/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a
            href="https://github.com/GonzaloHollmann"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github twitter"></i>
          </a>
          <a href="https://twitter.com/gonza_hollmann" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
        </div>
    </nav>
  );
};

export default Navbar;