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
            <h2 className={styles.title}>Rest Easy, Live Naturally</h2>
             <p className={styles.text}>
                Amidst the lush greenery of Kerala’s Kollam district, is this peaceful homestay that offers complete solitude and privacy, perfect for those seeking a quiet escape to reconnect with nature. Situated far from the crowds, the homestay features a cottage with a kitchenette, allowing you to unwind completely and embrace the tranquility of the surroundings
            </p>
            <p className={styles.text}>
                The air is filled with the soothing sounds of chirping birds, the rustling of fruit trees, and the occasional flutter of butterflies, making it a paradise for nature lovers. Unwind in total privacy -sip your morning tea with only birds for company, lose yourself in a book, or simply soak in the beauty of the serene surroundings. No noise, no distractions -just you, nature, and complete tranquility.
                For those who want to experience the rustic charm of the place, evening walks and light conversations with the simple, friendly locals will enrich the experience.
            </p>
          </div>
        </div>
        <div className={styles.flexRow}>
          <div className={styles.textWrapperLeft}>
            <h2 className={styles.title}>Serenity Waits for You</h2>
             <p className={styles.text}>
                Whether you’re looking for creative inspiration, peaceful rest, or just a break from the whirlwind of daily chores, this retreat provides a serene sanctuary to restore your energy and calm your mind, enjoy the quiet and a deep connection with nature.
            </p>
            <p className={styles.text}>
                Whether you prefer lounging with a book, working from home , indulging in soulful conversations, or simply enjoying the stillness, this space is yours to recharge.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.layeredImages}>
              <img
                src="/sides/2.jpeg"
                alt="Kerala side view at The Perch"
                className={styles.imageBackground}
              />
              <img
                src="/main/1.jpeg"
                alt="The Perch main view"
                className={styles.imageForeground}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
