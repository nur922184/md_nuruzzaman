import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Mainlayout/Mainlayout';
import Home from '../Pages/home/Home';
import AboutPage from '../Pages/About/AboutPage';
import Blog from '../Pages/Blog/Blog';
import ServicesPage from '../Pages/Service/ServicesPage';
import ErrorPage from '../Pages/ErrorPage';

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
            {
                path: "/service",
                element: <ServicesPage></ServicesPage>,
            },
        ]    
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },

]);
export default Router;


