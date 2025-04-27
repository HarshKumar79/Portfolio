import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.sectionTitle}>Contact Me</h2>
        <ContactForm />
      </motion.div>
    </section>
  );
};

export default Contact;