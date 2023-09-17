import React, { useState, useRef } from 'react';
import Header from "./Header";
import {checkValidateData} from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage]= useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch=useDispatch();

  const handleButtonClick = () =>{
    // Validate the form data
    console.log("button clicked")
    console.log(email?.current?.value);
    console.log(password?.current?.value);
    const message = checkValidateData(email?.current?.value, password?.current?.value);
    setErrorMessage(message);
    if(message) return;

    if(!isSignInForm){
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
      
        // Update Profile

updateProfile(auth.currentUser, {
  displayName: name.current.value, photoURL:USER_AVATAR
}).then(() => {
  // Profile updated!
  // ...
  const {uid,email,displayName,photoURL} = auth.currentUser;
  dispatch(
  addUser({
    uid:uid,
    email:email,
    displayName: displayName,
    photoURL:photoURL,
  })
  );
})
.catch((error) => {
  // An error occurred
  // ...
  setErrorMessage(error.message);
});
      

        console.log(user); 
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage+ "-" +errorCode);
        // ..
      });
    }
    else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email?.current.value, password?.current?.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage+ "-" +errorCode);
  });
    }
  }
  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
   <div>
    <Header/>
    <div className="absolute">
    <img className='' src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
    alt="logo"
    />
    </div>
<form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
  <h1 className='font-bold text-3xl py-4 text-start'>{isSignInForm? "Sign In" : "SignUp"}</h1>
  
  { !isSignInForm && <input 
  type='text'
  ref={name}
  placeholder='UserName'
  className='p-4 my-4 w-full bg-gray-600'
  />}
  <input 
  ref={email}
  type='text'
  placeholder='Email Address'
  className='p-4 my-4 w-full bg-gray-600'
  />
  <input
  ref={password}
  type='password'
  placeholder='Password'
  className='p-4 my-4 w-full bg-gray-600'
  />
  <p className='text-red-500 text-start'>{errorMessage}</p>
  <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
    {isSignInForm? "Sign In" : "Sign Up"}
    </button>
    <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
     {isSignInForm ? "New to Netflix? Sign Up Now" 
     : "Already registered? Sign Up Now."}
    </p>
</form>
    </div>

  )
}
export default Login;