import React from 'react'
import Common from './Common'
import papa2 from './images/papa2-removebg-preview.png'

const Aboutus = () => {
  return (
    <div className='about'>
          <Common 
    name="KISHOR "
    imgsrc={papa2}
    visit="/Contact"
    btname="Contact Now"
    text=" 
    We crafting and customizing a wide range of SILVER, GOLD, DIOMOND 
    items, making sure that you get to express your unique 
    style without breaking the bank. We are committed to offering 
    affordability without compromising on the quality of our work. "
    texthp1="Customization:"
    textp1=" Have a dream design in mind? We bring your ideas to life.
 Our skilled goldsmiths will work closely with you to create personalized 
 jewelry pieces that perfectly reflect your style and sentiment."
 
 texthp2="Jewelry Repairs:"
 textp2="We understand the value of your treasured pieces. 
 Our expert team can repair and restore your old or damaged jewelry to its 
 former glory."
 
texthp3="Resizing:"
    textp3="Whether it's an heirloom or a recent purchase, we can expertly
    resize rings and other jewelry items to ensure a perfect fit."
    />
    </div>
  )
}

export default Aboutus
