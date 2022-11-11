import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [sideNav, setSideNav] = useState(false);
  const toggleSideNav = (e) => {
    setSideNav(!sideNav);
  };
  return (
    <div className="header">
      <div className="left">
        <Link className="home-link" to="/">
          COZY STREAMER
        </Link>
      </div>
      <div className={sideNav ? "nav-active" : "nav"}>
        <Link className="link" to="/" onClick={toggleSideNav}>
          Home
        </Link>
        <Link className="link" to="/favorites" onClick={toggleSideNav}>
          Favorites
        </Link>
        <Link className="link" to="/about" onClick={toggleSideNav}>
          About
        </Link>
        <Link className="link" to='/login'>Sign In</Link>
        <Link className="link" to="/signup">
          <button className="sign-up">Sign Up</button>
        </Link>
      </div>
      {!sideNav ? (
        <div className="hamburger">
          <FaBars onClick={toggleSideNav} size={20} />
        </div>
      ) : (
        <div className="close-btn">
          <FaTimes onClick={toggleSideNav} size={20} />
        </div>
      )}
    </div>
  );
};

export default Header;
