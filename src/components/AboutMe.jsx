import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AboutMe = () => {
    const items = [
        {
            title: "Inicio de estudios en UTN",
            date: "Febrero 2023",
            description: "El inicio de la aventura de mi vida en el camino de la programacion"
        },
        {
            title: "Curso HTML-CSS",
            date: "Enero 2024",
            description: "Fundamentos de desarrollo web orientado a Front-End"
        },
        {
            title: "Curso C#",
            date: "Febrero a Marzo 2024",
            description: "Desde los fundamentos hasta POO"
        },
        {
            title: "Curso HTML, CSS, Flexbox, Sass, Bootstrap 5, Git y Github Page",
            date: "Marzo 2024",
            description: "Realizado en Udemy, donde aprendi diversas tecnologias para el maquetado de paginas web"
        },
        {
            title: "Creacion de primer portafolio",
            date: "Abril 2024",
            description: "Diseñado y creado en HTML, CSS, BOOTSTRAP Y JS"
        },
        {
            title: "Curso Laravel",
            date: "Mayo 2024",
            description: "Curso realizado en Udemy, donde adquiri conocimientos en PHP, Laravel, Composer, Sinfony, Blaze, WordPress"
        },
        {
            title: "Curso SQL",
            date: "Junio 2024",
            description: "Realizado en Youtube, donde adquiri nociones basicas sobre la utilizacion de SQL"
        },
        {
            title: "Curso React",
            date: "Julio 2024",
            description: "Curso realizado en Udemy, logre adquirir los fundamentos de Javascript, para luego adentrarme en la libreria React en profundidad"
        },
        {
            title: "Proyecto Final de tecnicatura",
            date: "Agosto-Diciembre 2024",
            description: "Creacion de pagina web de ventas de cursos de programacion, realizado backend con PHP, base de datos con MySql, frontend con React"
        },
        {
            title: "Inicio Curso Desarrollo web FullStack UTN",
            date: "Octubre 2024",
            description: "Curso orientado a las tecnologias MERN para el desarrollo de aplicaciones web"
        },
        {
            title: "Proyecto integrador curso FullStack",
            date: "Diciembre 2024",
            description: "Creacion de E-commerce de venta de articulos de computacion, realizado backend con Node Express, base de datos MongoDB Atlas , frontend con React"
        },
        {
            title: "Graduación en UTN",
            date: "Diciembre 2024",
            description: "Me recibí como Técnico Universitario en Programación con un promedio de 8,6",
        },
        {
            title: "Proyecto portafolio personal 2.0",
            date: "Diciembre 2024",
            description: "Finalizado los estudios diseñe y desarrolle este portafolio utilizando React y varias librerias de animaciones"
        },
    ];

    return (
        <section id="AboutMe" className="py-12 bg-gray-100 dark:bg-black">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
                Sobre Mí
            </h2>
            <div className="relative w-full max-w-4xl mx-auto">
                {/* Línea central */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 dark:bg-gray-600 h-full"></div>

                {/* Elementos del timeline */}
                {items.map((item, index) => (
                    <TimelineItem
                        key={index}
                        title={item.title}
                        date={item.date}
                        description={item.description}
                        align={index % 2 === 0 ? "left" : "right"}
                    />
                ))}
            </div>
        </section>
    );
};

const TimelineItem = ({ title, date, description, align }) => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`flex w-full my-8 hover:scale-125 transition duration-1000 ease ${align === "left" ? "justify-start" : "justify-end"}`}
        >
            <motion.div
                initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
                animate={{
                    opacity: inView ? 1 : 0,
                    x: inView ? 0 : align === "left" ? -50 : 50,
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`relative bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-6 max-w-sm ${align === "left" ? "mr-8" : "ml-8"}`}
            >
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
                {/* Conector a la línea central */}
                <div
                    className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full ${align === "left" ? "-right-2" : "-left-2"}`}
                ></div>
            </motion.div>
        </div>
    );
};

export default AboutMe;
