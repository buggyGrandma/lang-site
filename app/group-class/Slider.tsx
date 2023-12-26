'use client'
import React, { useState } from 'react';

type Slide = {
//   image: string;
  text: string;
};

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides: Slide[] = [
    {
     
      text: 'Slide 1 Text',
    },
    {
    //   image: 'image2.jpg',
      text: 'Slide 2 Text',
    },
    {
    //   image: 'image3.jpg',
      text: 'Slide 3 Text',
    },
    // Add more slides as needed
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center mb-4">
        <button onClick={prevSlide} className="mr-4">
          &lt;
        </button>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-4 h-4 bg-gray-500 rounded-full mx-2 ${
              index === currentIndex ? 'bg-gray-800' : ''
            }`}
          />
        ))}
        <button onClick={nextSlide} className="ml-4">
          &gt;
        </button>
      </div>
      <div className="relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full" /> */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
