"use client";

import { useRef } from 'react';

const EventCarousel = ({ events }) => {
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
                {events.map((event, index) => (
                    <div key={index} className="min-w-[300px] mx-2 bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                        <h3 className="p-2 text-lg font-semibold">{event.title}</h3>
                        <p className="text-gray-700">Date: {event.date}</p>
                        <p className="mt-2 p-2">{event.description}</p>
                    </div>
                ))}
            </div>
            <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded hover:bg-gray-700">
                →
            </button>
        </div>
    );
};

export default EventCarousel;