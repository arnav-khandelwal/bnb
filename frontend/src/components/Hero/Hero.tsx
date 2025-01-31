import React from 'react';
import { Bed } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <Bed className="w-16 h-16 mb-6" />
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Rose Garden Inn</h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl mb-8">
          Experience the charm of our historic bed & breakfast in the heart of the countryside
        </p>
        <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
          Book Your Stay
        </button>
      </div>
    </div>
  );
};