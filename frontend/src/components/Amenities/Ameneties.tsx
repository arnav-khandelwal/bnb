import React from 'react';
import { Wifi, Coffee, Utensils, Car, Wine, Trees as Tree } from 'lucide-react';

const amenities = [
  { icon: Wifi, name: 'Free Wi-Fi', description: 'High-speed internet throughout the property' },
  { icon: Coffee, name: 'Gourmet Breakfast', description: 'Fresh, locally-sourced breakfast daily' },
  { icon: Utensils, name: 'Tea Service', description: 'Afternoon tea and homemade treats' },
  { icon: Car, name: 'Free Parking', description: 'Convenient on-site parking' },
  { icon: Wine, name: 'Wine Hour', description: 'Complimentary evening wine tasting' },
  { icon: Tree, name: 'Gardens', description: 'Beautiful gardens and sitting areas' },
];

export const Amenities = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity) => (
            <div key={amenity.name} className="flex items-start p-6 bg-gray-50 rounded-lg">
              <amenity.icon className="w-8 h-8 text-gray-900 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{amenity.name}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};