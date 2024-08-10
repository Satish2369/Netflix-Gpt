import React from 'react';
import Header from './Header';
import { useState,useRef } from 'react';
import { checkValidData } from '../utils/Validate';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';




const Login = () => {

const [isSignInForm,setIsSignInForm] = useState(true);

const [errorMessage,setErrorMessage] = useState(null)






 const email  = useRef(null);
const password = useRef(null);
const name = useRef(null);
const handleButtonClick = ()=>{

//validate the form data

// checkValidData(email,password)  

// console.log(email.current.value);
// console.log(password.current.value)
 
const message = checkValidData(email.current.value,password.current.value)
setErrorMessage(message);


if(message) return;


//sign up and sign in logic

if(!isSignInForm){

createUserWithEmailAndPassword(
   auth,
    email.current.value, 
    password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     setErrorMessage(errorCode + "-" +  errorMessage)
    
  });


}


else{

//sign in logic



}




}


const toggleSignInForm =()=>{


setIsSignInForm(!isSignInForm);


}



return (
<div>

<Header/>

<div className='absolute'>
 

<img 
aria-hidden="true"
 data-uia="nmhp-card-hero+background+image" 
 src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_small.jpg" 
 srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg 1800w" className="h-screen w-screen" />

</div>
 

<form  onSubmit={(e)=> e.preventDefault()}  className='absolute py-14 px-16 m-12 bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col text-white text-xl bg-opacity-90'>

<h1 className='font-bold text-3xl py-4 mx-1 capitalize mb-3'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

{!isSignInForm && (
   
   <input 
   ref={name}
   type="text" 
   placeholder='Full Name' 
   className=' m-2 p-1 bg-zinc-800' />
   
   
   
   )}
<input  ref={email}          type="text" placeholder='Email or phone number' className='py-1 m-2 px-4 bg-zinc-800' />

<input  ref={password}         type="text" placeholder='Password' className='py-1 m-2 px-4 mb-4  bg-zinc-800' />
<p className='text-red-800 semibold p-2 capitalize'>{errorMessage === null ? " " : errorMessage}</p>

<button className='py-1 m-2 text-white bg-red-800 capitalize'  onClick={handleButtonClick}    >{isSignInForm ? "Sign In" : "Sign Up"}</button>

<p className='p-4  text-[12px] cursor-pointer'  onClick={toggleSignInForm}>{isSignInForm ? "New to NetFlix? Sign up now": "Already Registered? Sign In Now"}</p>

</form>



 


</div>


)









}

export default Login;