import React from 'react'
import { IMG_CDN_PATH } from './constants'

const MovieCards = ({ path }) => {
    return (

        <div className='w-48 pr-6'>
            <img className='' src={IMG_CDN_PATH + path} alt="movieLogo"></img>
        </div>



    )
}

export default MovieCards