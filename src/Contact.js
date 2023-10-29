import React, { useState } from 'react'
import papa4 from './images/pap3-removebg-preview.png'


  const Contact = () => {
    const [data, setData] = useState({
     fullname: "",
     phone: "",
     email: "",
     msg: ""
    });
    const handleInputChange = (event) => {
      const {name, value} =event.target;
      setData ((preVal)  => {
         return {
          ...preVal,
          [name] : value,
         }
      })
    }
  
    const formSubmit = (event) => {
      event.preventDefault();
      alert(
        `My Name is: ${data.fullname}.My phoneNo is: ${data.phone} and Email: ${data.email},My Massege: ${data.msg}`
      );
      console.log(data);
    }



  return (
    <div className='contacts'>
      <div className='contact' >
        <div className="contact-container">
          <img src={papa4} alt="" />
          <div className="contact-main">
            <form onSubmit={formSubmit}>
              <h1 className='contact-h'> Contact Us</h1>
              <div className="contact-two-section">
                <input type="text" 
                name='fullname'
                value={data.fullname}
                onChange={handleInputChange}
                placeholder='Enter Your Name' />
              </div>
              <div>
                <input type="number"
                name='phone'
                value={data.phone}
                onChange={handleInputChange}
                placeholder='Enter Your PhoneNo' className='phoneno' />
              </div>
              <div className="contact-two-section">
                <input type="email"
                name='email'
                value={data.email}
                onChange={handleInputChange}
                placeholder='Enter Your Email' />
              </div>
              <div>
                <textarea 
                id="text" 
                cols="31" 
                rows="4"
                 name="msg"
                 value={data.msg}
                 onChange={handleInputChange}
                 placeholder='Your Message' className='textarea'></textarea>
              </div>
              <div className='contact-btn'>
                <button className='c-btn'>Submit</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact
