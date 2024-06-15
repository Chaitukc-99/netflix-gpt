import React, { useRef, useState } from 'react'
import Header from './Header'
import { errorMsg } from '../utils/ValidateForm';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/Firebase'
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { GokuImg, Movie_Logo } from './constants';



const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [showError, setShowError] = useState(null);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const toggleSignIn = () => {
    setIsSignedIn(!isSignedIn)
  }
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const handleClick = () => {
    const msg = errorMsg(email.current.value, password.current.value)
    setShowError(msg)

    if (msg) return;

    if (!isSignedIn) {
      //Below is the code for sign up or create account for new user
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value, photoURL: GokuImg
          }).then(() => {
            const { uid, mail, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, mail: mail, displayName: displayName, photoURL: photoURL }))
            navigate('/browse')
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setShowError(errorCode + " " + errorMessage)
          // ..
        });
    } else {

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          // eslint-disable-next-line no-unused-vars
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setShowError(errorCode + " " + errorMessage)
        });
    }

  }


  return (
    <div>
      <Header />
      <img className='absolute'
        src={Movie_Logo} alt="movies logo" />

      <form className='w-3/12 absolute my-40 mx-auto right-0 left-0 bg-black p-10 rounded-lg' onSubmit={e => { e.preventDefault() }}>
        <h1 className="text-white text-3xl my-4">Sign In</h1>
        {(!isSignedIn) &&
          <input className='text-white my-4 p-3 w-10/12 bg-gray-800 rounded-lg' type='text' placeholder='Full Name' ref={name} />
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