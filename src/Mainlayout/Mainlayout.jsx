import React from 'react';
import Navber from '../component/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/footer/Footer';

const Mainlayout = () => {
    return (
        <div className='bg-gradient-to-r from-[#BBD2C5] via-[#536976] to-[#536976]'>
            <Navber></Navber>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;