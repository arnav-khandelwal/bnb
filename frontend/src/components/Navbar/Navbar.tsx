import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <h1 className="text-2xl font-bold text-gray-900">Rose Garden Inn</h1>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#rooms" className="text-gray-600 hover:text-gray-900">Our Rooms</a>
            <a href="#amenities" className="text-gray-600 hover:text-gray-900">Amenities</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Book Now
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>About</a>
              <a href="#rooms" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>Our Rooms</a>
              <a href="#amenities" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>Amenities</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>Contact</a>
              <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
