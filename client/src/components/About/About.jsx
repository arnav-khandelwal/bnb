import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.flexRow}>
          <div className={styles.imageWrapper}>
            <img
              src="/sides/1.jpeg"
              alt="Kerala side view at The Perch"
              className={styles.image}
            />
          </div>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>The Perch: Rest Easy, Live Naturally</h2>
             <p className={styles.text}>
                Amidst the lush greenery of Kerala’s Kollam district, is this peaceful homestay that offers complete solitude and privacy, perfect for those seeking a quiet escape to reconnect with nature. Situated far from the crowds, the homestay features a cottage with a kitchenette, allowing you to unwind completely and embrace the tranquility of the surroundings
            </p>
            <p className={styles.text}>
The air is filled with the soothing sounds of chirping birds, the rustling of fruit trees, and the occasional flutter of butterflies, making it a paradise for nature lovers. Unwind in total privacy -sip your morning tea with only birds for company, lose yourself in a book, or simply soak in the beauty of the serene surroundings. No noise, no distractions -just you, nature, and complete tranquility.
For those who want to experience the rustic charm of the place, evening walks and light conversations with the simple, friendly locals will enrich the experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
