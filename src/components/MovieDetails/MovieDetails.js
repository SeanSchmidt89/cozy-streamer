import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieSliceActions } from "../../store/movieSlice";
import { apiKey } from "../../api/requests";
import axios from "axios";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  useEffect(() => {
    axios
      .get(
        `
    https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
      )
      .then((response) => {
        console.log('fetch',response.data)
        dispatch(movieSliceActions.addDetails(response.data));
      })
      .catch((error) => console.log("error", error));
  }, [id, dispatch]);
  console.log(details)
  return <div>MovieDetails</div>;
};

export default MovieDetails;
