import React from 'react'
import bangles from '../assets/jewlleryBanner/bangles.png'
import chains from '../assets/jewlleryBanner/chains.png'
import earrings from '../assets/jewlleryBanner/earrings.png'
import rings from '../assets/jewlleryBanner/rings.png'
import bracelets from '../assets/jewlleryBanner/bracelet.png'
import necklaces from '../assets/jewlleryBanner/necklace.png'
import anklets from '../assets/jewlleryBanner/anklets.png'
import '../styles/JewelleryBanner.css';

const jewelryTypes = [
    { name: 'Bangles', image: bangles },
    { name: 'Chains', image: chains },
    { name: 'Earrings', image: earrings },
    { name: 'Rings', image: rings },
    { name: 'Bracelets', image: bracelets },
    { name: 'Necklaces', image:necklaces },
    { name: 'Anklets', image: anklets },
  ];

const JewelleryBanner = () => {
  return (
    <section id="jewelry" className="jewelry-section">
    <div className="jewelry-container" data-aos="zoom-in-up">
      {jewelryTypes.map((item, index) => (
        <div key={index} className="jewelry-item">
          <div className="jewelry-image-wrapper">
            <img
              src={item.image}
              alt={item.name}
              className="jewelry-image"
            />
          </div>
          <p className="jewelry-name">{item.name}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default JewelleryBanner