import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <p>COZY STREAMER</p>
        </div>
        <div className="right">
          <a href="https://github.com/SeanSchmidt89" className="link">
            <BsGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/sean-schmidt-018459239/" className="link">
            <BsLinkedin size={18} />
          </a>
          <a href="https://github.com/SeanSchmidt89/cozy-streamer" className="link">
            VIEW CODE
          </a>
          <a href="https://www.themoviedb.org/" className="link">
            API
          </a>
          <Link to="/about" className="link">
            ABOUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
