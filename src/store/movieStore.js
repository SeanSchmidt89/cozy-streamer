import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "./movieSlice";

const movieStore = configureStore({
  reducer: {
    movies: MovieReducer,
  },
});

export default movieStore
