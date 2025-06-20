import React from 'react';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Brands from '../components/Brands';
import Benefits from '../components/Benefits';
import BeMerchant from '../components/BeMerchant';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Brands />
            <Benefits />
            <BeMerchant />
        </div>
    );
};

export default Home;