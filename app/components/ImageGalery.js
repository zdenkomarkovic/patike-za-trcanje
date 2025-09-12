'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ImageGallery({ images, productName }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const selectedImage = images[selectedIndex];

  return (
    <div className="space-y-4">
      {/* Glavna slika */}
      <div className="relative group">
        <div 
          className="relative h-96 lg:h-[500px] overflow-hidden rounded-2xl bg-gray-100 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={selectedImage.asset.url}
            alt={productName}
            width={800}
            height={600}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>
        
        {/* Zoom overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-2xl flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Thumbnail slike */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`relative group cursor-pointer ${selectedIndex === index ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => setSelectedIndex(index)}
            >
              <div className="relative h-20 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={image.asset.url}
                  alt={`${productName} - slika ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal za veliku sliku */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative h-[80vh] w-full">
              <Image
                src={selectedImage.asset.url}
                alt={productName}
                width={1200}
                height={800}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Navigacija u modalu */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : images.length - 1);
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(selectedIndex < images.length - 1 ? selectedIndex + 1 : 0);
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}