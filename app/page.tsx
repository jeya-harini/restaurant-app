// app/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function RestaurantHomePage() {
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = [
    { src: '/logo.jpg', alt: 'logo' },
    { src: '/logo2.jpg', alt: 'logo2' },
    { src: '/logo3.jpg', alt: 'logo3' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Side - Text Content */}
          <div className="flex-1 space-y-6">
            {/* Badge */}
            <div className="inline-block">
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                Since 1995
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Taste the <span className="text-orange-600">Authentic</span>
              <br />
              Flavors of India
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Experience the rich heritage of Indian cuisine with our carefully crafted dishes.
              From aromatic spices to traditional recipes, every bite tells a story of passion
              and perfection.
            </p>

            {/* Features/Hightlights */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Fresh Ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Master Chefs</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Authentic Recipes</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Cozy Ambiance</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/menu"
                className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl"
              >
                View Our Menu
              </Link>
              <Link
                href="/reservation"
                className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-full hover:bg-orange-50 transition-colors"
              >
                Book a Table
              </Link>
            </div>

            {/* Reviews/Stats */}
            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="text-2xl font-bold text-gray-900">5000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Exotic Dishes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="flex-1 space-y-4">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/restaurant-main.jpg"
                alt="Restaurant Main Image"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                <p className="text-sm">⭐ 4.8 (1200+ reviews)</p>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-3">
              <div className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                <Image
                  src="/signature-dish.jpg"
                  alt="Signature Dish"
                  width={200}
                  height={150}
                  className="w-full h-24 object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                <Image
                  src="/chef-special.jpg"
                  alt="Chef Special"
                  width={200}
                  height={150}
                  className="w-full h-24 object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                <Image
                  src="/restaurant-ambiance.jpg"
                  alt="Restaurant Ambiance"
                  width={200}
                  height={150}
                  className="w-full h-24 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Dishes Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Signature Dishes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most loved dishes, prepared with authentic recipes and fresh ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dish 1 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/butter-chicken.jpg"
                  alt="Butter Chicken"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Butter Chicken</h3>
                <p className="text-gray-600 mb-4">
                  Creamy tomato-based curry with tender chicken pieces
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">$18.99</span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            {/* Dish 2 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/biryani.jpg"
                  alt="Chicken Biryani"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Chicken Biryani</h3>
                <p className="text-gray-600 mb-4">
                  Aromatic rice cooked with spices and tender chicken
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">$16.99</span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            {/* Dish 3 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/garlic-naan.jpg"
                  alt="Garlic Naan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Garlic Naan</h3>
                <p className="text-gray-600 mb-4">
                  Freshly baked bread with garlic and butter
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">$3.99</span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-orange-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for an Amazing Dining Experience?
          </h2>
          <p className="text-orange-100 mb-8">
            Book your table now and enjoy a memorable meal with your loved ones
          </p>
          <Link
            href="/reservation"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Reserve Your Table
          </Link>
        </div>
      </div>
    </div>
  );
}