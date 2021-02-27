import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './home.css'

import NavigationBar from './navbar/NavigationBar';
import CarouselR from './carousel/CarouselR';
import Notice from './notice/Notice';
import Footer from './footer/Footer';

const Home = () => {

    return (
        <div>
            <NavigationBar></NavigationBar>
            <CarouselR />
            <Notice />
            <Footer />
        </div>
    )
    }
export default Home;