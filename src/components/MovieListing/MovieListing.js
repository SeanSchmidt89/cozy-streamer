import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieSliceActions } from "../../store/movieSlice";
import baseUrl from "../../api/baseUrl";
import apiKey from "../../api/apiKey";
import "./MovieListing.css";

const MovieListing = () => {
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
      console.log("store", response.data.Search);
      if(response.request.status === 200){
        dispatch(movieSliceActions.addMovies(response.data.Search));
      }
      
    };
    getMovies();
  }, [dispatch]);
  return <div>MovieListing</div>;
};

export default MovieListing;
