import React, {useState} from 'react'
import './Services.css';
import web_dev from '../../assets/images/web_dev.png';
import maintenance from '../../assets/images/maintenance.png';
import consult from '../../assets/images/consult.png';
import seo from '../../assets/images/seo.png';
import mobile_app from '../../assets/images/mobile_app.png';
import testing from '../../assets/images/testing.png'

function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services =[
    {image: web_dev, title: "Web Design & Development", description: "A Website is an extension of yourself and we can help you express it properly. Your website is your number one marketing asset since we live in the digital age"},
    {image: testing, title: "Software Testing", description: "In the ever-evolving landscape of technology, the need for reliable and high-performing software is paramount. We guarantee the seamless functionality and impeccable performance of your applications"},
    {image: maintenance, title: "Web Maintenance And Support", description: "Your website is the face on your digital presence, and its ongoing maintenance is crucial for sustained success. We are dedicated to keep your website running seamlessly, ensuring it stays current, secure, and aligned with your evolving business need."},
    {image: seo, title: "Search Engine Optimization", description: "In the vast landscape of the digital world, being discoverable is paramount. Our SEO services are designed to propel your online presence to new heights, ensuring your business stands out in search engine results and reaches its target audience effectively."},
    {image: consult, title: "Software Consulting", description: "Navigating the complex landscape of the digital world requires strategic insights and expert guidance. Our Consulting Services are tailored to empower businesses with the knowledge, strategies, and solutions needed to thrive in the ever-evolving online sphere."},
    {image: mobile_app, title: "Mobile App Development", description: "We specialize in crafting cutting-edge applications that not only meet but exceed user expectations, providing s seamless blend of functionality, aesthetics and performance."}
  ]

  const icons=[{back: '<', next: '>'}
  ]

  const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === services.length-1 ? 0 : prevSlide+1))
  }

  const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? services.length - 1 : prevSlide -1))
  }
  return (
    <div className='container'>
      <h3>Services We Offer</h3>
      <div className='carousel'>
        <p className='move' onClick={prevSlide}>{'<'}</p>
        <div className='content'>
          <img className='icon' src={services[currentSlide].image}/>
          <h4 className='service-title'>{services[currentSlide].title}</h4>
          <p className='service-description'>{services[currentSlide].description}</p>
        </div>
        <p className='move' onClick={nextSlide}>{'>'}</p>
      </div>
    </div>
  )
}

export default Services