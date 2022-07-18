import React from "react";
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

function Jumbotron() {
    const navigate = useNavigate();
    return (
        <div className="jumbotron">
            <div className="container">
                <div className="row" style={{alignItems:"center"}}>
                    <div className="col-12 col-sm-6">
                        <h1 className="header">E-CLUB</h1>
                        <h3 className="header">Unleash your Entreprenerial Spirit</h3>
                        <p className="home">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="col-12 col-sm-3">
                        <img
                            src="https://s4.aconvert.com/convert/p3r68-cdx67/adj99-mwlxy.svg"
                            className="d-inline-block align-top elogo"
                            width="300"
                            alt="carnival-logo"
                            style={{left:0}}
                        />
                    </div>
                    <div className="col-12 col-sm-3">
                        <Button variant="outline-dark" style={{padding:"15px", fontWeight:"bold"}} onClick={() => navigate('/register')}>Register for Event</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;