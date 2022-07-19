import React, { useState } from "react";
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';
import { Modal, Button, Form } from "react-bootstrap";

function Navbarmain() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Navbar color="light" light >
            <div>
                <NavbarToggler className="toogleButton" onClick={() => { setIsOpen(!isOpen) }} />
                <NavbarBrand>
                    <img
                        src="https://vdc.gitam.edu/eclub_ui/asset/logos/transeclublogo.png"
                        className="d-inline-block align-top elogo"
                        alt="eclub-logo"
                        width="350"
                        height="100"
                    />
                </NavbarBrand>
            </div>
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="home" href='/home'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="home" href="/register">Carnival Pass</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="home" onClick={handleShow}>Contact Us</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            <div style={{ position: "absolute", right: 0, top: 0 }}>
                <img
                    src="https://vdc.gitam.edu/main_ui/images/logo/GITAM_logo.png"
                    width="300"
                    height="100"
                    className="d-inline-block align-top elogo ms-auto"
                    alt="gitam-logo"
                />
            </div>
            <div style={{ position: "absolute", right: 250, top: 0 }}>
                <img
                    src="https://vdc.gitam.edu/main_ui/images/logo/red_vdc.png"
                    width="300"
                    height="100"
                    className="d-inline-block align-top elogo ms-auto"
                    alt="vdc-logo"
                />
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Contact Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Registration Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Registration Number" />
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Name" />
                            <Form.Text className="text-muted">
                                We'll never share your Details with anyone else.
                            </Form.Text><br />
                            <Form.Label>Query</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Query" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="outline-success">Send</Button>
                </Modal.Footer>
            </Modal>
        </Navbar>
    )
}

export default Navbarmain;