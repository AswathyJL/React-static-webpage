import React, { useEffect } from 'react'
import '../styles/Trending.css'
import rings from '../assets/trending/rings.png'
import chains from '../assets/trending/chains.png'
import earrings from '../assets/trending/earrings.png'
import bracelets from '../assets/trending/bracelet.png'
import necklaces from '../assets/trending/necklace.png'
import anklets from '../assets/trending/anklet.png'
import { Col, Container, Row } from 'react-bootstrap'


const trendingItems = [
    { name: 'Diamond Rings', image: rings },
    { name: 'Gold Chains', image: chains },
    { name: 'Silver Earrings', image: earrings },
    { name: 'Platinum Bracelets', image: bracelets },
    { name: 'Ruby Necklaces', image: necklaces },
    { name: 'Sapphire Anklets', image: anklets },
  ];

const Trending = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
        //   duration: 1000,  // Duration of the animation
          once: false,      // Whether animation should happen only once
        });
      }, []);
  return (
    <section id="trending" className="trending-collections">
    <h2 className="text-center mb-5 fw-semibold">Top Trending Collections</h2>
    <Container>
        <div className='mx-3'>
            <Row >
                {trendingItems.map((item, index) => (
                    <Col 
                        key={index} 
                        xs={12} 
                        sm={6} 
                        md={4} 
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                    >
                        <div className="trending-item">
                            <div className="trending-image-wrapper">
                                <img
                                    src={item.image}
                                    alt={`Image of ${item.name}`}
                                    className="trending-image"
                                />
                            </div>
                            <p className="trending-name">{item.name}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    </Container>
    <div className="text-center mt-4">
            <button
                style={{ fontSize: '1rem' }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="btn btn-link text-dark"
            >
                Explore More
            </button>
        </div>
</section>
  )
}

export default Trending