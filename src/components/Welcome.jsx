import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../context/LanguageContext";
import profile from "../assets/profile.webp";
import "./Welcome.css";
import AnimatedContent from "./AnimatedContent";

export default function Welcome() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const { language, locales } = useLanguage();

    return (
        <>

            <motion.div
                id="Welcome"
                className="h-screen flex flex-col items-center  dark:bg-black bg-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1 }}
                ref={ref}
            >

                <ul className="flex justify-center space-x-16 mt-2 lg:mt-4 2xl:mt-6 ease ">
                    <motion.li whileHover={{ scale: 1.5, rotate: -1800 }} transition={{
                        duration: 1,
                        ease: "easeInOut",
                    }} className="transition-transform">
                        <a
                            href="https://github.com/tu_usuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                        >
                            <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 dark:hover:shadow-md dark:hover:shadow-gray-300 rounded-full" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.125-.305-.535-1.53.115-3.18 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013.005-.405c1.02.005 2.045.138 3.005.405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.65.245 2.875.12 3.18.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.1.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .32.21.705.825.585C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>
                    </motion.li>
                    <motion.div
                        id="image"
                        className="mt-6 lg:mt-10 2xl:mt-14"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: inView ? 1 : 0.5, opacity: inView ? 1 : 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        whileHover={{ rotateZ: 720, rotateX: -720, rotateY: 720, transition: { duration: 3, ease: "easeInOut" } }} // Duración del giro
                    >
                        <img
                            src={profile}
                            alt="Fernando"
                            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 object-cover border-4 border-gray-300 dark:border-gray-700 shadow-lg dark:hover:shadow-lg dark:hover:shadow-gray-300 rounded-full"

                        />
                    </motion.div>
                    <motion.li whileHover={{ scale: 1.5, rotate: 1800 }} transition={{
                        duration: 1,
                        ease: "easeInOut",
                    }} className="transition-transform">
                        <a
                            href="https://www.linkedin.com/in/tu_usuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                        >
                            <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 dark:hover:shadow-md dark:hover:shadow-gray-300 rounded-full" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.83-1.17 2.17-1.5 3.5-1.5 2.48 0 4.5 2.02 4.5 4.5v5.5z" />
                            </svg>
                        </a>
                    </motion.li>
                </ul>




                <motion.div
                    id="aboutMe"
                    className="text-center justify-center text-gray-800 dark:text-gray-200"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <ul className="space-y-2 lg:space-y-4 2xl:space-y-6">
                        <AnimatedContent keyProp={language}>
                            <motion.li whileHover={{ scale: 1.3, rotateY: 360, transition: { duration: 1.5, ease: "easeInOut" } }} className="transition-transform">
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold p-1 md:p-2 xl:p-4 dark:hover:shadow-md dark:hover:shadow-gray-500 rounded-full">
                                    <span>{locales[language].home1}{" "}</span>
                                    <span className="text-indigo-600 dark:text-indigo-400">Fernando</span> ✌
                                </h1>

                            </motion.li>
                            <motion.li whileHover={{ scale: 1.3, rotateY: -360, transition: { duration: 1.5, ease: "easeInOut" } }} className="transition-transform">
                                <h2 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold p-1 md:p-2 xl:p-4">
                                    <span className="dark:hover:shadow-md dark:hover:shadow-gray-500 rounded-full px-2">🚀 {locales[language].home2}</span>
                                </h2>
                            </motion.li>
                            <motion.li whileHover={{ scale: 1.3, rotateX: 360, transition: { duration: 1.5, ease: "easeInOut" } }} className="transition-transform">
                                <h3 className="text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl p-1 md:p-2 xl:p-4 dark:hover:shadow-md dark:hover:shadow-gray-500 rounded-full">
                                    {locales[language].home3} 🏆
                                </h3>
                            </motion.li>
                            <motion.li whileHover={{ scale: 1.3, rotateX: -360, transition: { duration: 1.5, ease: "easeInOut" } }} className="transition-transform">
                                <h3 className="text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl p-1 md:p-2 xl:p-4 dark:hover:shadow-md dark:hover:shadow-gray-500 rounded-full">
                                    <a href="mailto:alfarofernando@live.com" className="text-blue-500 hover:underline">
                                        <span className="dark:hover:shadow-md dark:hover:shadow-gray-500 rounded-full px-2">📮 alfarofernando@live.com</span>
                                    </a>
                                </h3>
                            </motion.li>
                        </AnimatedContent>
                    </ul>


                </motion.div>
            </motion.div>
        </>
    );
}
