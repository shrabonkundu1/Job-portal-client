import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../pages/shared/Navbar';
import Footer from '../../pages/Footer/Footer'
const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto border-5 border-red-500'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;