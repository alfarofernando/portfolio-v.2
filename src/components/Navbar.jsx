import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { useLanguage } from "../context/LanguageContext";
import AnimatedContent from "./AnimatedContent";

export default function NavBar({ darkMode, setDarkMode }) {
    const { language, changeLanguage, locales } = useLanguage();

    const languageSelector = () => {
        changeLanguage(language === "es" ? "en" : "es");
    };

    return (
        <motion.nav
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 w-full justify-items-center justify-center z-30 bg-gray-900 bg-opacity-80 backdrop-blur-lg shadow-lg"
        >
            <div className="flex mb-1 ">
                {/* Menú de navegación */}
                <ul className="flex space-x-2 lg:space-x-4 xl:space-x-6 text-xs sm:text-sm md:text-base lg:text-2xl xl:text-3xl 2xl:text-4xl">
                    <li>
                        {/* Botón de Dark Mode */}
                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setDarkMode(!darkMode)}
                            className="rounded-full cursor-pointer hover:shadow-md hover:shadow-yellow-300"
                        >
                            {darkMode ? "🌞 " : "🌙 "}
                        </motion.button>
                    </li>
                    <li>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                to="Welcome"
                                smooth={true}
                                duration={1500}
                                className="text-white hover:text-indigo-500 cursor-pointer"
                            >
                                <AnimatedContent keyProp={language}>
                                    <span className="dark:hover:shadow-md dark:hover:shadow-gray-500 rounded-full px-2">
                                        {locales[language].home}
                                    </span>
                                </AnimatedContent>
                            </Link>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                to="Projects"
                                smooth={true}
                                duration={1500}
                                className="text-white hover:text-indigo-500 cursor-pointer"
                            >
                                <AnimatedContent keyProp={language}>
                                    {locales[language].projects}
                                </AnimatedContent>
                            </Link>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                to="AboutMe"
                                smooth={true}
                                duration={1500}
                                className="text-white hover:text-indigo-500 cursor-pointer"
                            >
                                <AnimatedContent keyProp={language}>
                                    {locales[language].aboutMe}
                                </AnimatedContent>
                            </Link>
                        </motion.div>
                    </li>
                    <li>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={languageSelector}
                            className={`rounded-full cursor-pointer px-4  text-white font-bold shadow-md transition duration-300 
      ${language === 'es' ? 'hover:bg-yellow-600 shadow-red-500' : 'hover:bg-blue-600 shadow-red-500'}`}
                        >
                            <AnimatePresence mode="wait">
                                {language === 'es' ? (
                                    <motion.div
                                        key="es"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex items-center space-x-1"
                                    >
                                        <span className="text-red-500">E</span>
                                        <span className="text-yellow-500">S</span>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="en"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex items-center space-x-1"
                                    >
                                        <span className="text-blue-300">E</span>
                                        <span className="text-red-500">N</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>

                    </li>
                </ul>
            </div>
        </motion.nav >
    );
}
