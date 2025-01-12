import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedContent from "./AnimatedContent";
import Modal from "react-modal";
import Gallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { useState, useEffect } from "react";
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
import "react-medium-image-zoom/dist/styles.css";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeModal, setActiveModal] = useState(null);

    // Función para abrir un modal
    const openModal = (type, project = null) => {
        if (type === "description") {
            setSelectedProject(project); // Guardamos el proyecto en selectedProject
        } else if (type === "gallery" && project) {
            setSelectedProject(project); // Aseguramos que el proyecto tiene las capturas de pantalla
        }
        setActiveModal(type);
    };


    // Función para cerrar el modal
    const closeModal = () => {
        setActiveModal(null);
        setSelectedProject(null);
    };

    const { language, locales } = useLanguage();



    useEffect(() => {
        // Controlar el scroll del body según el estado de los modales
        if (activeModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto"; // Asegurarse de restaurar el scroll
        };
    }, [activeModal]);

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


    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8, y: "-50%" },
        visible: { opacity: 1, scale: 1, y: "0%" },
        exit: { opacity: 0, scale: 0.8, y: "-50%" },
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 0.75 },
        exit: { opacity: 0 },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { delay: 0.2 } },
        hover: { scale: 1.05 },
        tap: { scale: 0.95 },
    };

    return (
        <div id="Projects" className=" py-16">
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


                {/* Modal con descripción y botones */}
                <Modal
                    isOpen={activeModal === "description"}
                    onRequestClose={closeModal}
                    contentLabel="Project Details"
                    appElement={document.getElementById("root")}
                    ariaHideApp={true}
                    className="relative w-[95%] h-[95%] bg-opacity-85 bg-gray-100 dark:bg-gray-900 p-2 rounded-lg shadow-lg z-50 overflow-hidden transition-all duration-1000"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="relative w-full h-full flex flex-col"
                    >
                        {/* Título del proyecto */}
                        <motion.h2
                            className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center"
                            initial={{ y: -30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {selectedProject?.title}
                        </motion.h2>

                        {/* Descripción del proyecto */}
                        <motion.p
                            className="text-3xl text-gray-800 dark:text-gray-300 mb-1 text-center flex-grow overflow-y-auto"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {selectedProject?.description}
                        </motion.p>

                        {/* Botones fijos en la parte inferior */}
                        <div className=" w-full bg-none p-1 flex flex-col space-y-2 justify-end items-center">

                            {/* Botones de descripción y repositorio */}
                            <div className="w-full flex justify-between space-x-4">
                                <motion.button
                                    className="text-xl bg-blue-600 text-white px-2 py-1 rounded-md w-1/2 hover:bg-blue-700 transition-transform transform hover:scale-105"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => openModal("gallery", selectedProject)}
                                >
                                    <i className="fas fa-image mr-2"></i> {locales[language].projectScreenshot}
                                </motion.button>

                                <motion.button
                                    className="text-xl bg-green-600 text-white px-2 py-1 rounded-md w-1/2 hover:bg-green-700 transition-transform transform hover:scale-105"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => window.open(selectedProject?.link, "_blank")}
                                >
                                    <i className="fas fa-code mr-2"></i> {locales[language].projectRepository}
                                </motion.button>
                            </div>

                            {/* Botón para cerrar el modal */}
                            <motion.button
                                className="bg-red-500 text-white px-2 py-1 rounded-md w-full hover:bg-red-600 transition-transform transform hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={closeModal}
                            >
                                <i className="fas fa-times mr-2"></i> {locales[language].closeModal}
                            </motion.button>
                        </div>
                    </motion.div>
                </Modal>



                {/* Modal para la galería de imágenes */}
                <Modal
                    isOpen={activeModal === "gallery"}
                    onRequestClose={closeModal}
                    contentLabel="Project Screenshots"
                    appElement={document.getElementById("root")}
                    ariaHideApp={true}
                    className="relative w-[95%] h-[95%] bg-opacity-80 bg-gray-100 dark:bg-gray-900 p-2 rounded-lg shadow-lg z-50 overflow-hidden"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40"
                >
                    <div className="relative w-full h-full flex flex-col">
                        {/* Galería de imágenes */}
                        <div className="flex-grow w-full overflow-y-auto">
                            <Gallery
                                items={selectedProject?.screenshots || []}
                                showThumbnails={false}
                                showFullscreenButton={false}
                                showPlayButton={false}
                                showNav={true}
                                renderItem={(item) => (
                                    <div className="w-full h-full flex justify-center items-center overflow-auto">
                                        <img
                                            src={item.original}
                                            alt="Screenshot"
                                            className="w-full h-auto object-fill bg-opacity-80 bg-gray-100 dark:bg-black"
                                        />
                                    </div>
                                )}
                            />
                        </div>

                        {/* Botones fijos en la parte inferior */}
                        <div className=" w-full bg-none p-1 flex flex-col space-y-2 justify-end items-center">
                            {/* Botones de descripción y repositorio */}
                            <div className="w-full flex justify-between space-x-4">
                                <motion.button
                                    className="text-xl bg-blue-600 text-white px-2 py-1 rounded-md w-1/2 hover:bg-blue-700 transition-transform transform hover:scale-105"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => openModal("description", selectedProject)}
                                >
                                    <i className="fas fa-info-circle mr-2"></i> {locales[language].viewDetails}
                                </motion.button>

                                <motion.button
                                    className="text-xl bg-green-600 text-white px-2 py-1 rounded-md w-1/2 hover:bg-green-700 transition-transform transform hover:scale-105"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => window.open(selectedProject?.link, "_blank")}
                                >
                                    <i className="fas fa-code mr-2"></i> {locales[language].projectRepository}
                                </motion.button>
                            </div>

                            {/* Botón para cerrar el modal */}
                            <motion.button
                                className="bg-red-500 text-white px-2 py-1 rounded-md w-full hover:bg-red-600 transition-transform transform hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={closeModal}
                            >
                                <i className="fas fa-times mr-2"></i> {locales[language].closeModal}
                            </motion.button>
                        </div>
                    </div>
                </Modal>

            </div>
        </div>
    );
}


