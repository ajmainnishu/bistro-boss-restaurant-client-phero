import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import FoodCarousel from './FoodCarousel/FoodCarousel';
import Boss from './Boss/Boss';
import CallUs from './CallUs/CallUs';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <FoodCarousel></FoodCarousel>
            <Boss></Boss>
            <CallUs></CallUs>
        </div>
    );
};

export default Home;