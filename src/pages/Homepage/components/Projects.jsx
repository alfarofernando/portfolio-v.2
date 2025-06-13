// src/components/Projects/Projects.tsx  (o la ruta donde esté)

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedContent from "./AnimatedContent";
import { useLanguage } from "../../../context/LanguageContext";
import { getProjects } from "../../Projects/Components/Data"; // ← NUEVO IMPORT

export default function Projects() {
    const { language, locales } = useLanguage();

    // Obtenemos el array de proyectos según el idioma actual
    const projects = getProjects(locales, language); // ← NUEVA LÍNEA

    return (
        <div id="Projects" className="py-16">
            <div className="max-w-4xl mx-auto px-4">
                {/* Título de la sección */}
                <motion.h2
                    className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <AnimatedContent keyProp={language}>
                        {locales[language].projectTitle}
                    </AnimatedContent>
                </motion.h2>

                {/* Tarjetas de proyectos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => {
                        const { ref, inView } = useInView({
                            triggerOnce: false,
                            threshold: 0.1,
                        });

                        return (
                            <motion.div
                                key={index}
                                ref={ref}
                                className="relative bg-opacity-80 bg-none dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150 }}
                                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                                transition={{
                                    duration: 1.2,
                                    ease: "easeInOut",
                                    delay: index * 0.2,
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.3 },
                                }}
                            >
                                {/* Imagen + overlay */}
                                <motion.div className="relative group">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-fill"
                                        whileHover={{
                                            filter: "blur(4px)",
                                            transition: { duration: 0.3 },
                                        }}
                                    />

                                    {/* Overlay con título y pills */}
                                    <motion.div
                                        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gray-900 bg-opacity-85 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                    >
                                        <h3 className="text-white text-2xl font-bold mb-4 text-center">
                                            {project.title}
                                        </h3>

                                        <div className="flex flex-wrap justify-center gap-2 px-4">
                                            {project.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Botón Ver detalles */}
                                <button
                                    className="py-2 bg-blue-600 text-white w-full text-md md:text-lg lg:text-2xl hover:bg-blue-700 transition"
                                    onClick={() => openModal("description", project)}
                                >
                                    <AnimatedContent keyProp={language}>
                                        {locales[language].viewDetails}
                                    </AnimatedContent>
                                </button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
