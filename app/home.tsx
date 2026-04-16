'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function RestaurantWithSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: '/restaurant-1.jpg', alt: 'Restaurant View 1' },
    { src: '/restaurant-2.jpg', alt: 'Restaurant View 2' },
    { src: '/restaurant-3.jpg', alt: 'Restaurant View 3' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side - Text */}
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Welcome to <br />
              <span className="text-orange-600">Spice Heaven</span>
            </h1>
            <p className="text-lg text-gray-700">
              Experience the finest Indian cuisine in town. Our chefs bring you
              authentic flavors that will tantalize your taste buds.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span>✓ 100% Halal Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span>✓ Private Dining Available</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span>✓ Free Parking</span>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700">
                Order Online
              </button>
              <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50">
                Call Us: +1 234 567 890
              </button>
            </div>
          </div>

          {/* Right Side - Image Slider */}
          <div className="flex-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  fill
                  className="object-cover transition-opacity duration-500"
                />
              </div>
              
              {/* Slider Controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImage === index ? 'bg-white w-4' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}