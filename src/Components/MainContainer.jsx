import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movieData = useSelector((store) => store.movie?.nowPlaying)

    if (!movieData) return;

    const mainMovie = movieData[0];
    console.log(mainMovie);

    const { original_title, overview, id } = mainMovie
    return (
        <div className=''>
            <VideoTitle title={original_title} overview={overview}></VideoTitle>
            <VideoBackground id={id}></VideoBackground>
        </div>
    )
}

export default MainContainer