import React,{useEffect} from 'react'
import {signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser , removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
const Header = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  console.log(user);
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
  },[])

  return (
    <div className=" absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
      className="w-44"
      src={LOGO}
      alt="logo"
      />

      {user &&<div className='flex p-2'>
        <img
        className='h-12 w-12'
        alt='usericon'
        src={user.photoURL}
        />
      <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header