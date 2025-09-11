import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.flexRow}>
          <h1 className={styles.logo}>The Perch</h1>
          <button className={styles.menuButton} onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </button>
          <div className={styles.desktopMenu}>
            <a href="#about" className={styles.menuLink}>About</a>
            <a href="#rooms" className={styles.menuLink}>Rooms</a>
            <a href="#amenities" className={styles.menuLink}>Green Spaces</a>
            <a href="#contact" className={styles.menuLink}>Contact</a>
            <button className={styles.bookButton}>Book The Perch</button>
          </div>
        </div>
        {isOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuList}>
              <a href="#about" className={styles.menuLink} onClick={toggleMenu}>About</a>
              <a href="#rooms" className={styles.menuLink} onClick={toggleMenu}>Rooms</a>
              <a href="#amenities" className={styles.menuLink} onClick={toggleMenu}>Green Spaces</a>
              <a href="#contact" className={styles.menuLink} onClick={toggleMenu}>Contact</a>
              <button className={styles.bookButton}>Book The Perch</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
