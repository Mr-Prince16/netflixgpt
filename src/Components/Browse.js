import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import usePopularTVSeries from '../Hooks/usePopularTVSeries';
import useTrendingTVSeries from '../Hooks/useTrendingTVSeries';
import GptSearch from './GptSearch';
import { useSelector,useDispatch } from 'react-redux';
import Footer from './Footer';
import { toggleGptSearchView } from '../utils/gptSlice';
import { Link } from 'react-router-dom';
import { Home, Rocket, User2 } from 'lucide-react';

const Browse = () => {
  const dispatch = useDispatch();
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
          <>
          <GptSearch/>
        
          {/* <div className='md:hidden flex justify-around bg-brand-coal text-white sticky bottom-[90px] h-[62px]  w-screen z-50 '>
            <Link to={"/"}>
              <Home className='my-3' />
            </Link>
            <Rocket
              fill='yellow'
              color='yellow'
              onClick={() => dispatch(toggleGptSearchView())}
              className='my-3'
            />
            <Link to={"/user"}>
              <User2 className='my-3' />
            </Link>
          </div> */}
          </>
        ) : (  
        <>
         <MainContainer/> 
        <SecondaryContainer/>
        <Footer/>
        </>
        )
      }
    </div>
  )
}
export default Browse