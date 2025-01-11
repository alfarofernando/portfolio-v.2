import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavBar from './components/Navbar';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import darkBg from './assets/dark-bg.webp';
import lightBg from './assets/light-bg.webp';

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
