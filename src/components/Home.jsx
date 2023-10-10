import React from 'react';
import Navbar from './Navbar';
import Featured from './Featured';
import RecommendationCar from './RecommendationCar';
import Footer from './Footer';
import PopularCar from './PopularCar';
import FilterCar from './FilterCar';
const Home = () => {
    return (
        <>
        <Navbar/>
        <Featured/>
        <FilterCar/>
        <PopularCar/>
        <RecommendationCar/>
        <Footer/>
        </>
    );
};

export default Home;
