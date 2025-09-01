import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Mainlayout/Mainlayout';
import Home from '../Pages/home/Home';
import AboutPage from '../Pages/About/AboutPage';
import Blog from '../Pages/Blog/Blog';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <AboutPage></AboutPage>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
        ]    
    },
    {
        path: "*",
        element: <h1 className='text-center align-middle'>error page</h1>,
    },

]);
export default Router;


