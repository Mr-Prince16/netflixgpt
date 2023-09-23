import React from 'react';
import { useSelector } from 'react-redux';
import usePlayMovie from '../Hooks/useMovieTrailer';

const VideoBackgroundMovie = ({movieId}) => {
    const movieVideo = useSelector((store)=> store.movies?.playMovie);
    // Hook and API call using custom hook and passing props movieId as a parameter inside of the hook
    usePlayMovie(movieId);
    
   return (
    <div className='w-screen'>
        <iframe
        className='w-screen aspect-video'
        src = {
            "https://www.youtube.com/embed/"+
            movieVideo?.key + 
            "?&autoplay=1&mute=1"
        }
        title='Youtube video player'
        allow= "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
        </iframe>
    </div>
  )
}

export default VideoBackgroundMovie;