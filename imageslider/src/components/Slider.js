import React, { useState } from 'react';
import './Slider.css';
import { images } from '../assets';

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === activeIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      <button className="prev-btn" onClick={prevSlide}>&#8592;</button>
      <button className="next-btn" onClick={nextSlide}>&#8594;</button>
    </div>
  );
}

export default Slider;
