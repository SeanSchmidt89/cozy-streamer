import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieSliceActions } from "../../store/movieSlice";
import { apiKey } from "../../api/requests";
import requests from "../../api/requests";
import axios from "axios";
import MovieCard from "../MovieCard.js/MovieCard";
import "./MovieListing.css";

const MovieListing = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const searchMovies = useSelector((state) => state.movies.search);
  const random = useSelector((state) => state.movies.random);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    axios.get(requests.popular).then((response) => {
      dispatch(movieSliceActions.addMovies(response.data.results));
    });
  }, [dispatch, movies]);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${inputText}`
      )
      .then((response) => {
        dispatch(movieSliceActions.searchMovies(response.data.results));
      });
    setInputText("");

  };
  return (
    <div>
      <div className="search">
        <form onSubmit={searchHandler}>
          <input
            onChange={inputTextHandler}
            value={inputText}
            placeholder="Search Moives"
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
      </div>
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
