import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import FoodCarousel from './FoodCarousel/FoodCarousel';
import Boss from './Boss/Boss';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <FoodCarousel></FoodCarousel>
            <Boss></Boss>
        </div>
    );
};

export default Home;