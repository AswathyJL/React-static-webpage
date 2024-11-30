import React, { useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import homeImg from '../assets/home.png'


const Home = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
          duration: 1000,  // Duration of the animation
          once: false,      // Whether animation should happen only once
        });
      }, []);
  return (
    <section id="home" className=" bg-light">
    <div className="w-100 px-5">
      <Row className="align-items-center w-100 ps-lg-5">
        {/* Left Column */}
        <Col md={6} className="my-5 ps-5 " data-aos="fade-right">
            <h1 className="fw-bold mb-3">Welcome to Gleam & Grace</h1>
            <p className="lead text-muted mb-4">
              Discover timeless elegance and exquisite craftsmanship in every piece. Your journey to find the perfect jewel begins here.
            </p>
            <Button variant="dark" size="lg" href="#collections">
              Explore Collections
            </Button>
        </Col>
        {/* Right Column */}
        <Col md={6} className="h-100" data-aos="fade-left">
            <img
              style={{ objectFit: 'cover', objectPosition: 'top', width: 'auto', height: '100%' }}
              src={homeImg}
              alt="Jewellery Showcase"
              className="img-fluid"
            />
        </Col>
      </Row>
    </div>
  </section>
  )
}

export default Home