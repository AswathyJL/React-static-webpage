import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'


const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          Gleam & Grace
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#about" className="mx-2">About</Nav.Link>
            <Nav.Link href="#popular" className="mx-2">Popular</Nav.Link>
            <Nav.Link href="#testimonials" className="mx-2">Testimonials</Nav.Link>
            <Nav.Link href="#contact" className="mx-2">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header