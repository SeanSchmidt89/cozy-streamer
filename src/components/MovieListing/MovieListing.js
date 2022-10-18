import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import MovieCard from "../MovieCard.js/MovieCard";
import requests from "../../api/requests";
import { movieSliceActions } from "../../store/movieSlice";
import "./MovieListing.css";

const MovieListing = () => {
  //const dispatch = useDispatch();
  //const movies = useSelector((state) => state.movies.movies);
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(requests.popular).then((response) => {
      //dispatch(movieSliceActions.addMovies(response.data.results));
      setMovies(response.data.results)
    });
  }, []);
  console.log(movies);

  return (
    <div>
      <div className="search">
        <form>
          <input placeholder="Search Moives" />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
      </div>
      <div className="container">
        {movies ? (
          movies.map((item, index) => <MovieCard key={index} item={item} />)
        ) : (
          <p>not here</p>
        )}
        
      </div>
    </div>
  );
};

export default MovieListing;
