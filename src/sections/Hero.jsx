import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const texts = ["Harsh Kumar", "Full Stack Developer", "Software Developer","Python Developer"];
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let typingSpeed = isDeleting ? 50 : 100; // Faster deleting

    const currentText = texts[textIndex];

    if (!isDeleting && charIndex < currentText.length) {
      // Typing
      setTimeout(() => setCharIndex(prev => prev + 1), typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      setTimeout(() => setCharIndex(prev => prev - 1), typingSpeed);
    } else if (!isDeleting && charIndex === currentText.length) {
      // Pause before deleting
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex === 0) {
      // Switch text
      setIsDeleting(false);
      setTextIndex(prev => (prev + 1) % texts.length);
    }

    setDisplayedText(currentText.slice(0, charIndex));

  }, [charIndex, isDeleting, textIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.title}>
          Hi, I'm{' '}
          <span className={styles.name}>
            {displayedText}
            <span className={`${styles.cursor} ${cursorVisible ? styles.visible : ''}`}>
              |
            </span>
          </span>
        </h1>
      </motion.div>
    </section>
  );
};

export default Hero;
