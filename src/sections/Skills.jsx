import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'JavaScript', level: 79 },
  { name: 'Node.js', level: 68 },
  { name: 'CSS', level: 90 },
  { name: 'React', level: 76 },
  { name: 'MongoDB', level: 75 },
  { name: 'Django', level: 95 },

];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={styles.skillCard}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.circularProgress}>
                <svg viewBox="0 0 36 36" className={styles.circularChart}>
                  <path
                    className={styles.circleBg}
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <motion.path
                    className={styles.circle}
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    initial={{ strokeDasharray: '0, 100' }}
                    whileInView={{ strokeDasharray: `${skill.level}, 100` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </svg>
                <div className={styles.percentage}>
                  {skill.level}%
                </div>
              </div>
              <h3 className={styles.skillName}>{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;