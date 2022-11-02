import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h2>About Cozy Streamer</h2>
        <p>
          This page is built using React JS, Redux Toolkit for state management
          and Axios to fetch the API call. The API being utilized is from{" "}
          <a href="https://www.themoviedb.org/">The Movie DB</a>
        </p>
      </div>
    </div>
  );
};

export default About;
