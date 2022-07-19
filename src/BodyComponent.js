import { Button, Modal, Form, ModalBody } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function BodyComponent() {

    function googleAuth() {
        window.open("http://localhost:3001/auth/google","_self");
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    return (
        <div className="about">
            <img
                src="carnival.png"
                width="500"
                height="500"
                className="d-inline-block align-top"
                alt="e-club logo"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Button variant="danger" className="login" onClick={googleAuth}>Login with Gitam</Button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>User Details</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Registration Number</Form.Label>
                            <Form.Control type="email" placeholder="Enter Registration Number" />
                            <Form.Text className="text-muted">
                                We'll never share your Details with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Select Year</Form.Label>
                            <Form.Select>
                                <option>First</option>
                                <option>Second</option>
                                <option>Third</option>
                                <option>Fourth</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </ModalBody>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>Close</Button>
                    <Button variant="outline-primary" onClick={() => navigate('home')}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default BodyComponent;