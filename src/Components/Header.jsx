import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/Firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from './constants';


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const user = useSelector((store) => store.user)
    console.log(user)

    const handleClick = () => {


        signOut(auth).then(() => {

            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                const { uid, mail, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, mail: mail, displayName: displayName, photoURL: photoURL }))
                navigate('/browse')
                // ...
            } else {
                dispatch(removeUser())
                navigate('/')
                // User is signed out
                // ...
            }
        });
        return () => unsubscribe()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className=''>
            <div className='w-full absolute bg-gradient-to-b from-black flex justify-between h-auto'>
                <img className='bg-black-50 w-60 px-8 py-8 relative z-30 h-40' src={LOGO} alt="netflix logo" />
                {user && (<div className='my-2 mx-1 p-6 text-white flex'>
                    <div className='w-20 p-4'><img className='h-16' src={user?.photoURL} alt="userPic" /></div>
                    <button onClick={handleClick}>(Sign out)</button></div>)}


            </div>

        </div>
    )
}

export default Header