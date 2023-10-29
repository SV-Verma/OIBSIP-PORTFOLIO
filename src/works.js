import React from 'react'
import { Link } from 'react-router-dom'
import ServiceH from './ServiceH'

const works = () => {
  return (
    <>
    <div className='works'>
    <ServiceH />
        <div className="overlay"></div>
      <div className="works-container">
        <h1>
          I am  
          <span> Available </span> 
          For Startup Expasion
        </h1>
        <p> I specialize in crafting exceptional user experiences 
          through frontend development</p>
          <Link to="/Contact">
          <button>Contact Us</button>
          </Link >
      </div>
    </div>
    </>
  )
}

export default works
