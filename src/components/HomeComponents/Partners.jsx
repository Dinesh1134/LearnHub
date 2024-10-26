import React from 'react'
import airbnb from '../../assets/img/airbnb.png'
import client from '../../assets/logo/client-8.png'
import Lifegroups from '../../assets/logo/Lifegroups.png'
import myob from '../../assets/logo/myob.png'
import tailus from '../../assets/img/tailus.png'
import microsoft from '../../assets/img/microsoft.png'
import coty from '../../assets/img/coty.png'
import lilly from '../../assets/logo/lilly.png'

import './styles/Partners.css';
const Partners = () => {
  return (
    <div className='Partners'>
      <div className='partner-container'>
        <div className='partner-content'>
          <h2>Our Placement Partners</h2>
          <div className='brands'>
          <div className='img1'><img src={airbnb} alt="airbnb-img" /></div>
          <div className='img2'><img src={client} alt="client-img" /></div>
          <div className='img3'><img src={Lifegroups} alt="Lifegroups-img" /></div>
          <div className='img4'><img src={myob} alt="myob-img" /></div>
          <div className='img5'><img src={tailus} alt="tailus-img" /></div>
          <div className='img6'><img src={microsoft} alt="microsoft-img" /></div>
          <div className='img7'><img src={coty} alt="coty-img" /></div>
          <div className='img8'><img src={lilly} alt="lilly-img" /></div>
          </div>
        </div>
      </div>
      <p className='more'>and, more companies</p>
    </div>
  )
}

export default Partners
