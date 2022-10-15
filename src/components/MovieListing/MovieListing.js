import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieSliceActions } from "../../store/movieSlice";
import baseUrl from "../../api/baseUrl";
import apiKey from "../../api/apiKey";
import MovieCard from "../MovieCard.js/MovieCard";
import "./MovieListing.css";

const MovieListing = () => {
  const [inputText, setInputText] = useState("");
  const [search, setSearch] = useState("star wars");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

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

  useEffect(() => {
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
  }, [dispatch, search, setSearch]);

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const searchMoviesHandler = (e) => {
    e.preventDefault();
    setSearch(inputText);
    getMovies();
    setInputText("");
  };
  return (
    <div>
      <div className="search">
        <form onSubmit={searchMoviesHandler}>
          <input
            onChange={inputHandler}
            value={inputText}
            placeholder="Search Moives"
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
      </div>

      {movies.Search ? (
        <div className="container">
          {movies.Search.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="error">Cound'nt find anything with that title...</p>
      )}
    </div>
  );
};

export default MovieListing;
