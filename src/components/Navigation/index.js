import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
    <div>
        <Container >
            <Navbar fixed="top" bg="dark" variant="dark" expand="md" collapseOnSelect="true" >
                <Navbar.Brand>
                    <Link to="/" >
                        <span><strong>RM</strong></span>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto body-text" >
                        <Nav.Link to={ROUTES.HOME} >Home</Nav.Link>
                        <Nav.Link to={ROUTES.LANDING} >Landing</Nav.Link>
                        <Nav.Link to={ROUTES.ACCOUNT} >Account</Nav.Link>
                        <Nav.Link to={ROUTES.ADMIN} >Admin</Nav.Link>
                        <Nav.Link to={ROUTES.SIGN_IN} >Sign In</Nav.Link>
                    </Nav> 
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </div>
);

export default Navigation;