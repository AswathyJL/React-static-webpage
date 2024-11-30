import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import aboutImg from '../assets/about.png'

const About = () => {
  return (
    <section id="about" className="bg-light shadow">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="my-4 mb-md-0" data-aos="fade-right">
            <h2 className="fw-bold mb-3">About Gleam & Grace</h2>
            <p className="text-muted lead">
              At Gleam & Grace, we craft more than just jewellery — we create timeless treasures. Each piece reflects elegance, fine craftsmanship, and a story of beauty. Explore our collections to find the perfect accessory for every occasion.
            </p>
            <Button variant="dark" size="lg" href="#collections">
              Explore All
            </Button>
          </Col>
          <Col md={6} data-aos="fade-left">
            <img
              src={aboutImg} // Replace with an actual image
              alt="About Gleam & Grace"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About