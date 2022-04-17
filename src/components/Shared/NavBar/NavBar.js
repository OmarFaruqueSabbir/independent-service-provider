import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../images/cake.svg"


const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <div className='d-flex justify-content-center align-items-center'>
                            <span className='pe-2' style={{ color: 'orange', fontSize:'28px',fontWeight: 'lighter',fontFamily:'merienda' }}>Sabbir Bake's</span>
                            <img src={logo} height={35} alt="" />
                        </div>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link style={{fontSize:'18px'}} className='navlink' href="#services">Services</Nav.Link>
                            <Nav.Link style={{fontSize:'18px'}}  className='navlink' href="blogs">Blogs</Nav.Link>
                            <Nav.Link style={{fontSize:'18px'}}  className='navlink' href="About">About</Nav.Link>
                            <Nav.Link style={{fontSize:'18px'}}  className='navlink' as={Link} to='/login'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>



    );
};

export default NavBar;