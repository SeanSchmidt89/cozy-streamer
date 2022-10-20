import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ item }) => {
  return (
    <div className="card-container">
      <div className="upper">
        <Link to={`/movie-details/${item.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            alt={item.title}
          />
        </Link>
      </div>
      <div className="lower">
        <p>{item.title}.</p>
      </div>
    </div>
  );
};

export default MovieCard;

//box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
