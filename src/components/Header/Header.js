import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [sideNav, setSideNav] = useState(false);
  const { user, logOut } = UserAuth();
  const toggleSideNav = (e) => {
    setSideNav(!sideNav);
  };

  const signOutHandler = () => {
    logOut();
    toggleSideNav();
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
        {/* <Link className="link" to="/about" onClick={toggleSideNav}>
          About
        </Link> */}
        {user ? (
          <button onClick={signOutHandler} className="sign-out">
            Sign out
          </button>
        ) : (
          <div className="log-btns" onClick={toggleSideNav}>
            <Link className="link" to="/login">
              Login
            </Link>
            <Link className="link" to="/signup" onClick={toggleSideNav}>
              <button className="sign-up">Sign Up</button>
            </Link>
          </div>
        )}
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

function repetition(txt, n) {
	if(n <= 1){
    return txt
  }

  return txt + repetition(txt, n -1)
}

repetition("cherry", 4)