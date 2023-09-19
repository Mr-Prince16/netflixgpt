import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import usePopularTVSeries from '../Hooks/usePopularTVSeries';
import useTrendingTVSeries from '../Hooks/useTrendingTVSeries';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {

  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  usePopularTVSeries();
  useTrendingTVSeries();
  return (
    <div >
      <Header/>
      {
        showGptSearch ? (
          <GptSearch/>
        ) : (  
        <>
         <MainContainer/> 
        <SecondaryContainer/>
        </>
        )
      }
    </div>
  )
}
export default Browse