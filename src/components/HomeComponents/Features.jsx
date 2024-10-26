import React from 'react'
import './styles/Features.css'
import medal from '../../assets/logo/medal.svg'
import thought from '../../assets/logo/thought.png'
import training from '../../assets/logo/training.png'
import AboutDashboard from '../../assets/img/AboutDashboard.png'

const Features = () => {
  return (
    <section className='Features'>
      <div className='features-container'>
        <div className='feature-header'>
          <p>Open Source Theme and UI Components</p>
          <h2>Geaux Astro helps you craft beautiful websites efficiently</h2>
        </div>
        <div className='feature-content'>
          <div className='feature-things'>
            <div className='thing1'>
              <img src={medal} alt="medal-img" />
              <div className='thing-info1'>
                <h3>Certificate Distribution</h3>
                <p>We offer certificates to validate and recognize your achievement.</p>
              </div>
            </div>

            <div className='thing2'>
              <img src={thought} alt="thought-img" />
              <div className='thing-info2'>
                <h3>Knowledge</h3>
                <p>We deliver transformative knowledge that empowers and inspires.</p>
              </div>
            </div>

            <div className='thing3'>
              <img src={training} alt="training" />
              <div className='thing-info3'>
                <h3>Hands-on Experience</h3>
                <p>We provide hands-on experience for real-world learning. You learn best by doing.</p>
              </div>
            </div>

          </div>
          <div className='feature-image'>
            <img src={AboutDashboard} alt="AboutDashboard-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

