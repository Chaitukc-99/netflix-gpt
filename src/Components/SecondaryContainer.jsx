import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {

    const getMovieList = useSelector(store => store.movie)

    if (!getMovieList) return;

    console.log(getMovieList.popular)

    return (
        <div className='bg-black'>
            <div className='-mt-80 relative z-30 pl-10'>
                <MovieList title="Now Playing" list={getMovieList?.nowPlaying} />
                <MovieList title="Popular" list={getMovieList?.popular} />
                <MovieList title="Most Watched" list={getMovieList?.nowPlaying} />
                <MovieList title="Recently Added" list={getMovieList?.nowPlaying} />
            </div>

        </div>
    )
}

export default SecondaryContainer