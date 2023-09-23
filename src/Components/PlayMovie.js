import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import usePlayMovie from '../Hooks/usePlayMovie';
import VideoBackgroundMovie from './VideoBackgroundMovie';
const PlayMovie = () => {
    const { movieId } = useParams();
    const getMovieVideos = usePlayMovie(movieId);
    useEffect(() => {
        getMovieVideos(); 
    },[]);
    return (
        <div >
            <VideoBackgroundMovie className='h-screen w-screen' movieId={movieId} />
        </div>
    );
};

export default PlayMovie;
