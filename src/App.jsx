import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import darkToLight from './assets/darkToLight.webm';
import lightToDark from './assets/lightToDark.webm';
import NavBar from './components/Navbar';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(darkToLight); // Video de transición actual

  const handleDarkModeToggle = () => {
    setIsTransitioning(true); // Inicia la transición

    // Cambia el video de transición según el nuevo estado de darkMode
    setCurrentVideo(darkMode ? darkToLight : lightToDark);

    // Cambia el modo a los 600ms (mitad de la duración del video)
    setTimeout(() => {
      setDarkMode(prevDarkMode => !prevDarkMode); // Alterna el valor de darkMode
    }, 600);

    // Finaliza la transición después de 1200ms (duración exacta del video)
    setTimeout(() => {
      setIsTransitioning(false); // Finaliza la transición
    }, 1200);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="relative w-full min-h-screen">
      {/* Transición del video */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.5 }}
            transition={{ duration: 0.6 }} // Suaviza el desvanecimiento del fondo
          >
            <motion.video
              src={currentVideo}
              autoPlay
              playsInline
              muted
              className="h-full w-full object-cover"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1, opacity: 0.5 }}
              transition={{ duration: 1.2 }} // Duración del video
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenido principal */}
      {!isTransitioning && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-0 w-full min-h-screen overflow-hidden"
        >
          <NavBar darkMode={darkMode} setDarkMode={handleDarkModeToggle} />
          <Welcome />
          <Projects />
          <AboutMe />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
