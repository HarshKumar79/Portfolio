import { motion } from 'framer-motion';
import { FiBookOpen, FiDownload } from 'react-icons/fi';
import styles from './EducationCertifications.module.css';


const EducationCertifications = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      university: "Dr. A. P. J. Abdul Kalam Technical University",
      date: "2023 - 2027",
      description: "Specialized in Software Development and Machine Learning"
    }
  ];

  const certifications = [
    {
      title: "Software Engineering Job Simulation",
      issuer: "Accenture Nordics",
      date: "Dec 2024",
      credential: "Credential ID: QJPKHz6jW36kaGwTc"
    },
    {
      title: "Introduction to MongoDB",
      issuer: "MongoDB",
      date: "Jan 2025",
      credential: "Credential ID: MDB73q55kjtq4"
    }
  ];

  return (
    <section id="education" className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.sectionTitle}>
          <FiBookOpen className={styles.icon} />
          Education & Certifications
        </h2>

        <div className={styles.content}>
          {/* Education Timeline */}
          <div className={styles.education}>
            <h3>Education</h3>
            <div className={styles.timeline}>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className={styles.timelineItem}
                  initial={{ x: -50 }}
                  animate={{ x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.timelineContent}>
                    <h4>{edu.degree}</h4>
                    <p className={styles.institution}>{edu.university}</p>
                    <p className={styles.date}>{edu.date}</p>
                    <p className={styles.description}>{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Grid */}
          <div className={styles.certifications}>
            <h3>Certifications</h3>
            <div className={styles.cardsContainer}>
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className={styles.card}
                  initial={{ y: 50 }}
                  whileInView={{ y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4>{cert.title}</h4>
                  <p className={styles.issuer}>{cert.issuer}</p>
                  <div className={styles.details}>
                    <span className={styles.date}>{cert.date}</span>
                    <span className={styles.credential}>{cert.credential}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <motion.button
            className={styles.resumeButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
                const link = document.createElement('a');
                link.href = 'https://drive.google.com/file/d/1ytXjWLXIR_-goY3oAsMkKHtO3ErCOtp_/view?usp=sharing'; // Update with the correct file path
                link.download = 'Harsh_Kumar_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }}
            >
            <FiDownload /> Download Full Resume
        </motion.button>

      </motion.div>
    </section>
  );
};

export default EducationCertifications;