import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4">
    <Container>
      <Row>
        <Col md={6} className="mb-3">
          <h5 className="fw-bold">Gleam & Grace</h5>
          <p >
            Explore our elegant collection of jewelry and find the perfect piece to complement your style.
            Gleam & Grace - where timeless elegance meets modern trends.
          </p>
        </Col>
        <Col md={3} className="mb-3 d-flex flex-column align-items-center">
          <h5 className="fw-bold">Quick Links</h5>
          <ul className="list-unstyled ms-5">
            <li><a href="#about" className="text-dark text-decoration-none">About Us</a></li>
            <li><a href="#popular" className="text-dark text-decoration-none">Popular Collections</a></li>
            <li><a href="#testimonials" className="text-dark text-decoration-none">Testimonials</a></li>
            <li><a href="#contact" className="text-dark text-decoration-none">Contact Us</a></li>
          </ul>
        </Col>
        <Col md={3} className="mb-3 text-center">
          <h5 className="fw-bold">Follow Us</h5>
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="me-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark fs-5">
                <FaFacebook />
              </a>
            </li>
            <li className="me-3">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark fs-5">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark fs-5">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <div className="text-center mt-3">
        <small>&copy; 2024 Gleam & Grace. All Rights Reserved.</small>
      </div>
    </Container>
  </footer>
  )
}

export default Footer