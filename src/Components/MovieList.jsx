import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({ title, list }) => {

    if (!list) return;


    return (
        <div className='p-4'>
            <h1 className='text-3xl py-4 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {
                        list.map(movie => (
                            <MovieCards key={movie.id} path={movie?.poster_path} />

                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default MovieList