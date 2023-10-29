import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import FoodCarousel from './FoodCarousel/FoodCarousel';
import Boss from './Boss/Boss';
import CallUs from './CallUs/CallUs';
import OurMenu from './OurMenu/OurMenu';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <FoodCarousel></FoodCarousel>
            <Boss></Boss>
            <CallUs></CallUs>
            <OurMenu></OurMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;