import { useEffect, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import darkBg from './assets/dark-bg.webp';
import lightBg from './assets/light-bg.webp';

const NavBar = lazy(() => import('./components/Navbar'));
const Welcome = lazy(() => import('./components/Welcome'));
const Projects = lazy(() => import('./components/Projects'));
const AboutMe = lazy(() => import('./components/AboutMe'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const preloadImages = [darkBg, lightBg];
    const imagePromises = preloadImages.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  if (!imagesLoaded) {
    return <div className="flex justify-center items-center min-h-screen">Cargando...</div>;
  }

  return (
    <motion.div
      className={`relative w-full min-h-screen bg-cover bg-center transition-all duration-500`}

      style={{
        backgroundImage: `url(${darkMode ? darkBg : lightBg})`
      }}

      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{
        opacity: { duration: 1.2, ease: "easeInOut" },
        scale: { duration: 1.2, ease: "easeInOut" },
      }}
    >
      {/* Contenido principal */}
      <div className="relative z-0 w-full min-h-screen overflow-hidden">
        <NavBar darkMode={darkMode} setDarkMode={handleDarkModeToggle} />
        <Welcome />
        <Projects />
        <AboutMe />
        <Footer />
      </div>
    </motion.div>
  );
}

export default App;
