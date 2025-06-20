import React from 'react';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'
import logo from '../assets/logo.png'

const AuthLayout = () => {
    return (
        <div className="p-12 bg-base-200">
            <div>
                <div className='flex items-end'>
                    <img className='mb-2' src={logo} alt="" />
                    <p className='text-3xl font-extrabold -ml-4 mt-3'>ProFast</p>
                </div>
            </div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <img
                        src={authImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;