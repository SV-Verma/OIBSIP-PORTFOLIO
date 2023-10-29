import React from 'react'
import Common from './Common'
import papa1 from './images/papa1-removebg-preview.png'
import Works from './works'
import Gold from './Gold'
import Silver from './Silver'
import Daimond from './Daimond'

const Home = () => {
  return (
    <>
    <div className='home'>
          <Common 
    name="GROW YOUR BUSINESS WITH KISHOR "
    imgsrc={papa1}
    visit="https://bhaskarenterprise.com/"
    btname="Get Started"
    text=""
    />
    </div>
    <Daimond />
    <Gold />
    <Silver />
    <Works />
    </>
  )
}

export default Home
