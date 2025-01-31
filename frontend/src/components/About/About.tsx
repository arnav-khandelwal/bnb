import React from 'react';

export const About = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&q=80"
              alt="Cozy breakfast setting"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nestled in the rolling hills of the countryside, Rose Garden Inn has been welcoming guests
              for over 50 years. Our Victorian-era mansion has been lovingly restored to offer modern
              comfort while maintaining its historic charm.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Each morning, wake up to the aroma of freshly baked pastries and locally roasted coffee.
              Our award-winning breakfast is prepared with locally sourced ingredients, offering you
              the perfect start to your day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};