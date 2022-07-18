import React from 'react'
import Navbarmain from './Navbarmain';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import CarouselComponent from './CarouselComponent';

function HomeComponent() {

    // Collapse isOpen State
    

    return (
        <React.Fragment>
            <Navbarmain />
            <Jumbotron />
            <CarouselComponent />
            <Footer />
        </React.Fragment>
    );
}

export default HomeComponent;