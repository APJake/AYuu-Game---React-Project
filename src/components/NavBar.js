import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">အရူးစာရင်း</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link href="/summary">Summary</Nav.Link>
                        <Nav.Link eventKey={2} href="/login">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
