import React from 'react'
import Navbarmain from './Navbarmain';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import CarouselComponent from './CarouselComponent';
import { useEffect, useState } from "react";
import axios from 'axios';

function HomeComponent() {

    const [user, setUser] = useState("");

    useEffect(() => {
        axios.get("/auth/login/success")
            .then(resObject => setUser(resObject.data.user))
            .catch(err => console.log(err))

    }, [])

    console.log(user);

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