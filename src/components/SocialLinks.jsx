import { motion } from 'framer-motion';
import { FiGithub, FiInstagram, FiLinkedin, FiMail} from 'react-icons/fi';
import styles from './SocialLinks.module.css';

const SocialLinks = () => {
  const socials = [
    {
      id: 1,
      icon: <FiGithub />,
      url: 'https://github.com/HarshKumar79/',
      label: 'GitHub Profile'
    },
    {
      id: 2,
      icon: <FiLinkedin />,
      url: 'https://www.linkedin.com/in/harsh-kumar-7bb190296/',
      label: 'LinkedIn Profile'
    },
    {
      id: 3,
      icon: <FiMail />,
      url: 'mailto:harsh751883@gmail.com',
      label: 'Send Email'
    },
    {
      id: 4,
      icon: <FiInstagram />,
      url: 'https://www.instagram.com/harshkumar8978/',
      label: 'Instagram Profile'
    }
  ];

  return (
    <div className={styles.socials}>
      {socials.map((social) => (
        <motion.a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={social.label}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;