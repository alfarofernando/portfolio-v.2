import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedContent from "../Homepage/components/AnimatedContent";
import { useLanguage } from "../../context/LanguageContext";

// Logos (no screenshots)
import alfateamLogo from "../../assets/images/AlfaTeam/alfateamLogo.webp";
import storepcLogo from "../../assets/images/StorePC/storepcLogo.webp";
import portfolioOldLogo from "../../assets/images/PortfolioOld/portfolioOldLogo.webp";
import noteItLogo from "../../assets/images/NoteIt/noteItLogo.webp";

export default function Projects() {
    const { language, locales } = useLanguage();

    // Array interno (sin screenshots)
    const projects = [
        {
            title: "AlfaTeam",
            description: locales[language].project1Description,
            image: alfateamLogo,
            link: "https://github.com/alfarofernando/Alfa_Team_Frontend",
        },
        {
            title: "StorePC",
            description: locales[language].project2Description,
            image: storepcLogo,
            link: "https://github.com/zfranco21/storepc-frontend",
        },
        {
            title: "Portafolio V‑1",
            description: locales[language].project3Description,
            image: portfolioOldLogo,
            link: "https://github.com/alfarofernando/portfolio-v.1",
        },
        {
            title: "Note:It",
            description: locales[language].project4Description,
            image: noteItLogo,
            link: "https://github.com/alfarofernando/NoteIt",
        },
    ];

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
                                    scale: 1.1, // Aumenta el tamaño al hacer hover en la imagen y botones
                                    transition: { duration: 0.3 },
                                }}
                            >
                                {/* Contenedor de la imagen y los botones adicionales */}
                                <motion.div className="relative group">
                                    {/* Imagen con efecto de blur al hacer hover */}
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-fill"
                                        whileHover={{ filter: "blur(4px)", transition: { duration: 0.3 } }}
                                    />

                                    {/* Botones de galería y repositorio */}
                                    <motion.div
                                        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gray-800 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 0,
                                        }}
                                        whileHover={{ opacity: 1 }}
                                    >
                                        <motion.button
                                            className="bg-blue-600 text-white text-xl p-2 rounded-md hover:bg-blue-700 mb-4"  // Añadido margin-bottom para separar los botones
                                            whileHover={{ scale: 1.1 }}
                                            onClick={() => openModal("gallery", project)}
                                        >
                                            {locales[language].projectScreenshot}
                                        </motion.button>

                                        <motion.button
                                            className="bg-green-600 text-white text-xl p-2 rounded-md hover:bg-green-700"
                                            whileHover={{ scale: 1.1 }}
                                            onClick={() => window.open(project.link, "_blank")}
                                        >
                                            {locales[language].projectRepository}
                                        </motion.button>
                                    </motion.div>

                                </motion.div>

                                {/* Botón de ver detalles fuera del grupo */}
                                <div className="">
                                    <button
                                        className="py-2 bg-blue-600 text-white px-3 text-md md:text-lg lg:text-2xl hover:bg-blue-700 transition w-full"
                                        onClick={() => openModal("description", project)}
                                    >
                                        <AnimatedContent keyProp={language}>
                                            {locales[language].viewDetails}
                                        </AnimatedContent>
                                    </button>
                                </div>
                            </motion.div>

                        );
                    })}
                </div>
            </div>
        </div>
    );
}
