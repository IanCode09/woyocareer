import React from 'react'
import { Container, Navbar, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to='/'>
                            <Image src={Logo} style={{width: '100px'}} />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Tentang</Nav.Link>
                            <Nav.Link href="#link">Daftar</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
