import React, { useRef } from 'react'
import Header from './Header'
import {useState} from "react"
import {checkValidData} from "../utils/validate"

const Login = () => {

  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null)

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignUpForm = () =>{
    setIsSignInForm(!isSignInForm)
  } 

  const handelButtonClick = ()=>{

    //validate the form data
    // console.log(email.current.value,password.current.value);
     const message =checkValidData(email.current.value,password.current.value);
     setErrorMessage(message)
    // checkValidData(email,password);

    //sign up or sign in
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" className=''/>
      </div>
      <form className='p-12  absolute w-3/12 my-36 mx-auto right-0 left-0 bg-black  bg-opacity-80 '>
        <h1 className='text-white  font-bold text-3xl py-4 '> {isSignInForm ? "Sign In" :"Sign up"}  </h1>
        {!isSignInForm && (<input type="text" placeholder='Name' className='p-4 my-4 w-full bg-black opacity-70 rounded-lg ' />)}
        <input ref={email} type="text" placeholder='Email or mobile number ' className='p-4 my-4 w-full  opacity-70 rounded-lg ' />
       
        <input ref={password} type="password" placeholder='password' className='p-4 my-4 w-full opacity-70 rounded-lg'/>
        <p className='text-red-700 font-bold '>{errorMessage}</p>
        <button className='bg-red-700  p-2 my-2 text-white w-full rounded-lg' onClick={handelButtonClick}>{isSignInForm ? "Sign In" :"Sign up"} </button>

        <p className='py-4 text-white  cursor-pointer' onClick={toggleSignUpForm}>{isSignInForm ? "New to Netflix ?SignUp Now" :"Already Registered please sign In "}  </p>
      </form>
      </div>
  )
}

export default Login