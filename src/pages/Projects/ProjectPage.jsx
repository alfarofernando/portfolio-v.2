// src/pages/Projects/ProjectPage.jsx
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { getProjects } from "./Components/Data";
import { slugify } from "../../utils/slugify";
import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ProjectPage() {
    const { language, locales } = useLanguage();
    const navigate = useNavigate();
    const { slug } = useParams();
    const location = useLocation();

    let project = location.state?.project;

    if (!project) {
        const all = getProjects(locales, language);
        project = all.find((p) => slugify(p.title) === slug);
    }

    if (!project) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-3xl font-bold">404 – Proyecto no encontrado</h1>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto py-16 px-4">
            <motion.h1
                className="flex justify-center text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {project.title}
            </motion.h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="bg-indigo-500/80 text-white text-sm px-3 py-1 rounded-full"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <ImageGallery
                items={project.screenshots}
                showPlayButton={false}
                showFullscreenButton={false}
                thumbnailPosition="bottom"
            />

            <div className="mt-8 flex justify-center">
                {/* <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                    {locales[language].viewRepo ?? "Ver repositorio"}
                </a> */}
                <button
                    onClick={() => navigate(-1)}
                    className="px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
                >
                    {locales[language].backToProjects ?? "Volver a proyectos"}
                </button>
            </div>
        </div>
    );
}
