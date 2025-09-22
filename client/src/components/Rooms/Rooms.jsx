import React, { useState, useEffect, memo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation, useStaggerAnimation } from '../../hooks/useScrollAnimation';
import styles from './Rooms.module.scss';

const roomImages = [
  {
    name: 'The Bedroom – your restful haven',
    src: '/room/room.jpeg',
    desc: "A bright and welcoming space filled with natural light, the bedroom is designed for comfort and calm. Perfect for a restful night’s sleep or a slow morning, this cozy haven blends simplicity with the soothing charm of nature."
  },
  {
    name: 'The Bathroom',
    src: '/room/washroom.jpeg',
    desc: "Clean and bright, the bathroom comes with a shower, offering the simple comforts you need for a refreshing stay."
  },
  {
    name: 'The Study  - your cozy corner',
    src: '/room/study.jpeg',
    desc: "A quiet, comfortable space inside the cottage, perfect for reading & writing. Designed for peace and reflection, this private study offers a writing desk by the window surrounded by greenery and natural light, making it feel like a little hideaway of its own."
  },
  {
    name: 'The Kitchenette – your little comfort corner',
    src: '/room/kitchen.jpeg',
    desc: "Enjoy your morning coffee by the window and feel at home. A snug spot that adds warmth and ease to your stay, complete with an induction stove and a kettle for your convenience."
  },
];

const room = {
  name: 'A Room Inside Cottage',
  description:
    'A peaceful, private room inside the cottage with access to a washroom, study, and kitchen. Perfect for a tranquil stay surrounded by nature.',
};

// Separate static carousel wrapper component that doesn't re-render on currentIndex change
const CarouselWrapper = memo(({ children }) => {
  const carouselRef = useScrollAnimation('fadeUp', { delay: 0.2, once: true });
  
  return (
    <div ref={carouselRef} className={styles.carouselWrapper}>
      {children}
    </div>
  );
});

CarouselWrapper.displayName = 'CarouselWrapper';

const Rooms = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animate only static containers
  const titleRef = useScrollAnimation('fadeUp', { once: true });
  const thumbnailsRef = useStaggerAnimation('fadeUp', { delay: 0.3, stagger: 0.1, once: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === roomImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === roomImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? roomImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="rooms" className={styles.roomsSection}>
      <div className={styles.container}>
        {/* Title fades once on scroll */}
        <h2 ref={titleRef} className={styles.title}>{room.name}</h2>

        {/* Carousel wrapper fades once on scroll - memoized to prevent re-renders */}
        <CarouselWrapper>
          <div className={styles.carousel}>
            <div className={styles.slide}>
              <img
                src={roomImages[currentIndex].src}
                alt={roomImages[currentIndex].name}
                className={styles.roomImage}
              />
              <div className={styles.overlay}></div>
              <div className={styles.slideContent}>
                <h3 className={styles.roomName}>
                  {roomImages[currentIndex].name}
                </h3>
                <p className={styles.roomDesc}>
                  {roomImages[currentIndex].desc}
                </p>
              </div>
            </div>

            <button onClick={prevSlide} className={styles.arrowLeft}>
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className={styles.arrowRight}>
              <ChevronRight size={24} />
            </button>
          </div>
        </CarouselWrapper>

        {/* Thumbnails stagger in once on scroll */}
        <div ref={thumbnailsRef} className={styles.thumbnails}>
          {roomImages.map((img, index) => (
            <button
              key={img.name}
              onClick={() => goToSlide(index)}
              className={
                index === currentIndex
                  ? styles.thumbnailActive
                  : styles.thumbnail
              }
            >
              <img
                src={img.src}
                alt={img.name}
                className={styles.thumbnailImage}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;