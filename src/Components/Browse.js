import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
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