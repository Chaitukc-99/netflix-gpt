/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux"
import { addTrailers } from "../utils/movieSlice"
import { useEffect } from "react"
import { Api_Options } from "../Components/constants"

const useMovieTrailer = (id) => {

    const dispatch = useDispatch()
    const getVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US', Api_Options)
        const json = await data.json()
        console.log(json)

        const filteredData = json.results.filter(data => data.type === "Trailer")
        const trailerData = filteredData ? filteredData[0] : json.results[0]
        console.log(trailerData)
        dispatch(addTrailers(trailerData))
    }
    useEffect(() => {
        getVideos()
    }, [])
}

export default useMovieTrailer;