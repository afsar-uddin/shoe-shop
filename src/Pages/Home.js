import React from 'react';
import Header from '../components/Header';
import Products from '../components/HomeComps/Products';
import NewsLetter from '../components/HomeComps/NewsLetter';

const Home = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <Header />
            <Products />
            <NewsLetter />
        </div>
    );
};

export default Home;