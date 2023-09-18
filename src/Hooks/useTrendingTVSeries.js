import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingTVSeries } from "../utils/moviesSlice";

const useTrendingTVSeries = () => {
    // Fetch data from TMDB API and update here
    const dispatch = useDispatch();

    const trendingTVSeries = useSelector((store) => store.movies.trendingTVSeries);

    const getTrendingTVSeries = async() => {
        const data = await fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
            API_OPTIONS);
        const json = await data.json();
        dispatch(addTrendingTVSeries(json.results));
    };
    useEffect(() => {
        !trendingTVSeries && getTrendingTVSeries();
    }, [])
};

export default useTrendingTVSeries;