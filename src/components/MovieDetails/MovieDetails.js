import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieSliceActions } from "../../store/movieSlice";
import { apiKey } from "../../api/requests";
import MovieCard from "../MovieCard/MovieCard";
import axios from "axios";
import "./MovieDetails.css";

const MovieDetails = () => {
  const [toggleFav, setToggleFav] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.movies.details);
  const related = useSelector((state) => state.movies.related);

  const favoritesHandler = (e) => {
    dispatch(movieSliceActions.addFavorites(details));
    setToggleFav(true);
  };

  useEffect(() => {
    axios
      .get(
        `
    https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
      )
      .then((response) => {
        dispatch(movieSliceActions.addDetails(response.data));
      })
      .catch((error) => console.log("error", error));
  }, [id, dispatch]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((response) =>
        dispatch(movieSliceActions.addRelated(response.data.results))
      )
      .catch((error) => console.log(error));
  }, [id, dispatch]);
  let genres = details.genres;
  let runtime = details.runtime;
  let overview = details.overview;
  let realeaseDate = details.release_date;
  let status = details.status;
  let voteAverage = Math.floor(details.vote_average * 10);
  return (
    <>
      <div className="details">
        <div className="details-overlay"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
          alt={details.title}
        />
        <div className="detail-info">
          <p className="detail-title">{details.title}</p>
          <ul>
            <li>
              {details.genres &&
                genres.map((item, index) => {
                  if (index === genres.length - 1) {
                    return <span key={index}>{item.name}</span>;
                  }
                  return <span key={index}>{item.name},</span>;
                })}
            </li>
            {runtime && <li>{runtime} mins</li>}
            {voteAverage && <li>Rating {voteAverage}%</li>}
            {status && (
              <li>
                {status} {realeaseDate}
              </li>
            )}
          </ul>
          <div className="detail-overview">{overview && <p>{overview}</p>}</div>
          <div>
            <button className="detail-btn" onClick={favoritesHandler}>
              + My List
            </button>
            {toggleFav && <span className="detail-added">✔ Added</span>}
          </div>
        </div>
        <div className="detail-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
            alt={details.title}
          />
        </div>
      </div>
      <div className="related">
        <h2>Related</h2>
        <div className="container">
          {related.length > 1 ? (
            related.map((item, index) => <MovieCard key={index} item={item} />)
          ) : (
            <p>Count not Load related titles...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
