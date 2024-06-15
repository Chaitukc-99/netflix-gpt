import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name: 'movie',
        initialState: {
            nowPlaying: null,
            trailerVideos: null,
        },
        reducers: {
            addNowPlaying: (state, action) => {
                state.nowPlaying = action.payload
            },
            addPopular: (state, action) => {
                state.popular = action.payload
            },
            addTrailers: (state, action) => {
                state.trailerVideos = action.payload
            }
        }

    }
)

export const { addNowPlaying, addTrailers, addPopular } = movieSlice.actions
export default movieSlice.reducer;