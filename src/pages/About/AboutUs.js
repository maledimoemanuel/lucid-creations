import React from 'react'
import './AboutUs.css';
import video from '../../assets/videos/vid.mp4'

function AboutUs() {
  return (
    <div className='cover'>
        <div className='paragraph'>
            <p className='first'>Leading companies trust us</p>
            <p className='second'>to develop software</p>
            <p>We <span className='p-diff'>add development capacity </span>to tach teams. Our value isn't limited to building teams but equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.</p>
        </div>
        <div className='video'>
          <video className='video' src={video} width='300' height='200' controls/>
        </div>
    </div>
  )
}

export default AboutUs