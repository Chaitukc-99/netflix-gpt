
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { Api_Options } from '../Components/constants'
import { useDispatch } from 'react-redux'
import { addNowPlaying } from '../utils/movieSlice'

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", Api_Options)
        const json = await data.json()
        console.log(json.results)
        dispatch(addNowPlaying(json.results))

    }

    useEffect(() => {
        getNowPlayingMovies()
    }, [])
}

export default useNowPlayingMovies