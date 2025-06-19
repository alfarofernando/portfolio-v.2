import { useEffect, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import darkBg from './assets/dark-bg.jpg';
import lightBg from './assets/light-bg.jpg';
import Router from "./router/Router.jsx";
import SubFooter from "./components/SubFooter.jsx";

const NavBar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [darkMode, setDarkMode] = useState(true);
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
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col items-center space-y-4">
          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          {/* Texto de carga */}
          <p className="text-lg text-gray-700 dark:text-gray-300">Cargando...</p>
        </div>
      </div>
    );
  }


  return (
    <motion.div
      className={`relative w-full min-h-screen bg-cover bg-center transition-all duration-500`}

      style={{
        backgroundImage: `url(${darkMode ? darkBg : lightBg})`
      }}

      initial={{ opacity: 0, scale: 1.10 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.10 }}
      transition={{
        opacity: { duration: 1, ease: "easeInOut" },
        scale: { duration: 1, ease: "easeInOut" },
      }}
    >
      {/* Contenido principal */}
      <div className="relative z-0 w-full min-h-screen overflow-hidden">
        <NavBar darkMode={darkMode} setDarkMode={handleDarkModeToggle} />
        <Router />
        <Footer />
      </div>
    </motion.div>
  );
}

export default App;
