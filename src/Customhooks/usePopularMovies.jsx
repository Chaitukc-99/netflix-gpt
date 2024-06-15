/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { Api_Options } from '../Components/constants'
import { useDispatch } from 'react-redux'
import { addPopular } from '../utils/movieSlice'

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", Api_Options)
        const json = await data.json()
        console.log(json.results)
        dispatch(addPopular(json.results))

    }

    useEffect(() => {
        getPopularMovies()
    }, [])
}

export default usePopularMovies;