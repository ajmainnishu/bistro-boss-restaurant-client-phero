import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import FoodCarousel from './FoodCarousel/FoodCarousel';
import Boss from './Boss/Boss';
import CallUs from './CallUs/CallUs';
import OurMenu from './OurMenu/OurMenu';
import Testimonials from './Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='space-y-20 md:space-y-32'>
            <Helmet>
                <title>Bistro Boss Restaurant</title>
            </Helmet>
            <HomeBanner></HomeBanner>
            <div className='w-10/12 lg:w-9/12 mx-auto space-y-20 md:space-y-32'>
                <FoodCarousel></FoodCarousel>
                <Boss></Boss>
                <CallUs></CallUs>
            </div>
            <OurMenu></OurMenu>
            <div className='w-10/12 lg:w-9/12 mx-auto'>
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;