import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPLayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      // store the single trailer object (or null) in trailerVideo
      state.trailerVideo = action.payload;
    },
  },

});
export const { addNowPLayingMovies, addMovieTrailer } = movieSlice.actions;
export default movieSlice.reducer;
