import React from 'react';
import Header from '../components/Header';
import Products from '../components/HomeComps/Products';
import NewsLetter from '../components/HomeComps/NewsLetter';
import Contact from '../components/HomeComps/Contact';

const Home = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <Header />
            <Products />
            <NewsLetter />
            <Contact />
        </div>
    );
};

export default Home;