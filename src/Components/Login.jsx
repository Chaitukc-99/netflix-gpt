import React, { useRef, useState } from 'react'
import Header from './Header'
import { errorMsg } from '../utils/ValidateForm';


const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [showError, setShowError] = useState(null);

  const toggleSignIn = () => {
    setIsSignedIn(!isSignedIn)
  }
  const email = useRef()
  const password = useRef()
  const name = useRef()

  const handleClick = () => {
    const msg = errorMsg(email.current.value, password.current.value)
    setShowError(msg)

  }


  return (
    <div>
      <Header />
      <form className='w-3/12 absolute my-40 mx-auto right-0 left-0 bg-black p-10 rounded-lg' onSubmit={e => { e.preventDefault() }}>
        <h1 className="text-white text-3xl my-4">Sign In</h1>
        {(!isSignedIn) &&
          <input className='my-4 p-3 w-10/12 bg-gray-800 rounded-lg' type='text' placeholder='Full Name' ref={name} />
        }
        <input className='text-white my-4 p-3 w-10/12 bg-gray-800 rounded-lg' type='text' placeholder='Email or mobile number' ref={email} />
        <input className='my-4 p-3 w-10/12 bg-gray-800 rounded-lg text-white' type='password' placeholder='Password' ref={password} />
        <p className='text-rose-900 text-lg'>{showError}</p>
        <button className='my-4 p-2 w-10/12 bg-red-800 text-lg rounded-lg' onClick={handleClick}>{isSignedIn ? "Sign in" : "Sign up"}</button>
        <p className="text-white text-xl my-4 cursor-pointer" onClick={toggleSignIn}>{isSignedIn ? "New to netflix?Sign up now" : "Already an user.Sign in now"}</p>
      </form>
    </div>
  )
}

export default Login