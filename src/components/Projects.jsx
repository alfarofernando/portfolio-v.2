import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedContent from "./AnimatedContent";
import Modal from "react-modal";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import alfateamLogo from "../assets/images/AlfaTeam/alfateamLogo.webp";
import alfateam1 from "../assets/images/AlfaTeam/1.webp";
import alfateam2 from "../assets/images/AlfaTeam/2.webp";
import alfateam3 from "../assets/images/AlfaTeam/3.webp";
import alfateam4 from "../assets/images/AlfaTeam/4.webp";
import alfateam5 from "../assets/images/AlfaTeam/5.webp";
import alfateam6 from "../assets/images/AlfaTeam/6.webp";
import alfateam7 from "../assets/images/AlfaTeam/7.webp";
import alfateam8 from "../assets/images/AlfaTeam/8.webp";
import alfateam9 from "../assets/images/AlfaTeam/9.webp";
import alfateam10 from "../assets/images/AlfaTeam/10.webp";
import alfateam11 from "../assets/images/AlfaTeam/11.webp";
import alfateam12 from "../assets/images/AlfaTeam/12.webp";
import storepcLogo from "../assets/images/StorePC/storepcLogo.webp";
import storepc1 from "../assets/images/StorePC/1.webp";
import storepc2 from "../assets/images/StorePC/2.webp";
import storepc3 from "../assets/images/StorePC/3.webp";
import storepc4 from "../assets/images/StorePC/4.webp";
import storepc5 from "../assets/images/StorePC/5.webp";
import storepc6 from "../assets/images/StorePC/6.webp";
import storepc7 from "../assets/images/StorePC/7.webp";
import storepc8 from "../assets/images/StorePC/8.webp";
import storepc9 from "../assets/images/StorePC/9.webp";
import storepc10 from "../assets/images/StorePC/10.webp";
import storepc11 from "../assets/images/StorePC/11.webp";
import storepc12 from "../assets/images/StorePC/12.webp";
import storepc13 from "../assets/images/StorePC/13.webp";
import storepc14 from "../assets/images/StorePC/14.webp";
import storepc15 from "../assets/images/StorePC/15.webp";
import storepc16 from "../assets/images/StorePC/16.webp";
import storepc17 from "../assets/images/StorePC/17.webp";
import portfolioOldLogo from "../assets/images/PortfolioOld/portfolioOldLogo.webp";
import portfolioOld from "../assets/images/PortfolioOld/portfolioOld.webp";

import 'react-medium-image-zoom/dist/styles.css';

export default function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const { language, locales } = useLanguage();

    const projects = [
        {
            title: "AlfaTeam",
            description: locales[language].project1Description,
            image: alfateamLogo,
            link: "https://github.com/alfarofernando/Alfa_Team_Frontend",
            screenshots: [
                { original: alfateam1, thumbnail: alfateam1 },
                { original: alfateam2, thumbnail: alfateam2 },
                { original: alfateam3, thumbnail: alfateam3 },
                { original: alfateam4, thumbnail: alfateam4 },
                { original: alfateam5, thumbnail: alfateam5 },
                { original: alfateam6, thumbnail: alfateam6 },
                { original: alfateam7, thumbnail: alfateam7 },
                { original: alfateam8, thumbnail: alfateam8 },
                { original: alfateam9, thumbnail: alfateam9 },
                { original: alfateam10, thumbnail: alfateam10 },
                { original: alfateam11, thumbnail: alfateam11 },
                { original: alfateam12, thumbnail: alfateam12 },
            ],
        },
        {
            title: "StorePC",
            description: locales[language].project2Description,
            image: storepcLogo,
            link: "https://github.com/zfranco21/storepc-frontend",
            screenshots: [
                { original: storepc1, thumbnail: storepc1 },
                { original: storepc2, thumbnail: storepc2 },
                { original: storepc3, thumbnail: storepc3 },
                { original: storepc4, thumbnail: storepc4 },
                { original: storepc5, thumbnail: storepc5 },
                { original: storepc6, thumbnail: storepc6 },
                { original: storepc7, thumbnail: storepc7 },
                { original: storepc8, thumbnail: storepc8 },
                { original: storepc9, thumbnail: storepc9 },
                { original: storepc10, thumbnail: storepc10 },
                { original: storepc11, thumbnail: storepc11 },
                { original: storepc12, thumbnail: storepc12 },
                { original: storepc13, thumbnail: storepc13 },
                { original: storepc14, thumbnail: storepc14 },
                { original: storepc15, thumbnail: storepc15 },
                { original: storepc16, thumbnail: storepc16 },
                { original: storepc17, thumbnail: storepc17 },

            ],
        },
        {
            title: "Portafolio V-1",
            description: locales[language].project3Description,
            image: portfolioOldLogo,
            link: "https://github.com/alfarofernando/portfolio-v.1",
            screenshots: [
                { original: portfolioOld, thumbnail: portfolioOld },
            ],
        },
    ];

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <div id="Projects" className="bg-gray-100 dark:bg-black py-16">
            <div className="max-w-4xl mx-auto px-4">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project, index) => {
                        const { ref, inView } = useInView({
                            triggerOnce: false,
                            threshold: 0.1,
                        });

                        const openProjectModal = () => {
                            setSelectedProject(project);
                            setIsModalOpen(true);
                        };

                        return (
                            <motion.div
                                key={index}
                                ref={ref}
                                className="relative group bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden cursor-pointer"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                animate={{
                                    opacity: inView ? 1 : 0,
                                    x: inView ? 0 : index % 2 === 0 ? -100 : 100,
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                    delay: index * 0.2,
                                }}
                            >
                                {/* Imagen del Proyecto */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />

                                <div className="p-4">
                                    <p className="text-sm md:text-base text-gray-800 dark:text-gray-100">
                                        {project.title}
                                    </p>
                                </div>

                                {/* Botón para abrir descripción */}
                                <button
                                    className="mt-2 bg-blue-600 text-white px-3 py-2 text-sm rounded-md hover:bg-blue-700 transition w-full"
                                    onClick={openProjectModal}
                                >
                                    {locales[language].viewDetails}
                                </button>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Modal con descripción y botones */}
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Project Details"
                    appElement={document.getElementById("root")}
                    ariaHideApp={true}
                    className="relative w-[90%] h-[90%] bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg z-50 overflow-hidden"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40"
                >
                    <div className="flex flex-col h-full">
                        {/* Descripción del proyecto */}
                        <div className="flex-grow overflow-auto">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                                {selectedProject?.title}
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                {selectedProject?.description}
                            </p>
                        </div>

                        {/* Botones debajo de la descripción */}
                        <div className="mt-4 flex flex-col gap-4">
                            <button
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                onClick={() => {
                                    // Lógica para abrir galería
                                }}
                            >
                                {locales[language].projectScreenshot}
                            </button>
                            <button
                                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                                onClick={() => window.open(selectedProject?.link, "_blank")}
                            >
                                {locales[language].projectRepository}
                            </button>
                            <button
                                onClick={closeModal}
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                            >
                                {locales[language].closeModal}
                            </button>
                        </div>
                    </div>
                </Modal>
            </div >
        </div >
    );
};


