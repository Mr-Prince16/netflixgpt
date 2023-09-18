import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store)=> store.movies);
  return (
    movies.nowPlayingMovies && (
        <div className='bg-black'>
            <div className='-mt-52 pl-4 relative z-20'>
                <MovieList title={"Now Playing Movies"} movies = {movies.nowPlayingMovies}/>
                <MovieList title={"Trending Movies"} movies = {movies.popularMovies}/>
                <MovieList title={"Trending TV Series"} movies = {movies.trendingTVSeries}/>
                <MovieList title={"Popular TV Series"} movies = {movies.popularTVSeries}/>
                
            </div>
        </div>   
    )
  )
}
export default SecondaryContainer;