import React from 'react';
import banner from '../../../images/banner.jpg'
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <ChooseUs />
        </>
    );
};

export default Home;