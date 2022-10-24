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
  const movies = useSelector((state) => state.movies.popular);
  const topRated = useSelector((state) => state.movies.topRated);
  const searchMovies = useSelector((state) => state.movies.search);
  const latest = useSelector((state) => state.movies.latest);

  useEffect(() => {
    axios.get(requests.popular).then((response) => {
      dispatch(movieSliceActions.addPopular(response.data.results));
    });
  }, [dispatch]);

  useEffect(() => {
    axios.get(requests.topRated).then((response) => {
      dispatch(movieSliceActions.addTopRated(response.data.results));
    });
  }, [dispatch]);

  useEffect(() => {
    axios.get(requests.latest).then((response) => {
      dispatch(movieSliceActions.addLatest(response.data.results));
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
      <h2>Now Playing</h2>
      <div className="container">
        {latest.length > 1 ? (
          latest.map((item, index) => <MovieCard key={index} item={item} />)
        ) : (
          <p>Count not Load titles...</p>
        )}
      </div>
      <h2>Top Rated</h2>
      <div className="container">
        {topRated.length > 1 ? (
          topRated.map((item, index) => <MovieCard key={index} item={item} />)
        ) : (
          <p>Count not Load titles...</p>
        )}
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
