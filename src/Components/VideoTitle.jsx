import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-[20%] px-20 w-screen aspect-video absolute bg-gradient-to-r from-black text-white'>
            <h1 className='font-bold text-3xl'>{title}</h1>
            <p className='py-5 w-1/2'>{overview}</p>
            <div>
                <button className='px-6 py-4 bg-white text-lg text-black rounded-lg'>▶️Play</button>
                <button className='mx-5 px-4 py-4 bg-gray-500 text-lg text-white opacity-65 rounded-lg'>More info</button>
            </div>

        </div>
    )
}

export default VideoTitle