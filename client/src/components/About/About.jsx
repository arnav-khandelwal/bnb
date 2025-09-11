import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.flexRow}>
          <div className={styles.imageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&q=80"
              alt="Cozy breakfast setting"
              className={styles.image}
            />
          </div>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Our Story</h2>
            <p className={styles.text}>
              Nestled in the rolling hills of the countryside, Rose Garden Inn has been welcoming guests
              for over 50 years. Our Victorian-era mansion has been lovingly restored to offer modern
              comfort while maintaining its historic charm.
            </p>
            <p className={styles.text}>
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

export default About;
