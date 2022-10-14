import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="card-container">
      <div className="upper">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="lower">
        <p>{movie.Title}.</p>
      </div>
    </div>
  );
};

export default MovieCard;

//box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
