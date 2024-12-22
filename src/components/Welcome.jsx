import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import profile from "../assets/profile.webp";
import "./Welcome.css";

export default function Welcome() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Función para generar pelotitas con tamaños, posiciones y colores aleatorios
        const generateParticles = () => {
            const numParticles = 40; // Número de pelotitas a generar
            const particlesArray = [];

            for (let i = 0; i < numParticles; i++) {
                const size = Math.floor(Math.random() * 30) + 20; // Tamaño aleatorio
                const leftPosition = Math.floor(Math.random() * window.innerWidth); // Posición aleatoria en el eje X
                const topPosition = Math.floor(Math.random() * window.innerHeight); // Posición aleatoria en el eje Y
                const animationDelay = Math.random() * 5; // Retraso aleatorio en la animación

                particlesArray.push({
                    size,
                    left: leftPosition,
                    top: topPosition,
                    delay: animationDelay,
                });
            }

            setParticles(particlesArray);
        };

        generateParticles();
        const interval = setInterval(generateParticles, 100000); // Generar nuevas pelotitas cada 100 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Contenedor de pelotitas detrás de todo el contenido */}
            <div className="particle-container">
                {/* Genera las pelotitas con posiciones aleatorias */}
                {particles.map((particle, index) => (
                    <div
                        key={index}
                        className="particle"
                        style={{
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            left: `${particle.left}px`,
                            top: `${particle.top}px`,
                            animationDelay: `${particle.delay}s`,
                        }}
                    ></div>
                ))}
            </div>

            <motion.div
                id="Welcome"
                className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1 }}
                ref={ref}
            >
                <motion.div
                    id="image"
                    className="my-8"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: inView ? 1 : 0.5, opacity: inView ? 1 : 0 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                    whileHover={{ rotateX: 720, transition: { duration: 3, ease: "easeInOut" } }} // Duración del giro
                >
                    <img
                        src={profile}
                        alt="Fernando"
                        className="w-64 h-64 rounded-full object-cover border-4 border-gray-300 dark:border-gray-700 shadow-lg"
                    />
                </motion.div>

                <motion.div
                    id="aboutMe"
                    className="text-center text-gray-800 dark:text-gray-200"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <ul className="space-y-4">
                        <motion.li whileHover={{ scale: 1.4 }} className="transition-transform">
                            <h1 className="text-4xl font-bold">
                                Hello, I'm{" "}
                                <span className="text-indigo-600 dark:text-indigo-400">Fernando</span> ✌
                            </h1>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.4 }} className="transition-transform">
                            <h2 className="text-2xl font-semibold">🚀 FullStack Developer</h2>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.4 }} className="transition-transform">
                            <h3 className="text-xl">University Technician in Programming from UTN 🏆</h3>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.4 }} className="transition-transform">
                            <h3 className="text-xl">
                                📮{" "}
                                <a href="mailto:alfarofernando@live.com" className="text-blue-500 hover:underline">
                                    alfarofernando@live.com
                                </a>
                            </h3>
                        </motion.li>
                    </ul>

                    <ul className="flex justify-center space-x-10 mt-6 ease ">
                        <motion.li whileHover={{ scale: 1.5, rotate: -1800 }} transition={{
                            duration: 1, // Duración de la animación
                            ease: "easeInOut", // Curva de animación
                        }} className="transition-transform">
                            <a
                                href="https://github.com/tu_usuario"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                            >
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.125-.305-.535-1.53.115-3.18 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013.005-.405c1.02.005 2.045.138 3.005.405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.65.245 2.875.12 3.18.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.1.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .32.21.705.825.585C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.5, rotate: 1800 }} transition={{
                            duration: 1, // Duración de la animación
                            ease: "easeInOut", // Curva de animación
                        }} className="transition-transform">
                            <a
                                href="https://www.linkedin.com/in/tu_usuario"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                            >
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.83-1.17 2.17-1.5 3.5-1.5 2.48 0 4.5 2.02 4.5 4.5v5.5z" />
                                </svg>
                            </a>
                        </motion.li>
                    </ul>
                </motion.div>
            </motion.div>
        </>
    );
}
