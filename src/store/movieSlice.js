import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  random: [],
  search: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    // searchMovies: (state, action) => {
    //   state.search = action.payload;
    // },
  },
});

export const movieSliceActions = movieSlice.actions;

export default movieSlice.reducer;
