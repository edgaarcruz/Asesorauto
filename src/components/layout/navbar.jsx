import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import Navbar  from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../../resources/images/layout/asesorauto.png'
const App = () => (
    <Navbar expand="md" className="navbar">
        <Navbar.Brand href="#home" ><img src={Logo} className="navbar-logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home" className="navlink">CATALAGO</Nav.Link>
                    <Nav.Link href="#link" className="navlink">SOFTWARE</Nav.Link>
                    <Nav.Link href="#link" className="navlink">TALLER</Nav.Link>
                    <Nav.Link href="#link" className="navlink">CAPACITACIONES</Nav.Link>
                    <Nav.Link href="#link" className="navlink">CONTACTO</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 navlink" />
                    <Button variant="info">Search</Button>
                </Form>
                <FontAwesomeIcon icon="shopping-cart" size="lg" className="icon navlink"/>
            </Navbar.Collapse>
    </Navbar>
);

export default App;
