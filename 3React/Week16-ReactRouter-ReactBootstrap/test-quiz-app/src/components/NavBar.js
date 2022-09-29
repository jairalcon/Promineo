import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './assets/F1-LOGO.png';

export const NavBar = () => {
    return (
        <>
            <Navbar className='color-nav' expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt="formula 1 logo"
                            src="./assets/F1-LOGO.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        F 1</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
