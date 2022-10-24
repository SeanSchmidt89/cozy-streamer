import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./MovieCover.css";

const MovieCover = () => {
  const movies = useSelector((state) => state.movies.popular);
  const movieRandom = Math.floor(Math.random() * movies.length + 1);

  return (
    <div>
      {movies.length > 0 && (
        <div className="cover-movie">
          <div className="overlay"></div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movies[movieRandom].backdrop_path}`}
            alt={movies[movieRandom].title}
          />
          <div className="info">
            <div className="title">
              <p>{movies[movieRandom].title}</p>
            </div>
            <div className="description">
              <p>{movies[movieRandom].overview}</p>
            </div>
            <div className="btns-container">
              <Link to={`movie-details/${movies[movieRandom].id}`}>
                <button>View</button>
              </Link>
              <button>+ My List</button>
            </div>
            <div className="rating">
              {<p>Rating {movies[movieRandom].vote_average * 10}%</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCover;
