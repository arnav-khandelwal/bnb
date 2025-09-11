import React from 'react';
import { Wifi, Coffee, Utensils, Car, Wine, Trees as Tree } from 'lucide-react';
import styles from './Amenities.module.scss';

const amenities = [
  { icon: Wifi, name: 'Free Wi-Fi', description: 'High-speed internet throughout the property' },
  { icon: Coffee, name: 'Gourmet Breakfast', description: 'Fresh, locally-sourced breakfast daily' },
  { icon: Utensils, name: 'Tea Service', description: 'Afternoon tea and homemade treats' },
  { icon: Car, name: 'Free Parking', description: 'Convenient on-site parking' },
  { icon: Wine, name: 'Wine Hour', description: 'Complimentary evening wine tasting' },
  { icon: Tree, name: 'Gardens', description: 'Beautiful gardens and sitting areas' },
];

const Amenities = () => {
  return (
    <div className={styles.amenitiesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Amenities</h2>
        <div className={styles.grid}>
          {amenities.map((amenity) => (
            <div key={amenity.name} className={styles.amenityCard}>
              <amenity.icon className={styles.icon} />
              <div>
                <h3 className={styles.amenityName}>{amenity.name}</h3>
                <p className={styles.amenityDesc}>{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
