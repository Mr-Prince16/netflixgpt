import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        trailerVideo: null,
        popularTVSeries: null,
        trendingTVSeries: null,
        playMovie: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addMovieVideo: (state, action) => {
            state.playMovie = action.payload;
        },
        addPopularTVSeries: (state, action) => {
            state.popularTVSeries = action.payload;
        },
        addTrendingTVSeries: (state, action) => {
            state.trendingTVSeries = action.payload;
        },

    },
});
export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addPopularTVSeries, addTrendingTVSeries, addMovieVideo } = moviesSlice.actions;
export default moviesSlice.reducer;