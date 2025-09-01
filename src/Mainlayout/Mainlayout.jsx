import React from 'react';
import Navber from '../component/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/footer/Footer';

const Mainlayout = () => {
    return (
        <div>
            <Navber></Navber>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;