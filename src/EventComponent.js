import React from "react";
import { Card, Button } from "react-bootstrap";

function EventComponent() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <Card style={{ width: '18rem', backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' }}>
                            <Card.Img src="https://www.highspot.com/wp-content/uploads/Hackathon.png" style={{ transform: 'scale(1)' }} />
                            <Card.Body>
                                <Card.Title>WorkShop + Cultural Night</Card.Title>
                                <Card.Text>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <p>Timing: 9:00AM-12:00PM</p>
                                    <p>Date: dd-mm-yyyy</p>
                                    <p>Price: 1000/-</p>
                                </Card.Text>
                                <Button variant="outline-success">Proceed to Payment</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6">
                        <Card style={{ width: '18rem', backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' }}>
                            <Card.Img src="culturalnight.png"
                                style={{ transform: 'scale(1)' }}
                            />
                            <Card.Body>
                                <Card.Title>Cultural Night + Concert</Card.Title>
                                <Card.Text>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <p>Timing: 6:00PM-10:00PM</p>
                                    <p>Date: dd-mm-yyyy</p>
                                    <p>Price: 1500/-</p>
                                </Card.Text>
                                <Button variant="outline-success">Proceed to Payment</Button>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default EventComponent;