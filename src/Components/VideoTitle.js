import React from 'react'
import { Play } from 'lucide-react';
import {Info} from 'lucide-react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
const VideoTitle = ({title,overview}) => {
    const id = useSelector((store)=>store?.movies?.nowPlayingMovies[2]?.id)
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
        <div className=' my-4  md:-my-2'>
            <Link to={"/browse/"+id}>
            <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
            <Play fill='black' className='inline mb-1'/> Play
            </button>
            </Link>
            <button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>
            <Info className='inline mb-1'/> More Info
            </button>
        </div>
    </div> 
  )
}
export default VideoTitle