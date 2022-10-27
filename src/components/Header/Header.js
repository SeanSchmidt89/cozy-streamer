import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <Link className="home-link" to="/">
          COZY STREAMER
        </Link>
      </div>
      <div className="nav">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/favorites">
          Favorites
        </Link>
        <Link className="link" to="/">
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
