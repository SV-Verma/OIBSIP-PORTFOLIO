import React from 'react'
import deviceV from './Vedios/video.mp4'

const Gold = () => {
  return (
    <>
      <div className="gold">
        <div className="gold-main">
          <div className="gold-left">
            <h2>GOLD</h2>
            <p>I'm a dedicated goldsmith with expertise in crafting and 
              customizing exquisite gold jewelry. we offer a rich 
              collection of stunning gold jewelry items and provide 
              affordable, bespoke design options to bring your dream 
              jewelry to life. Your satisfaction is our priority, and
               we're here to make your jewelry dreams a reality</p>
          </div>


          <div className="gold-right">
            <div className="gold-right-image">
              <div className="gold-right-vdo">
                <video  autoPlay playsInline muted loop>
                  <source src={deviceV} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="gold-line"></div>
      </div>

    </>
  )
}

export default Gold
