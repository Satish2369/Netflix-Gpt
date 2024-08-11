import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import {  useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';












const Header= () => {
  const navigate = useNavigate();
  
  const user = useSelector(store => store.user);




const handleSignOut =()=>{
 
  signOut(auth).then(() => {
    navigate("/")
  }).catch((error) => {
    navigate("/error")
  });


}





  return (
    <div className='w-screen absolute px-8 py-2  bg-gradient-to-b from-black z-10 flex justify-between'>
  <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" className='h-18 w-44  ' alt="logo" />


{ user && (
<div className='  flex  items-center '>

  <img   className='h-8 w-8 m-4 '  src={user.photoURL } alt="user photo" />


  <button className='bg-red-700 text-white p-1 border-zinc-800 px-2 font-bold'
  
  onClick={handleSignOut}
  
  
  >Sign Out</button>
</div>
)
}
    </div>
  )
}

export default Header;