import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import EducationCertifications from './sections/EducationCertifications';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <AnimatePresence>
      <div className="app">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <Projects />
          <Skills />
          <EducationCertifications />
        </motion.main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;