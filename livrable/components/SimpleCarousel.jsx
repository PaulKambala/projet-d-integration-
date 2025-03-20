"use client";

import { useRef } from 'react';

const SimpleCarousel = ({ images }) => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className="relative">
            <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded hover:bg-gray-700">
                ←
            </button>
            <div ref={carouselRef} className="flex overflow-x-auto scrollbar-hide">
                {images.map((image, index) => (
                    <div key={index} className="min-w-[300px] mx-2 bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={image.src} alt={image.alt} className="w-full h-48 object-cover" />
                        <h3 className="p-2 text-lg font-semibold">{image.title}</h3>
                    </div>
                ))}
            </div>
            <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded hover:bg-gray-700">
                →
            </button>
        </div>
    );
};

export default SimpleCarousel;