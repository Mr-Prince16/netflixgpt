import React,{useEffect, useState} from 'react'
import {signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser , removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
import {ChevronDownCircle} from "lucide-react";
import { Link } from 'react-router-dom';
const Header = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleSignOut = () =>{
signOut(auth).then(() => {
}).catch((error) => {
  navigate("/error")
});
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
      const {uid,email,displayName, photoURL} =user;
         dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL:photoURL}))
        // ...
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmounts
    return ()=> unsubscribe();
  },[]);

  const handleGptSearchClick = ()=>{
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e)=> {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className=" absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
      className="w-44 mx-auto md:mx-0"
      src={LOGO}
      alt="logo"
      />

      {user &&<div className='flex p-2 justify-between'>
        {showGptSearch && (
          <select
          className='absolute bottom-[35px] -left-[2px] md:static p-2 m-2 bg-gray-900 text-white rounded-lg'
          onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang)=>(
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <button
        className=' hidden md:block py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg '
        onClick={handleGptSearchClick}
        >
          {showGptSearch ? "Homepage" : "GPT Search"}
        </button>
        <img
        className='hidden md:block h-12 w-12 rounded-full'
        alt='usericon'
        src={user.photoURL}
        />
      <button onClick={()=>setMenuOpen(!menuOpen)}  className='hidden md:block font-bold text-white'>
        <ChevronDownCircle/>
       </button>
       <div
          className={`absolute right-7 rounded-xl w-[150px] top-[70px] z-50 ${
            menuOpen ? "flex flex-col justify-around" : "hidden"
          } bg-black opacity-80 h-[200px]`}>
          <p className='text-red-300 px-1 py-1 text-center'>
            Welcome {user?.displayName}
          </p>
          <Link to={"/"}>
            <p className='text-red-300 cursor-pointer text-center'>Home</p>
          </Link>
          <button
            onClick={handleSignOut}
            className='  ml-10  py-1 rounded-full w-[50%] text-red-300  '>
            Logout
          </button>
        </div>
      </div>}
    </div>
  )
}

export default Header;