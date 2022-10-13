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
        <p>{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
