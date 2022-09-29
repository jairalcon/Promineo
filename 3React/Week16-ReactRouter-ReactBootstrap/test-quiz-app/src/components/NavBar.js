import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import F1Logo from './assets/F1LOGO.png';
import F1Logo2 from './assets/f1_logo.svg';

export const NavBar = () => {
    return (
        <>
            <Navbar className='color-nav rounded' variant='dark' expand="sm">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt="formula 1"
                            src={F1Logo2}
                            width="50"
                            height="50"
                            className=""
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
                        </Nav>
                        <Navbar.Text>
                            {/* //todo import props to display username */}
                            Taking quiz as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}