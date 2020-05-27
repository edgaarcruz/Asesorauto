import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import Navbar  from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const App = () => (
    <Navbar bg="light" expand="md" className="navbar" variant="dark">
        <Navbar.Brand href="#home">Asesorauto Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home" className="link">CATALAGO</Nav.Link>
                    <Nav.Link href="#link">SOFTWARE</Nav.Link>
                    <Nav.Link href="#link">TALLER</Nav.Link>
                    <Nav.Link href="#link">CAPACITACIONES</Nav.Link>
                    <Nav.Link href="#link">CONTACTO</Nav.Link>
                    <FontAwesomeIcon icon="search" size="lg" className="icon"/>
                    <FontAwesomeIcon icon="shopping-cart" size="lg" className="icon"/>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
);

export default App;
