import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function NavBar({ darkMode, setDarkMode }) {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 left-0 w-full z-30 bg-gray-900 bg-opacity-80 backdrop-blur-lg shadow-lg"
        >
            <div className="flex justify-between max-w-7xl mx-auto p-2 items-center text-2xl">
                {/* Botón de Dark Mode */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setDarkMode(!darkMode)}
                    className="rounded-full cursor-pointer shadow-md"
                >
                    {darkMode ? "🌞 " : "🌙 "}
                </motion.button>
                {/* Menú de navegación */}
                <ul className="flex space-x-12">
                    <li>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                to="Welcome"
                                smooth={true}
                                duration={1500}
                                className="text-white hover:text-indigo-500 cursor-pointer"
                            >
                                Welcome
                            </Link>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                to="Projects"
                                smooth={true}
                                duration={1500}
                                className="text-white hover:text-indigo-500 cursor-pointer"
                            >
                                Projects
                            </Link>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                to="AboutMe"
                                smooth={true}
                                duration={1500}
                                className="text-white hover:text-indigo-500 cursor-pointer"
                            >
                                About Me
                            </Link>
                        </motion.div>
                    </li>
                </ul>
            </div>
        </motion.nav>
    );
}
