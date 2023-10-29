import React from 'react'
import daimond1 from './images/g1.jpg'
import daimond2 from './images/g.jpg'
import daimond3 from './images/thali.jpg'


import diya from './images/diya-3-removebg-preview.png'
import diya2 from './images/diya2-removebg-preview.png'
import diya5 from './images/diya1-removebg-preview.png'

const ServiceH = () => {
  return (
    <div className='serviceh'>
      <div className="serviceh-container">
      <div className="headline">
      <img src={diya2} alt="" className='diya2'/>
      <img src={diya5} alt="" className='diya5'/>
            <img src={diya} alt="" className='diya'/>
            DIWWALI COLLECTION
            <img src={diya} alt="" className='diya-1' />
            <img src={diya5} alt="" className='diya5-1' />
            <img src={diya2} alt="" className='diya2-1'/>
           </div>
        <div className="serviceh-layout">
          <div className="serviceh-img">
            <img src={daimond1} alt="" />
          </div>
          <div className="serviceh-img">
            <img src={daimond2} alt="" />
          </div>
          <div className="serviceh-img">
            <img src={daimond3} alt="" />
          </div>
          <div className="serviceh-img">
            <img src={daimond1} alt="" />
          </div>
          <div className="serviceh-img">
            <img src={daimond2} alt="" />
          </div>
          <div className="serviceh-img">
            <img src={daimond3} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceH
