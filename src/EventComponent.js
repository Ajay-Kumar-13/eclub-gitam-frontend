import React from "react";
import { Card, Button } from "react-bootstrap";

function EventComponent() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <Card style={{ width: '18rem',  backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' }}>
                            <Card.Img src="https://www.highspot.com/wp-content/uploads/Hackathon.png" style={{transform:'scale(1)'}}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-4">
                        <Card style={{ width: '18rem', backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' }}>
                            <Card.Img src="https://jta.live/wp-content/uploads/sites/4/2021/05/20210516-SJC-Cultural-Night.00_15_33_38.Still001.jpg"
                                 style={{transform:'scale(1)'}}
                            />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-4">
                        <Card style={{ width: '18rem',  backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' }}>
                            <Card.Img src="https://joelthoughts.files.wordpress.com/2014/06/concert-stock3112.jpg"
                                style={{transform:'scale(1)'}}
                            />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EventComponent;