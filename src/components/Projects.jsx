import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useState } from "react";
import pcLlamas from "../assets/pc-llamas.webp";  // Asegúrate de que la imagen exista en esta ruta
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'; // Importa los estilos de la librería de zoom

export default function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    // Lista de proyectos con capturas de pantalla
    const projects = [
        {
            title: "Project 1",
            description: "A brief description of the project goes here.",
            image: pcLlamas, // Pasando la ruta directamente como cadena
            link: "#",
            screenshots: [
                { original: pcLlamas, thumbnail: pcLlamas },
                { original: pcLlamas, thumbnail: pcLlamas },
            ],
        },
        {
            title: "Project 2",
            description: "Another brief description of the project goes here.",
            image: "path/to/image2.jpg",  // Asegúrate de que esta ruta sea correcta
            link: "#",
            screenshots: [
                { original: "path/to/screenshot1.jpg", thumbnail: "path/to/screenshot1-thumb.jpg" },
                { original: "path/to/screenshot2.jpg", thumbnail: "path/to/screenshot2-thumb.jpg" },
            ],
        },
        {
            title: "Project 3",
            description: "A brief description of this project goes here.",
            image: "path/to/image3.jpg",  // Asegúrate de que esta ruta sea correcta
            link: "#",
            screenshots: [
                { original: "path/to/screenshot1.jpg", thumbnail: "path/to/screenshot1-thumb.jpg" },
                { original: "path/to/screenshot2.jpg", thumbnail: "path/to/screenshot2-thumb.jpg" },
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
        <div id="Projects" className=" bg-gray-100 py-16">
            <div className="max-w-4xl mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center text-gray-800 mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    My Projects
                </motion.h2>

                <div className="space-y-8">
                    {projects.map((project, index) => {
                        const { ref, inView } = useInView({
                            triggerOnce: false, // Cambié esto a false para que la animación se repita cada vez que el proyecto entra en vista
                            threshold: 0.1,
                        });

                        return (
                            <motion.div
                                key={index}
                                ref={ref}
                                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                animate={{
                                    opacity: inView ? 1 : 0,
                                    x: inView ? 0 : index % 2 === 0 ? -100 : 100,
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeOut",
                                    delay: index * 0.2,
                                }}
                                whileHover={{ scale: 1.05 }}
                                onClick={() => handleProjectClick(project)}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-2xl font-semibold text-gray-800">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mt-2">
                                        {project.description}
                                    </p>
                                    <motion.a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-4 text-blue-500 hover:underline"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        View Project
                                    </motion.a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Modal para la galería */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Project Screenshots"
                appElement={document.getElementById('root')}  // Asegúrate de que 'root' sea el id de tu contenedor principal
                ariaHideApp={true}  // Esta propiedad asegura que el fondo no sea interactuable mientras el modal está abierto
                className="relative max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg z-50"  // Haciendo el modal más ancho
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40"  // Fondo del modal con z-index alto
            >
                <div className="w-full">
                    <h3 className="text-2xl font-semibold mb-4">{selectedProject?.title}</h3>
                    <Gallery
                        items={selectedProject?.screenshots || []}
                        showThumbnails={true}
                        thumbnailHeight={80}
                        thumbnailWidth={120}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showNav={true}
                        renderItem={(item) => (
                            <Zoom>
                                <img
                                    src={item.original}
                                    alt="Screenshot"
                                    className="w-full h-auto object-contain"
                                />
                            </Zoom>
                        )}
                    />
                    <button
                        onClick={closeModal}
                        className="mt-4 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Close
                    </button>
                </div>
            </Modal>
        </div>
    );
}
