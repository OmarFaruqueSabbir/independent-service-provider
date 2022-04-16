import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../../images/cake.svg"

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className='d-flex justify-content-center align-items-center'>
                            <span className='pe-2' style={{ color: 'orange', fontSize:'25px',fontWeight:'bold' }}>Sabbir Bakes</span>
                            <img src={logo} height={35} alt="" />
                        </div>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="#features">Services</Nav.Link>
                            <Nav.Link href="#pricing">Blogs</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#deets">Login</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>



    );
};

export default NavBar;