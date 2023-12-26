// 'use client'
// import React, { useState } from 'react';

// const SliderComponent: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slides = [
//     {
//       image: "image1.jpg",
//       text: "Slide 1 Text",
//     },
//     {
//       image: "image2.jpg",
//       text: "Slide 2 Text",
//     },
//     {
//       image: "image3.jpg",
//       text: "Slide 3 Text",
//     },
//   ]; // Replace with your image URLs and slide text

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="relative">
//       <img src={slides[currentIndex].image} alt="Slider Image" className="w-full h-auto" />
//       <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//         <div className="text-white text-2xl bg-black bg-opacity-50 p-4 rounded">
//           {slides[currentIndex].text}
//         </div>
//       </div>
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded"
//       >
//         Prev
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded"
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default SliderComponent;
'use client'
import React, { useState } from 'react';

const SliderComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: "image1.jpg",
      text: "Slide 1 Text",
    },
    {
      image: "image2.jpg",
      text: "Slide 2 Text",
    },
    {
      image: "image3.jpg",
      text: "Slide 3 Text",
    },
  ]; // Replace with your image URLs and slide text

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded"
        >
          Prev
        </button>
        <div className="flex items-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`h-4 w-4 rounded-full mx-1 ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded"
        >
          Next
        </button>
      </div>
      <img src={slides[currentIndex].image} alt="Slider Image" className="w-full h-auto" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="text-white text-2xl bg-black bg-opacity-50 p-4 rounded">
          {slides[currentIndex].text}
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
