/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from '../Customhooks/useNowPlayingMovies'
import usePopularMovies from '../Customhooks/usePopularMovies'

const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();

    return (
        <div className=''><Header />
            <MainContainer />
            <SecondaryContainer />

        </div>
    )
}

export default Browse