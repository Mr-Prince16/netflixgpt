import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import VideoBackground from './VideoBackground';
import useMovieTrailer from '../Hooks/useMovieTrailer';
import { clearTrailerVideo } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';
import Header from './Header';
const PlayMovie = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const getMovieVideos = useMovieTrailer(movieId);
    useEffect(() => {
        getMovieVideos(); 
    },[]);
    return (
        <div >
            <VideoBackground className='h-screen w-screen' movieId={movieId} />
        </div>
    );
};

export default PlayMovie;
