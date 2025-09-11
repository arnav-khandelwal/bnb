import React from 'react';
import { Bed } from 'lucide-react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.bgImage}>
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.contentWrapper}>
        <Bed className={styles.icon} />
        <h1 className={styles.title}>Rose Garden Inn</h1>
        <p className={styles.subtitle}>
          Experience the charm of our historic bed & breakfast in the heart of the countryside
        </p>
        <button className={styles.button}>
          Book Your Stay
        </button>
      </div>
    </div>
  );
};

export default Hero;
