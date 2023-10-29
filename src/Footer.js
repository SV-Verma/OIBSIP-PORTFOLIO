import React from 'react'
import {BsInstagram, BsFacebook ,BsWhatsapp } from 'react-icons/bs';
import {BiSolidPhoneCall} from 'react-icons/bi';
import {IoEarthOutline} from 'react-icons/io5';
import {GrMail} from 'react-icons/gr';
  import {FaMapMarkerAlt} from 'react-icons/fa';
import ft from './images/ftbg1.jpg'
import krish from './images/papa4-removebg-preview.png'

const Footer = () => {
  return (
    <div className='fheader'>
      <img src={ft} alt=""  className='footerimg'/>
      <div className="footer-conatiner">
        <div className="footer-layout">
          <div className="footer-img">
         <img src={krish} alt="krish" />
          </div>
          <div className="footer-icon">
            <h3>TIRUPATI JEWELLE's</h3>
               <div className="footer-icons">
               <BsInstagram className='instra'/>
                <BsFacebook className='faceb'/>
                <BsWhatsapp className='whatsapp'/>
               </div>
          </div>
          <div className="footer-socials">
                  <h2>Kishor Verma</h2>
           <span> <BiSolidPhoneCall className='call'/> +919084251351</span>
           <span> <IoEarthOutline className='earth'/> TIRUPATIjewelles.com </span>
           <span> <GrMail className='mail'/> kishorverma12@gmail.com </span>
           <span> <FaMapMarkerAlt className='location' /> 286/VA katra sunaran fzd  </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
