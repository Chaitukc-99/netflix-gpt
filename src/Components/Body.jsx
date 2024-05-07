import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Header'
import Login from './Login'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Header />
        },
        {
            path: '/browse',
            element: <Login />
        },
    ])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}



export default Body;