import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import styles from './Projects.module.css';
import project_1 from '../assets/images/project_1.png';
import project2 from '../assets/images/project2.jpg';


const projects = [
  {
    id: 1,
    title: 'LinkUp',
    description: '💬 LinkUp – A smarter way to connect! 🔨 Built with Django & React, LinkUp is a modern social media platform designed for seamless networking.',
    tech: ['React', 'Django', 'chakra-ui', 'DjangoRestFramework'],
    image: project_1,
    github: 'https://github.com/HarshKumar79/LinkUp',
    demo: 'https://github.com/HarshKumar79/LinkUp',
  },
  {
    id: 2,
    title: 'Reddit Bot',
    description: 'Reddit Automation Bot – Auto-post, reply, and moderate with AI-powered precision. Smart filtering, seamless API integration, and hands-free subreddit management—all in one.',
    tech: ['Python'],
    image: project2,
    github: 'https://github.com/HarshKumar79/Reddit_Bot',
    demo: 'https://github.com/HarshKumar79/Reddit_Bot',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;