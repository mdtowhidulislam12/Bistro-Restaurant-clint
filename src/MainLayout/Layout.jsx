import React from 'react';
import { Outlet } from 'react-router';

import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Header/Navbar';

const Layout = () => {
    return (
        <div className='max-w-[90%] mx-auto'>

            <Navbar></Navbar>

            
            <main className='min-h-56'>
            <Outlet></Outlet>
            </main>
            


            <Footer/>

        </div>
    );
};

export default Layout;