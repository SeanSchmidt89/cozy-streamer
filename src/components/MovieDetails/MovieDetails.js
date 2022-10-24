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
  const details = useSelector((state) => state.movies.details);
  useEffect(() => {
    axios
      .get(
        `
    https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
      )
      .then((response) => {
        console.log("fetch", response.data);
        dispatch(movieSliceActions.addDetails(response.data));
      })
      .catch((error) => console.log("error", error));
  }, [id, dispatch]);
  let genres = details.genres;
  let runtime = details.runtime;
  let overview = details.overview;
  let realeaseDate = details.release_date;
  let status = details.status;
  let voteAverage = details.vote_average * 10
  return (
    <div className="details">
      <div className="details-overlay"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
        alt={details.title}
      />
      <div className="detail-info">
        <p>{details.title}</p>
        <div><ul>Genres :
          {details.genres &&
            genres.map((item, index) => <li key={index}>{item.name}</li>)}</ul>
        </div>
        <div>{runtime && <p>Run time: {runtime}mins</p>}</div>
        <div>{overview && <p>{overview}</p>}</div>
        <div>{realeaseDate && <p>realease date: {realeaseDate}</p>}</div>
        <div>{voteAverage && <p>Rating {voteAverage}%</p>}</div>
        <div>{status && <p>Status:  {status}</p>}</div>
      </div>
    </div>
  );
};

export default MovieDetails;
