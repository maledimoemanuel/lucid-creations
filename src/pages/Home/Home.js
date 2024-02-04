import React from 'react'
import banner from '../../assets/images/who-we-are.png'
import './Home.css'

function AboutUs() {
  return (
    <div className='main'>
      <div className='left'>
        <p className='big-txt'>Great <span className='different'>Product </span> is</p>
        <p className='big-txt-2'>build by great <span className='different'>teams</span></p>
        <p className='small-txt'>We help build and manage a team of world-class developers to bring your vision to life</p>
        <button className='get-started'>Get started!</button>
      </div>
      <div className='right'>
        <img src={banner} className='banner'/>
      </div>
    </div>  
  )
}

export default AboutUs