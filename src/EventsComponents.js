import React from "react";
import { Carousel } from "react-bootstrap";

function EventsComponent() {
    return (
        <Carousel className="Carousel">
            <Carousel.Item>
                <img
                    className="d-block w-100 carouselImage"
                    alt="Workshop"
                    src="https://www.highspot.com/wp-content/uploads/Hackathon.png"
                    style={{ opacity: "0.7" }}
                />
                <Carousel.Caption>
                    <h3 className="header">Workshop</h3>
                    <p className="header">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carouselImage"
                    alt="Cultural Night Image"
                    src="https://jta.live/wp-content/uploads/sites/4/2021/05/20210516-SJC-Cultural-Night.00_15_33_38.Still001.jpg"
                    style={{ opacity: "0.7" }}
                />
                <Carousel.Caption>
                    <h3>Cultural Night</h3>
                    <p className="home">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 carouselImage"
                    alt="Concert"
                    src="https://joelthoughts.files.wordpress.com/2014/06/concert-stock3112.jpg"
                    style={{ opacity: "0.7" }}
                />
                <Carousel.Caption>
                    <h3>Concert</h3>
                    <p className="home">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default EventsComponent;