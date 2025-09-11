import React, { useState, useEffect, useRef } from 'react';
import { Bed, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Hero.module.scss';

const images = [
  '/main/1.jpeg',
  '/main/2.jpeg',
  '/main/3.jpeg',
  '/main/4.jpeg',
  '/main/5.jpeg',
  '/main/6.jpeg',
  '/main/7.jpeg',
  '/main/8.jpeg',
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setSlideDirection('right');
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const nextSlide = () => {
    setSlideDirection('right');
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSlideDirection('left');
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className={styles.heroSection}>
      <div className={styles.bgImage}>
        {images.map((img, idx) => {
          let className = styles.slideImage;
          if (idx === currentIndex) {
            className +=
              ' ' +
              (slideDirection === 'right'
                ? styles.slideInRight
                : styles.slideInLeft);
          } else if (idx === prevIndex) {
            className +=
              ' ' +
              (slideDirection === 'right'
                ? styles.slideOutLeft
                : styles.slideOutRight);
          } else {
            className += ' ' + styles.slideHidden;
          }
          return (
            <img
              key={img}
              src={img}
              alt={`Kerala nature ${idx + 1}`}
              className={className}
            />
          );
        })}
        <div className={styles.overlay}></div>
        <button className={styles.arrowLeft} onClick={prevSlide}>
          <ChevronLeft size={32} />
        </button>
        <button className={styles.arrowRight} onClick={nextSlide}>
          <ChevronRight size={32} />
        </button>
      </div>
      <div className={styles.contentWrapper}>
        <Bed className={styles.icon} color='white'/>
        <h1 className={styles.title}>The Perch</h1>
        <p className={styles.subtitle}>
         A serene Kerala Homestay at Kollam; A Sanctuary of Solitude- Ideal for weekend getaways, long stays and women seeking a restful break.
        </p>
        <button className={styles.button}>
          Book Your Stay
        </button>
      </div>
    </div>
  );
};

export default Hero;
