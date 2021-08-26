import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function MainHeader1() {
    return (
        <>
    <Navbar bg="primary" variant="dark">
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

export default MainHeader1
