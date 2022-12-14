import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieSliceActions } from "../../store/movieSlice";
import { Link } from "react-router-dom";
import "./MovieCover.css";

const MovieCover = () => {
  const dispatch = useDispatch();
  const [toggleFav, setToggleFav] = useState(false);
  const movies = useSelector((state) => state.movies.popular);
  const movieRandom = useSelector((state) => state.movies.random);

  useEffect(() => {
    dispatch(
      movieSliceActions.random(Math.floor(Math.random() * movies.length))
    );
  }, [dispatch, movies.length]);

  const favoritesHandler = (e) => {
    dispatch(movieSliceActions.addFavorites(movies[movieRandom]));
    setToggleFav(true);
    setTimeout(() => {
      setToggleFav(false);
    }, 2500);
  };
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
              <button onClick={favoritesHandler}>+ My List</button>
              {toggleFav && <span className="added">✔ Added</span>}
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
