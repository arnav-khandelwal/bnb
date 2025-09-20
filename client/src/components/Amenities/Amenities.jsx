import React, { useState, useEffect } from 'react';
import { Wifi, Coffee, Utensils, Car, Wine, Trees as Tree, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Amenities.module.scss';

const amenities = [
  { icon: Wifi, name: 'Free WiFi', description: 'High-speed internet throughout The Perch' },
  { icon: Coffee, name: 'Breakfast Included', description: 'Home-cooked Kerala breakfast served daily' },
  { icon: Utensils, name: 'Kitchenette', description: 'Filtered water, electric kettle, induction stove, refrigerator, utensils, plates, and cutlery' },
  { icon: Car, name: 'Free Parking', description: 'Safe, convenient on-site parking for guests' },
  { icon: Wine, name: 'Nature Walks', description: 'Guided walks through our lush gardens and nearby greenery' },
  { icon: Tree, name: 'Green Spaces', description: 'Relax in our tropical gardens, surrounded by native plants and birds' },
];

const comforts = [
  { name: 'Air Conditioner & Fan', description: 'Stay comfortable in any season' },
  { name: 'Linens & Towels', description: 'Fresh linens and towels provided' },
  { name: 'Cupboards & Study Table', description: 'Ample storage and workspace' },
  { name: 'Sockets Near Bed', description: 'Convenient charging for your devices' },
];

const layout = [
  { name: 'Double Bed', description: 'Cozy and comfortable for restful sleep' },
  { name: 'Garden View & Access', description: 'Enjoy outdoor seating and beautiful views' },
  { name: 'Private Bathroom', description: 'Shower, hot water, mirror, towels' },
];

const activities = [
  { name: 'Reading & Writing', description: 'Find inspiration in nature', src: '/main/1.jpeg' },
  { name: 'Nature Walks', description: 'Explore the lush surroundings', src: '/main/2.jpeg' },
  { name: 'Soap Making Workshop', description: 'Available on request (extra charges apply)', src: '/main/3.jpeg' },
  { name: 'Cooking & Gardening', description: 'Join us for authentic Kerala cooking and gardening experiences', src: '/main/4.jpeg' },
];

const Amenities = () => {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivityIndex((prevIndex) =>
        prevIndex === activities.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextActivitySlide = () => {
    setCurrentActivityIndex((prevIndex) =>
      prevIndex === activities.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevActivitySlide = () => {
    setCurrentActivityIndex((prevIndex) =>
      prevIndex === 0 ? activities.length - 1 : prevIndex - 1
    );
  };

  const goToActivitySlide = (index) => {
    setCurrentActivityIndex(index);
  };
  return (
    <div className={styles.amenitiesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Top Amenities</h2>
        <div className={styles.grid}>
          {amenities.map((amenity) => (
            <div key={amenity.name} className={styles.amenityCard}>
              {amenity.icon && <amenity.icon className={styles.icon} />}
              <div>
                <h3 className={styles.amenityName}>{amenity.name}</h3>
                <p className={styles.amenityDesc}>{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className={styles.title}>Comforts</h2>
        <ul>
          {comforts.map((item) => (
            <li key={item.name}>
              <strong>{item.name}:</strong> {item.description}
            </li>
          ))}
        </ul>
        <h2 className={styles.title}>Layout & Furnishing</h2>
        <ul>
          {layout.map((item) => (
            <li key={item.name}>
              <strong>{item.name}:</strong> {item.description}
            </li>
          ))}
        </ul>
        <h2 className={styles.title}>Things to Do & Ways to Relax</h2>
        <div className={styles.carouselWrapper}>
          <div className={styles.carousel}>
            <div
              className={styles.slide}
              style={{ left: 0, transform: 'translateX(0)' }}
            >
              <img
                src={activities[currentActivityIndex].src}
                alt={activities[currentActivityIndex].name}
                className={styles.activityImage}
              />
              <div className={styles.overlay}></div>
              <div className={styles.slideContent}>
                <h3 className={styles.activityName}>
                  {activities[currentActivityIndex].name}
                </h3>
                <p className={styles.activityDesc}>{activities[currentActivityIndex].description}</p>
              </div>
            </div>
            <button onClick={prevActivitySlide} className={styles.arrowLeft}>
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextActivitySlide} className={styles.arrowRight}>
              <ChevronRight size={24} />
            </button>
          </div>
          <div className={styles.thumbnails}>
            {activities.map((activity, index) => (
              <button
                key={activity.name}
                onClick={() => goToActivitySlide(index)}
                className={
                  index === currentActivityIndex
                    ? styles.thumbnailActive
                    : styles.thumbnail
                }
              >
                <img
                  src={activity.src}
                  alt={activity.name}
                  className={styles.thumbnailImage}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
