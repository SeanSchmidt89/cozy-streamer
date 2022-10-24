import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popular: [],
  search: [],
  topRated: [],
  latest: [],
  details: {},
  random: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    searchMovies: (state, action) => {
      state.search = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addLatest: (state, action) => {
      state.latest = action.payload;
    },
    addDetails: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const movieSliceActions = movieSlice.actions;

export default movieSlice.reducer;
