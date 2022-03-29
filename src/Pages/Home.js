import React, { useEffect } from 'react';
import Header from '../components/Header';
import Products from '../components/HomeComps/Products';
import NewsLetter from '../components/HomeComps/NewsLetter';
import Contact from '../components/HomeComps/Contact';
import Footer from '../components/Footer';

const Home = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <Header />
            <Products />
            <NewsLetter />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;