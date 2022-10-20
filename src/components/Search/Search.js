import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { movieSliceActions } from "../../store/movieSlice";
import { apiKey } from "../../api/requests";
import axios from "axios";
import "./Search.css";

const Search = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
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
    </div>
  );
};

export default Search;
