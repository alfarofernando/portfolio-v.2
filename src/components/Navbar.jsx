import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import AnimatedContent from "../pages/Homepage/components/AnimatedContent";

export default function NavBar({ darkMode, setDarkMode }) {
    const { language, changeLanguage, locales } = useLanguage();
    const navigate = useNavigate();

    const languageSelector = () => {
        const newLanguage = language === "es" ? "en" : "es";
        changeLanguage(newLanguage);
        document.documentElement.lang = newLanguage;
    };

    return (
        <motion.nav
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 w-full justify-items-center justify-center z-30 bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg"
        >
            <div className="flex mb-1">
                <ul className="flex space-x-3 md:space-x-6 lg:space-x-9 xl:space-x-12 py-1 text-sm md:text-lg lg:text-2xl xl:text-4xl">
                    <li>
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
                        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                            <button
                                onClick={() => navigate("/portfolio-v.2/Home")}
                                className="text-white hover:text-indigo-500 cursor-pointer select-none"
                            >
                                <AnimatedContent keyProp={language}>
                                    {locales[language].home}
                                </AnimatedContent>
                            </button>
                        </motion.div>
                    </li>

                    <li>
                        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                            <button
                                onClick={() => navigate("/portfolio-v.2/Projects")}
                                className="text-white hover:text-indigo-500 cursor-pointer select-none"
                            >
                                <AnimatedContent keyProp={language}>
                                    {locales[language].projects}
                                </AnimatedContent>
                            </button>
                        </motion.div>
                    </li>

                    <li>
                        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                            <button
                                onClick={() => navigate("/portfolio-v.2/AboutMe")}
                                className="text-white hover:text-indigo-500 cursor-pointer select-none"
                            >
                                <AnimatedContent keyProp={language}>
                                    {locales[language].aboutMe}
                                </AnimatedContent>
                            </button>
                        </motion.div>
                    </li>

                    <li>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={languageSelector}
                            className={`rounded-full cursor-pointer px-1 md:px-2 lg:px-3 xl:px-4 text-white font-bold shadow-md transition duration-300 
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
        </motion.nav>
    );
}
