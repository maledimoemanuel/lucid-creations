import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'

function Navbar() {
  return (
    <div className='nav'>
      <div className='logo-view'>
        <img src={logo} className='logo'/>
      </div>
      <div className='items'>
        <ul className='list'>
          <li>About us</li>
          <li>Services</li>
          <li>About us</li>
          <li>About us</li>
        </ul>
      </div>
      <div><button className='contact-btn'>Contact us</button></div>
    </div>
  )
}

export default Navbar