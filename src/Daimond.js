import React from 'react'
import deviceV from './Vedios/movie2.mp4'

const Daimond = () => {
  return (
    <>
    <div className="daimond">
        <div className="daimond-main">
            <div className="daimond-left">
              <div className="daimond-image">
              <video  autoPlay playsInline muted loop>
                  <source src={deviceV} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="daimond-right">
              <h2>Certified Diamond Jewelers
                <br />Your Trusted Source for Excellence</h2>
              <p>We pride ourselves on sourcing only the finest, ethically-mined stones, ensuring their brilliance and integrity. Your satisfaction and trust are at the heart of our mission.</p>
            </div>
        </div>
        <div className="daimond-line"></div>
    </div>
      
    </>
  )
}

export default Daimond
