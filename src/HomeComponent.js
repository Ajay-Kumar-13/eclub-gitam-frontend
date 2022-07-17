import React from 'react'
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import EventsComponent from './EventsComponents';

function HomeComponent() {

    // Collapse isOpen State
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <React.Fragment>
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
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Carnival Pass</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Contact Us</NavLink>
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
            </Navbar>
            <Jumbotron />
            <EventsComponent />
            <Footer />
        </React.Fragment>
    );
}

export default HomeComponent;