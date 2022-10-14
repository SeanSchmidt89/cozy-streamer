import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieSliceActions } from "../../store/movieSlice";
import baseUrl from "../../api/baseUrl";
import apiKey from "../../api/apiKey";
import MovieCard from "../MovieCard.js/MovieCard";
import "./MovieListing.css";

const MovieListing = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    const search = "star wars";
    const getMovies = async () => {
      const response = await baseUrl
        .get(`?apikey=${apiKey}&type=movie&s=${search}`)
        .catch((error) => {
          console.log("Error message:", error);
        });
      if (response.request.status === 200) {
        dispatch(movieSliceActions.addMovies(response.data));
      }
    };
    getMovies();
  }, [dispatch]);
  console.log(movies);

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const searchMoviesHandler = (e) => {
    e.preventDefault();
    setInputText("");
  };
  return (
    <div>
      <div className="search">
        <form onSubmit={searchMoviesHandler}>
          <input onChange={inputHandler} value={inputText} placeholder="Search Moives" />
          <button type="submit" className="search-btn">Search</button>
        </form>
      </div>
      <div className="container">
        {movies.Search &&
          movies.Search.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default MovieListing;
