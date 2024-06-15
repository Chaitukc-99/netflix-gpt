/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import useMovieTrailer from '../Customhooks/useMovieTrailer'
import { useSelector } from 'react-redux'

const VideoBackground = ({ id }) => {
    const videoData = useSelector(store => store.movie?.trailerVideos)
    useMovieTrailer(id)



    return (
        <div>
            <iframe className='w-screen aspect-video'
                src={"https://www.youtube.com/embed/" + videoData?.key + "?&autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div>
    )
}

export default VideoBackground