import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignOutLink from '../SignOut';

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
                        <Link to={ROUTES.HOME} className="nav-link">Home </Link>
                        <Link to={ROUTES.LANDING} className="nav-link">Landing</Link>
                        <Link to={ROUTES.ACCOUNT} className="nav-link" >Account</Link>
                        <Link to={ROUTES.ADMIN} className="nav-link">Admin</Link>
                        <Link to={ROUTES.SIGN_IN}className="nav-link" >Sign In</Link>
                        <SignOutLink />
                    </Nav> 
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </div>
);

export default Navigation;