import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MainHeader2() {
    return (
        <>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
    <Link to = "/">Home</Link>    
    <Link to = "/login">Login</Link>
    </Nav>
    </Container>
    </Navbar>
        </>
    )
}

export default MainHeader2
