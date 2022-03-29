import React from 'react';
import Header from '../components/Header';
import Products from '../components/HomeComps/Products';

const Home = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <Header />
            <Products />
        </div>
    );
};

export default Home;