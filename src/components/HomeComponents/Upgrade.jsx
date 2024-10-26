import React from 'react';
import './styles/Upgrade.css';
import Background from '../../assets/img/Background Hero.svg';

const Upgrade = () => {
  return (
    <div className='Upgrade'>
      <img className='hero-image' src={Background} alt="Hero Background" />
      <div className='hero-container'>
        <div className='hero-section'>
          <h1>
            Learn from the best, be your best..
          </h1>
          <p>Give yourself an upgrade with our inspiring online courses and join a global community of learners</p>
          <a href="/" aria-label='Get Start'>Get Started</a>
        </div>
      </div>
    </div>
  );
}

export default Upgrade;