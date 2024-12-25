import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AboutMe = () => {
    const items = [
        {
            title: "Graduación en UTN",
            date: "Diciembre 2024",
            description: "Me recibí como Técnico Universitario en Programación.",
        },
        {
            title: "Primer Proyecto Freelance",
            date: "Enero 2023",
            description: "Desarrollé una página web para una tienda de insumos.",
        },
        {
            title: "Aprendizaje del Stack MERN",
            date: "2022",
            description: "Domino MongoDB, Express.js, React y Node.js.",
        },
    ];

    return (
        <section id="AboutMe" className="py-12 bg-gray-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Sobre Mí
            </h2>
            <div className="relative w-full max-w-4xl mx-auto">
                {/* Línea central */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

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
            className={`flex w-full my-8 ${align === "left" ? "justify-start" : "justify-end"
                }`}
        >
            <motion.div
                initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
                animate={{
                    opacity: inView ? 1 : 0,
                    x: inView ? 0 : align === "left" ? -50 : 50,
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`relative bg-white border border-gray-300 rounded-lg shadow-lg p-6 max-w-sm ${align === "left" ? "mr-8" : "ml-8"
                    }`}
            >
                <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-500">{date}</p>
                <p className="mt-2 text-gray-700">{description}</p>
                {/* Conector a la línea central */}
                <div
                    className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-300 rounded-full ${align === "left" ? "-right-2" : "-left-2"
                        }`}
                ></div>
            </motion.div>
        </div>
    );
};

export default AboutMe;
