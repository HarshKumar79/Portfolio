import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 1, name: 'Home', href: '#home' },
    { id: 2, name: 'Projects', href: '#projects' },
    { id: 3, name: 'Skills', href: '#skills' },
    { id: 4, name: 'Education', href: '#education' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <motion.a
          href="#home"
          className={styles.logo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Portfolio
        </motion.a>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={item.href}
              className={styles.navLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;