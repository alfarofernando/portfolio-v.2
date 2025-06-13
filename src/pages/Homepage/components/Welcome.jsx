import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../../../context/LanguageContext.jsx";
import AnimatedContent from "./AnimatedContent.jsx";
import TechCarousel from "./TechCarousel.jsx";

export default function Welcome() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const { language, locales } = useLanguage();

    const cv = language === "es"
        ? "/portfolio-v.2/cv-AlfaroFernando-Esp.pdf"
        : "/portfolio-v.2/cv-AlfaroFernando-Eng.pdf";

    return (
        <>
            <motion.div
                id="Welcome"
                className="h-screen flex flex-col items-center mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1 }}
                ref={ref}
            >
                <motion.div
                    id="image"
                    className="mt-10 md:mt-12 lg:mt-14 xl:mt-18"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: inView ? 1 : 0.5, opacity: inView ? 1 : 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    whileHover={{ rotateZ: 720, rotateX: -720, rotateY: 720, transition: { duration: 3, ease: "easeInOut" } }}
                >
                    <img
                        src="/android-chrome-512x512.png"
                        alt="Fernando"
                        className="w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72 object-cover border-4 border-gray-300 dark:border-gray-700 shadow-lg dark:hover:shadow-lg dark:hover:shadow-gray-300 rounded-full"
                    />
                </motion.div>

                <motion.div
                    id="aboutMe"
                    className="text-center justify-center text-gray-800 dark:text-gray-200"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <ul>
                        <AnimatedContent keyProp={language}>
                            <motion.li
                                whileHover={{ scale: 1.3, rotateY: 360, transition: { duration: 1.5, ease: "easeInOut" } }}
                                className="transition-transform"
                            >
                                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold p-2 rounded-full">
                                    <span>{locales[language].home1}{" "}</span>
                                    <span className="text-indigo-600 dark:text-indigo-400">Fernando</span> ✌
                                </h1>
                            </motion.li>
                            <motion.li
                                whileHover={{ scale: 1.3, rotateY: -360, transition: { duration: 1.5, ease: "easeInOut" } }}
                                className="transition-transform"
                            >
                                <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold p-2 pb-2 mb-2">
                                    <span className="rounded-full px-2">🚀 {locales[language].home2}</span>
                                </h2>
                            </motion.li>
                        </AnimatedContent>
                    </ul>
                </motion.div>

                {/* Aislar el TechCarousel */}
                <div className="w-full flex justify-center mt-4">
                    <TechCarousel />
                </div>

                <motion.div
                    id="cvSection"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <AnimatedContent keyProp={language}>
                        <motion.li
                            whileHover={{ scale: 1.1, transition: { duration: 0.5, ease: "easeInOut" } }}
                            className="relative group transition-transform"
                        >
                            <a
                                href={cv}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative inline-block rounded-full text-lg md:text-xl lg:text-2xl xl:text-3xl px-6 py-3 font-semibold text-white bg-blue-500 shadow-md hover:bg-blue-600 transition-all duration-500 overflow-hidden"
                            >
                                <span
                                    className="absolute inset-0 rounded-full bg-blue-700 opacity-0 group-hover:opacity-25 transition-opacity duration-500"
                                ></span>
                                <span className="relative z-10"> {locales[language].cv} 📄</span>
                            </a>
                        </motion.li>
                    </AnimatedContent>
                </motion.div>

                <ul className="flex justify-center space-x-16 md:space-x-0 mt-1 lg:mt-2 2xl:mt-3">
                    <motion.li
                        whileHover={{ scale: 1.3, rotate: -1800 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="transition-transform md:fixed md:top-40 md:right-40 lg:right-70 xl:right-90"
                    >
                        <a
                            href="https://github.com/alfarofernando"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                        >
                            <svg
                                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 dark:hover:shadow-md dark:hover:shadow-gray-300 rounded-full"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.125-.305-.535-1.53.115-3.18 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013.005-.405c1.02.005 2.045.138 3.005.405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.65.245 2.875.12 3.18.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.1.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .32.21.705.825.585C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>
                    </motion.li>

                    <motion.li
                        whileHover={{ scale: 1.3, rotate: 1800 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="transition-transform md:fixed md:top-40 md:left-40 lg:left-70 xl:left-90"
                    >
                        <a
                            href="https://www.linkedin.com/in/fernando-alfaro-132973246/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                        >
                            <svg
                                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 dark:hover:shadow-md dark:hover:shadow-gray-300 rounded-full"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.83-1.17 2.17-1.5 3.5-1.5 2.48 0 4.5 2.02 4.5 4.5v5.5z" />
                            </svg>
                        </a>
                    </motion.li>
                </ul>
            </motion.div>
        </>
    );
}
