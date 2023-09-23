import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieVideo } from "../utils/moviesSlice";

// Calling movie trailer api using movie id
const usePlayMovie = (movieId) => {
    const dispatch = useDispatch();

    const playMovie = useSelector((store) => store.movies.playMovie);

    const getMovieVideos = async() => {
        const dataMovie = await
        fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
        const jsonMovie = await dataMovie.json();
        console.log(jsonMovie);
        const dataTV = await fetch("https://api.themoviedb.org/3/tv/" + movieId + "/videos?language=en-US", API_OPTIONS);
        const jsonTV = await dataTV.json();
        console.log(jsonTV);

        if (jsonMovie.results && jsonMovie.results.length > 1) {
            const filterData = jsonMovie.results.filter((video) => video.type === "Trailer" ||
                video.type === "Official Trailer" ||
                video.type === "Teaser" ||
                video.type === "Featurette" ||
                video.type.toLowerCase().includes("trailer")
            );
            const trailer = filterData.length ? filterData[0] : jsonMovie.results[0];
            dispatch(addMovieVideo(trailer));
        } else {
            const filterData = jsonTV.results.filter((video) => video.type === "Trailer" ||
                video.type === "Official Trailer" ||
                video.type === "Teaser" ||
                video.type === "Featurette" ||
                video.type.toLowerCase().includes("trailer")
            );
            const trailer = filterData.length ? filterData[0] : jsonTV.results[0];
            dispatch(addMovieVideo(trailer));
        }

    };
    useEffect(() => {
        !playMovie && getMovieVideos();
    }, []);
    return getMovieVideos;
};
export default usePlayMovie;