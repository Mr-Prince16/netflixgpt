import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import usePopularTVSeries from '../Hooks/usePopularTVSeries';
import useTrendingTVSeries from '../Hooks/useTrendingTVSeries';


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  usePopularTVSeries();
  useTrendingTVSeries();
  return (
    <div >
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {
        /*
        MainContainer
         -VideoBackground
         -VideoTitle
         SecondayContainer
          -MovieList*n
          -cards*n
      */ }
    </div>
  )
}
export default Browse