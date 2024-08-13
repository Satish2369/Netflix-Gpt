import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import {  useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';









const Header= () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const user = useSelector(store => store.user);




const handleSignOut =()=>{
 
  signOut(auth).then(() => {
  }).catch((error) => {
    navigate("/error")
  });


}


useEffect(()=>{

 const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
      
        
       const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({
              uid: uid,
              email: email,
              displayName:displayName,photoURL:photoURL
            }),

          )
          navigate("/browse");
      } 
      else {
        dispatch(removeUser());
          navigate("/")
      }
    });


    // unsusbcribe when componnt unmounts
return () => unsubscribe();


},[])





  return (
    <div className='w-full absolute px-8 py-2  bg-gradient-to-b from-black z-10 flex justify-between  '>
  <img src={LOGO} className='h-18 w-44  ' alt="logo" />


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