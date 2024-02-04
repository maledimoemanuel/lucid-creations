import React, { useState } from "react";

function ServiceCarousel({services}) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === services.length-1 ? 0 : prevSlide+1))
    }

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? services.length - 1 : prevSlide -1))
    }

  return (
    <div>ServiceCarousel</div>
  )
}

export default ServiceCarousel