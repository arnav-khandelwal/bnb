import React, { useState, useEffect } from 'react';
import { 
  Wifi, 
  Coffee, 
  Car, 
  Droplets, 
  Zap, 
  ChefHat, 
  Refrigerator, 
  UtensilsCrossed,
  Wind,
  Shirt,
  Home,
  Plug,
  Bed,
  Armchair,
  TreePine,
  Eye,
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import styles from './Amenities.module.scss';

const topAmenities = [
  { icon: Coffee, name: 'Breakfast Included', description: 'Fresh home-cooked Kerala breakfast' },
  { icon: Wifi, name: 'Free WiFi', description: 'High-speed internet throughout' },
  { icon: Car, name: 'Free Parking', description: 'Safe, convenient on-site parking' },
];

const kitchenAmenities = [
  { icon: Droplets, name: 'Filtered Water', description: 'Clean drinking water' },
  { icon: Zap, name: 'Electric Kettle', description: 'For tea and coffee' },
  { icon: ChefHat, name: 'Induction Stove', description: 'Modern cooking facility' },
  { icon: Refrigerator, name: 'Refrigerator', description: 'Keep your food fresh' },
  { icon: UtensilsCrossed, name: 'Cooking Utensils', description: 'Milk pan, tawa, wok' },
  { icon: UtensilsCrossed, name: 'Plates & Cutlery', description: 'Complete dining set' },
];

const comforts = [
  { icon: Wind, name: 'Air Conditioner', description: 'Stay cool and comfortable' },
  { icon: Wind, name: 'Fan', description: 'Additional air circulation' },
  { icon: Shirt, name: 'Linens', description: 'Fresh bedding provided' },
  { icon: Home, name: 'Cupboards', description: 'Storage for clothes' },
  { icon: Plug, name: 'Bedside Sockets', description: 'Convenient charging' },
  { icon: Home, name: 'Study Table', description: 'Workspace available' },
];

const layout = [
  { icon: Bed, name: 'Double Bed', description: 'Comfortable sleeping space' },
  { icon: Home, name: 'Study Table', description: 'Dedicated work area' },
  { icon: Armchair, name: 'Chairs', description: 'Seating arrangements' },
  { icon: Home, name: 'Cupboards', description: 'Ample storage space' },
  { icon: Eye, name: 'Garden View', description: 'Beautiful nature views' },
  { icon: TreePine, name: 'Outdoor Seating', description: 'Relax in nature' },
];

const activities = [
  { name: 'Reading & Writing', description: 'Find inspiration in peaceful surroundings', src: '/things/reading.jpeg' },
  { name: 'Nature Walks', description: 'Explore the lush Kerala countryside', src: '/things/nature.jpeg' },
  { name: 'Soap Making Workshop', description: 'Learn traditional crafts (extra charges apply)', src: '/things/soap.jpeg' },
  { name: 'Cooking & Gardening', description: 'Experience authentic Kerala lifestyle', src: '/things/cooking.jpeg' },
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
        {/* Top Amenities */}
        <div className={styles.section}>
          <h2 className={styles.mainTitle}>Amenities & Facilities</h2>
          <div className={styles.topAmenities}>
            {topAmenities.map((amenity) => (
              <div key={amenity.name} className={styles.topAmenityCard}>
                <amenity.icon className={styles.topIcon} />
                <h3 className={styles.topAmenityName}>{amenity.name}</h3>
                <p className={styles.topAmenityDesc}>{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Kitchen */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Kitchen</h3>
          <div className={styles.grid}>
            {kitchenAmenities.map((amenity) => (
              <div key={amenity.name} className={styles.amenityCard}>
                <amenity.icon className={styles.icon} />
                <div className={styles.amenityContent}>
                  <h4 className={styles.amenityName}>{amenity.name}</h4>
                  <p className={styles.amenityDesc}>{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comforts */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Comforts</h3>
          <div className={styles.grid}>
            {comforts.map((comfort) => (
              <div key={comfort.name} className={styles.amenityCard}>
                <comfort.icon className={styles.icon} />
                <div className={styles.amenityContent}>
                  <h4 className={styles.amenityName}>{comfort.name}</h4>
                  <p className={styles.amenityDesc}>{comfort.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Layout & Furnishing */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Layout & Furnishing</h3>
          <div className={styles.grid}>
            {layout.map((item) => (
              <div key={item.name} className={styles.amenityCard}>
                <item.icon className={styles.icon} />
                <div className={styles.amenityContent}>
                  <h4 className={styles.amenityName}>{item.name}</h4>
                  <p className={styles.amenityDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Things to Do & Ways to Relax</h3>
          <div className={styles.carouselWrapper}>
            <div className={styles.carousel}>
              <div className={styles.slide}>
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
    </div>
  );
};

export default Amenities;
