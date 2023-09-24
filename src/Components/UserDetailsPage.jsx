import Footer from "./Footer"
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import Navbar from './Navbar';
const UserDetailsPage = () => {
  const user = useSelector((store) => store.user);
  const navigate =useNavigate()
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/')
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <>
   <div className="overflow-x">
<Navbar/>
 <section className='mb-[200px] mt-12 mx-5 flex items-center justify-center'>
   <div className='mx-auto max-w-7xl px-2 lg:px-0'>
     <div className='mx-auto  max-w-3xl md:text-center'>
     <h2 className='text-xl font-bold leading-tight  text-black dark:text-brand-beige sm:text-4xl lg:text-3xl lg:leading-tight'>
     "LIVE LIFE WITHOUT REGRETS"
       </h2>
       <h2 className='text-xl font-bold leading-tight  text-black dark:text-brand-beige sm:text-4xl lg:text-3xl lg:leading-tight'>
        HELLO , {user?.displayName.toUpperCase()}
       </h2>
       <p className='mx-auto p-4 rounded-lg mt-4 max-w-2xl text-left border-2 text-xl'>
        <br />
       Welcome to StreamSnipeTV. Please go ahead and select a movie watch any movie/tv series trailer.I have implemented GPT 3.5 Turbo API also for Search Movie functionality. Happy Sniping😂. Finally I would like to thank Akshay Saini and Namaste React Course for teaching me so much. I feel really confident on my front end skills now 💪🏻💪🏻
       </p>
     </div>
     <div className='mt-8 md:ml-[150px] grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-16 lg:gap-x-12'></div>
     <div className='mt-8 text-center flex justify-between md:mt-16'>
       <button
            onClick={handleSignOut} 
            className='rounded-lg ml-2  px-3 py-2 text-lg font-semibold text-black  '>
            Logout
          </button>
     </div>
   </div> 
 </section>
 </div>
    </>
  )
}
export default UserDetailsPage;