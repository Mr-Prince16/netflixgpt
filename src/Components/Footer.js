import React , {useState, useEffect} from 'react';
import { User2 } from 'lucide-react';
import {Home} from "lucide-react";
import { Rocket } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleGptSearchView } from '../utils/gptSlice';
const Footer = () => {
const dispatch = useDispatch();
const showGPT = useSelector((store)=> store.gpt.showGptSearch);
  return (
    <>
    <div className='md:hidden flex justify-around text-white fixed bottom-[10px] mb-6 h-[50px] w-screen z-50'>
     <Link to={"/"}>
        <Home
        color='white'
        className='my-3' />
     </Link>
     {showGPT ? (
        <Rocket onClick={()=>dispatch(toggleGptSearchView())} 
        color="yellow"
        className='my-3'
        fill='yellow'
        />
     ) : (
        <Rocket className='my-3'
        color = "red"
        fill = "red"
         onClick={()=>dispatch(toggleGptSearchView())} />
     )
    
    }
    <Link to={"/user"}>
        <User2 
        color = "white"
        className='my-3 active:bg-white' />
    </Link>
    </div>
    </>
  )
}
export default Footer;