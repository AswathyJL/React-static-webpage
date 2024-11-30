import React from 'react'
import { Carousel, Container } from 'react-bootstrap'

const Testimonial = () => {
  return (
    <section id="testimonials" className="d-flex justify-content-center align-items-center" style={{height:'28rem'}}>
      <Container className="d-flex justify-content-center align-items-center">
        <div className="testimonial-slider w-75">
          <h2 className="fw-bold text-center mb-5">What Our Clients Say</h2>
          <Carousel style={{height:'75%'}} data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-duration="1000" interval={2000} controls={false} indicators={true} className="shadow pt-5 px-5 mb-4">
            {/* Slide 1 */}
            <Carousel.Item  style={{height:'100%'}}>
              <div className="text-center">
                <p className="lead fst-italic text-muted">
                  "Gleam & Grace has the most exquisite collection I've ever seen. The craftsmanship is unmatched, and every piece tells a story."
                </p>
                <h5 className="fw-bold">- Emma Watson</h5>
              </div>
            </Carousel.Item>
            {/* Slide 2 */}
            <Carousel.Item  style={{height:'100%'}}>
              <div className="text-center">
                <p className="lead fst-italic text-muted">
                  "I found the perfect ring for my engagement. The team at Gleam & Grace was so helpful and knowledgeable!"
                </p>
                <h5 className="fw-bold">- John Doe</h5>
              </div>
            </Carousel.Item>
            {/* Slide 3 */}
            <Carousel.Item  style={{height:'100%'}}>
              <div className="text-center">
                <p className="lead fst-italic text-muted">
                  "Their attention to detail and customer service make them my go-to jeweller. Highly recommend!"
                </p>
                <h5 className="fw-bold">- Sophia Lee</h5>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </section>
  )
}

export default Testimonial