import React from "react";
import { useSelector } from "react-redux";
import MovieCard from ".././MovieCard/MovieCard";
import "./Favorites.css";

const Favorites = () => {
  const favs = useSelector((state) => state.movies.favorites);
  return (
    <div className="favorites">
      <h2>My Favorites</h2>
      <div className="container">
        {favs.length > 0 &&
          favs.map((item, index) => <MovieCard key={index} item={item} />).reverse()}
      </div>
      {favs.length < 1 && <p className="no-favs">You have no Favorites added...</p>}
    </div>
  );
};

export default Favorites;
