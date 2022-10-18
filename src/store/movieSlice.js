import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
  favorites: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    addToFavorites: (state, action) => {
        
    },
  },
});

export const movieSliceActions = movieSlice.actions;



export default movieSlice.reducer;
