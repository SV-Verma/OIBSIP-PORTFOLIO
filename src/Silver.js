 import React from 'react'
 import deviceV from './Vedios/movie1.mp4'

 
 const Silver = () => {
   return (
    <>
    <div className="silver">
        <div className="silver-main">
            <div className="silver-left">
              <div className="silver-image">
              <video  autoPlay playsInline muted loop>
                  <source src={deviceV} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="silver-right">
              <h2>SILVER</h2>
              <p>We take pride in our diverse range of exquisite silver 
                items. From beautifully detailed silver Lord God articles
               to elegant silver rings, anklets, toe rings, and exclusive 
               collections featuring silver dinner sets, diyas, and more, 
               we offer a wide selection of silver pieces that cater to 
               your diverse preferences. Each item is meticulously 
               designed and crafted, reflecting the essence of silver's
                beauty and cultural significance.</p>
            </div>
        </div>
        <div className="silver-line"></div>
    </div>
      
    </>
   )
 }
 
 export default Silver
 