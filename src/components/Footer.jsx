import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>Let's Connect</h2>
        <SocialLinks />
        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} Harsh Kumar. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;