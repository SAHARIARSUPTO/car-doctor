import React from 'react';
import Banner from "./Banner.jsx";
import About from './About';
import Services from './Services.jsx';
import Footer from './Footer.jsx';
import Whychoose from './Whychoose.jsx';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Whychoose></Whychoose>
        </div>
    );
};

export default Home;