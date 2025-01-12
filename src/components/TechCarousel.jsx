import HtmlIcon from '../assets/icons/html-5.svg';
import CssIcon from '../assets/icons/css.svg';
import BootstrapIcon from '../assets/icons/bootstrap.svg';
import JsIcon from '../assets/icons/javascript.svg';
import ReactIcon from '../assets/icons/react.svg';
import TailwindIcon from '../assets/icons/tailwind.svg';
import PhpIcon from '../assets/icons/php.svg';
import NodeIcon from '../assets/icons/node.svg';
import ExpressIcon from '../assets/icons/express.svg';
import MongoIcon from '../assets/icons/mongo.svg';
import MySqlIcon from '../assets/icons/mysql.svg';
import GitIcon from '../assets/icons/git.svg';
import GithubIcon from '../assets/icons/github.svg';
import ViteIcon from '../assets/icons/vite.svg';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const TechCarousel = () => {
    const techs = [
        { icon: <img src={HtmlIcon} alt="HTML" className="w-16 h-16" />, name: 'HTML' },
        { icon: <img src={CssIcon} alt="CSS" className="w-16 h-16" />, name: 'CSS' },
        { icon: <img src={BootstrapIcon} alt="Bootstrap" className="w-16 h-16" />, name: 'Bootstrap' },
        { icon: <img src={JsIcon} alt="JavaScript" className="w-16 h-16" />, name: 'JavaScript' },
        { icon: <img src={ReactIcon} alt="React" className="w-16 h-16" />, name: 'React' },
        { icon: <img src={TailwindIcon} alt="Tailwind" className="w-16 h-16" />, name: 'Tailwind' },
        { icon: <img src={PhpIcon} alt="PHP" className="w-16 h-16" />, name: 'PHP' },
        { icon: <img src={NodeIcon} alt="Node.js" className="w-16 h-16" />, name: 'Node.js' },
        { icon: <img src={ExpressIcon} alt="Express.js" className="w-16 h-16" />, name: 'Express.js' },
        { icon: <img src={MongoIcon} alt="MongoDB" className="w-16 h-16" />, name: 'MongoDB' },
        { icon: <img src={MySqlIcon} alt="MySQL" className="w-16 h-16" />, name: 'MySQL' },
        { icon: <img src={GitIcon} alt="Git" className="w-16 h-16" />, name: 'Git' },
        { icon: <img src={GithubIcon} alt="GitHub" className="w-16 h-16" />, name: 'GitHub' },
        { icon: <img src={ViteIcon} alt="Vite" className="w-16 h-16" />, name: 'Vite' },
    ];

    const [visibleTechs, setVisibleTechs] = useState(techs.slice(0, 7)); // Muestra las primeras 7 tecnologías
    const [index, setIndex] = useState(0); // Índice para las tecnologías

    // Función para rotar las tecnologías
    const rotateTechs = () => {
        setVisibleTechs((prevTechs) => {
            const newTechs = [...prevTechs];
            newTechs.shift(); // Elimina la tecnología de la izquierda
            newTechs.push(techs[(index + 7) % techs.length]); // Agrega la siguiente tecnología desde la derecha
            return newTechs;
        });
        setIndex((prevIndex) => (prevIndex + 1) % techs.length); // Actualiza el índice
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            rotateTechs();
        }, 3000); // Intervalo de 3 segundos para la rotación automática

        return () => clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonta
    }, [index]);

    return (
        <div className="relative text-center justify-center text-gray-800 dark:text-gray-200 py-2">
            <motion.div
                className="overflow-hidden w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
            >
                <motion.div className="flex justify-center items-center gap-4">
                    {/* Renderizamos las 7 tecnologías visibles */}
                    {visibleTechs.map((tech, idx) => (
                        <motion.div
                            key={tech.name}
                            className="flex flex-col items-center"
                            initial={{ opacity: idx === 0 || idx === 6 ? 0 : 1, scale: 0.8, x: 50 }}
                            animate={{
                                opacity: idx === 0 || idx === 6 ? 0 : 1,
                                scale: 1,
                                x: 0,
                                transition: {
                                    duration: 1, // Duración ajustada para mayor fluidez
                                    ease: 'easeOut',
                                },
                            }}
                            exit={{
                                opacity: idx === 0 || idx === 6 ? 0 : 1, // Desvanece solo el primer y último elemento (índices 0 y 6)
                                scale: 0.8,
                                x: idx === 6 ? -50 : 50, // Mover a la izquierda solo el último
                                transition: {
                                    duration: 1, // Duración ajustada
                                    ease: 'easeIn',
                                },
                            }}
                            layout // Permite animar el cambio de layout entre los elementos
                        >
                            <motion.div
                                className="w-16 h-16 brightness-80 dark:brightness-140 hover:scale-110 transition-all  duration-500 ease-in-out"

                            >
                                {tech.icon}
                            </motion.div>
                            <span className="mt-1 text-sm md:text-base font-semibold">{tech.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default TechCarousel;
