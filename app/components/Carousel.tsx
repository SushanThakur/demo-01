'use client';

import React, { useState } from "react";

const Carousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      id: 1,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Slide 1.",
      bgColor: "bg-pink-100",
    },
    {
      id: 2,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi! Slide 2.",
      bgColor: "bg-pink-100",
    },
    {
      id: 3,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi! Slide 3.",
      bgColor: "bg-pink-100",
    },
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="section-container">
      <div className="section bg-pink-100 p-8 rounded-3xl">
        <div className="carousel w-full overflow-hidden relative h-[400px] ">
          <div className="relative h-full flex transition-transform duration-700 " style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item w-full h-full flex items-center justify-center ${slide.bgColor} `}
              >
                <p className="text-center text-lg sm:px-8">{slide.content}</p>
              </div>
            ))}
          </div>

          <div className="absolute flex justify-between w-full px-4 bottom-0">
            <button onClick={handlePrev} className="btn btn-circle">
              ❮
            </button>
            <button onClick={handleNext} className="btn btn-circle">
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
