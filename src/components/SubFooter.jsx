import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

/**
 * SubFooter – muestra el sitemap del sitio.
 * Colócalo justo encima de <Footer /> en tu layout principal.
 */
export default function SubFooter() {
    const navigate = useNavigate();
    const { language } = useLanguage();

    // Etiquetas según idioma
    const labels = {
        home: language === "es" ? "Inicio" : "Home",
        projects: language === "es" ? "Proyectos" : "Projects",
        about: language === "es" ? "Sobre mí" : "About Me",
        sitemap: "sitemap.xml",
    };

    const links = [
        { label: labels.home, to: "/portfolio-v.2/Home" },
        { label: labels.projects, to: "/portfolio-v.2/Projects" },
        { label: labels.about, to: "/portfolio-v.2/AboutMe" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full bg-gray-800 bg-opacity-50 backdrop-blur-lg border-t border-gray-700 py-3"
        >
            <div className="container mx-auto flex flex-wrap justify-center items-center text-xs sm:text-sm lg:text-base space-x-4 sm:space-x-6">
                {/* Rutas internas */}
                {links.map(({ label, to }) => (
                    <button
                        key={to}
                        onClick={() => navigate(to)}
                        className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 focus:outline-none"
                    >
                        {label}
                    </button>
                ))}

                {/* Sitemap físico (externo) */}
                <a
                    href="/portfolio-v.2/sitemap.xml"
                    className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {labels.sitemap}
                </a>
            </div>
        </motion.div>
    );
}
