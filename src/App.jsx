import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import darkModeTransition from "./assets/darkMode_transition.webp";
import NavBar from './components/Navbar';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleDarkModeToggle = () => {
    setIsTransitioning(true); // Inicia la transición
    setTimeout(() => {
      setDarkMode(!darkMode); // Cambia el modo después del retraso
    }, 1000); // Sincronizado con el GIF
    setTimeout(() => {
      setIsTransitioning(false); // Finaliza la transición
    }, 3000); // Ajustar según la duración del GIF
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div>
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* GIF de transición */}
            <motion.img
              src={darkModeTransition}
              alt="Transition animation"
              initial={{ scale: darkMode ? 1 : -1 }} // Reversa para darkMode === false
              animate={{ scale: 1 }}
              exit={{ scale: darkMode ? -1 : 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Aplicación principal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isTransitioning ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className={`transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
      >
        <NavBar darkMode={darkMode} setDarkMode={handleDarkModeToggle} />
        <Welcome />
        <Projects />
        <AboutMe />
      </motion.div>
    </div>
  );
}

export default App;
