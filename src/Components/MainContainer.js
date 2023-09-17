import React from 'react';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';
const MainContainer = () => {
    const movies = useSelector((store)=> store.movies?.nowPlayingMovies);
    // Early Return
    if(!movies) return;
    const mainMovie = movies[0];
    console.log(mainMovie);

  return (
    <div>
        <VideoTitle/>
        <VideoBackground/>
    </div>
  )
}

export default MainContainer