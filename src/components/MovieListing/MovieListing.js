import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieSliceActions } from "../../store/movieSlice";
import requests from "../../api/requests";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import MovieCover from "../MovieCover/MovieCover";
import Search from "../Search/Search";
import "./MovieListing.css";

const MovieListing = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const searchMovies = useSelector((state) => state.movies.search);

  useEffect(() => {
    axios.get(requests.popular).then((response) => {
      dispatch(movieSliceActions.addMovies(response.data.results));
    });
  }, [dispatch]);

  return (
    <div>
      <MovieCover />
      <Search />
      {searchMovies.length > 1 ? <h2>Search Results</h2> : null}
      <div className="container">
        {searchMovies
          ? searchMovies.map((item, index) => (
              <MovieCard key={index} item={item} />
            ))
          : null}
      </div>
      <h2>Most Popular</h2>
      <div className="container">
        {movies.length > 1 ? (
          movies.map((item, index) => <MovieCard key={index} item={item} />)
        ) : (
          <p>Count not Load titles...</p>
        )}
      </div>
    </div>
  );
};

export default MovieListing;
