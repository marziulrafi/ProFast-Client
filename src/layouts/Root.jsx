import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div className='flex flex-col gap-10'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;