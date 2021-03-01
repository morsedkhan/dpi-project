import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './home.css'

import NavigationBar from './navbar/NavigationBar';
import CarouselR from './carousel/CarouselR';
import Notice from './notice/Notice';
import Footer from './footer/Footer';
import Message from './message/Message';
import NewsDialoug from './newsDialoug/NewsDialoug'
import Department from './department/Department';

const Home = () => {

    return (
        <div style={{background:'rgb(230, 227, 227)'}}>
            <NavigationBar/>
            <CarouselR/>
            <Notice/>
            <Message/>
            <NewsDialoug></NewsDialoug>
            <Department/>
            <Footer/>
        </div>
    )
    }
export default Home;