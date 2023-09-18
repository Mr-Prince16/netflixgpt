import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularTVSeries } from "../utils/moviesSlice";

const usePopularTVSeries = () => {
    // Fetch data from TMDB API and update here
    const dispatch = useDispatch();

    const popularTVSeries = useSelector((store) => store.movies.popularTVSeries);

    const getPopularMovies = async() => {
        const data = await fetch("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
            API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularTVSeries(json.results));
    };
    useEffect(() => {
        !popularTVSeries && getPopularMovies();
    }, [])
};

export default usePopularTVSeries;