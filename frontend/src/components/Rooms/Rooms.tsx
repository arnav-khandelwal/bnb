import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Room {
  name: string;
  description: string;
  price: number;
  image: string;
}

const rooms: Room[] = [
  {
    name: 'The Rose Suite',
    description: 'Our most luxurious suite featuring a king-size bed, private balcony overlooking the gardens, and a spacious en-suite bathroom with a clawfoot tub.',
    price: 245,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80',
  },
  {
    name: 'The Lavender Room',
    description: 'A charming room with a queen-size bed, garden views, and vintage furnishings. Perfect for a romantic getaway.',
    price: 195,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80',
  },
  {
    name: 'The Magnolia Suite',
    description: 'Spacious suite with a four-poster queen bed, sitting area, and French doors leading to a private garden patio.',
    price: 225,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80',
  },
];

export const Rooms: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === rooms.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? rooms.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div id="rooms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Rooms</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main Carousel */}
            <div className="relative h-[500px] mb-8 overflow-hidden rounded-lg">
              <div 
                className="absolute w-full h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {rooms.map((room, index) => (
                  <div
                    key={index}
                    className="absolute top-0 h-full w-full"
                    style={{ left: `${index * 100}%` }}
                  >
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-3xl font-bold mb-2">{room.name}</h3>
                      <p className="text-lg mb-4">{room.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">${room.price} / night</span>
                        <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-4">
              {rooms.map((room, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden transition-opacity ${
                    index === currentIndex ? 'ring-2 ring-gray-900' : 'opacity-50 hover:opacity-75'
                  }`}
                >
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
