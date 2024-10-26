import React from 'react'
import './styles/Footer.css';
const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <h1>LearnHub</h1>
        <p>	&#169; 2022 Tailwind Labs Inc. All rights reserved.</p>
        <div className='next-pages'>
          <a href="/admin">Form</a>
          <div className='seperater'></div>
          <a href="/">Notes</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
