import React from 'react'
import { NavLink } from 'react-router-dom'
import krish from './images/08529b6ba85ba5ef6bccaec6a7f9186c.jpg'

const Header = () => {
  return (
    <div className='home-headers'>
    <nav className='homes-headers'>

        <img src={krish} alt="krishnji" />

        <ul>
            <li><NavLink to="/">
                Home
            </NavLink></li>
            <li>
            <NavLink to="/about">
                About
            </NavLink>
            </li>
            <li>
            <NavLink to="/contact">
                Contact
            </NavLink>
            </li>
        </ul>
        
    </nav>
</div>
  )
}

export default Header
