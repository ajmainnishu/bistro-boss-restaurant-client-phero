import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import FoodCarousel from './FoodCarousel/FoodCarousel';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <FoodCarousel></FoodCarousel>
        </div>
    );
};

export default Home;