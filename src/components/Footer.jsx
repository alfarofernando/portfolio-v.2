import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-200 dark:bg-gray-900 py-6">
            <div className="container mx-auto flex justify-center items-center space-x-8 md:space-x-12 lg:space-x-20">
                {/* GitHub */}
                <motion.a
                    href="https://github.com/alfarofernando"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <svg
                        className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.125-.305-.535-1.53.115-3.18 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013.005-.405c1.02.005 2.045.138 3.005.405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.65.245 2.875.12 3.18.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.1.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .32.21.705.825.585C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>
                        GitHub
                    </span>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                    href="https://wa.me/5491152606455?text=¡Hola!%20Estoy%20interesado%20en%20tu%20perfil."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200"
                    whileHover={{ scale: 1.2, rotate: -360 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 "
                        fill="currentColor"
                        viewBox="0 0 32 32"
                    >
                        <path d="M16.001 1.45c-8.005 0-14.56 6.558-14.56 14.571 0 2.576.688 5.077 1.995 7.293l-2.184 7.944 8.15-2.143a14.563 14.563 0 006.599 1.629h.003c8.003 0 14.56-6.557 14.56-14.569 0-8.014-6.557-14.571-14.563-14.571zm8.487 21.755c-.366.999-2.147 1.951-2.946 2.016-.75.057-1.635.134-2.608-.158-.599-.187-1.372-.447-2.358-.873-4.185-1.813-6.899-6.28-7.114-6.585-.214-.305-1.698-2.264-1.698-4.316s1.073-3.056 1.448-3.478c.366-.423.815-.53 1.084-.53.271 0 .542 0 .778.014.253.015.6-.096.938.713.366.87 1.243 2.989 1.353 3.206.11.217.183.47.035.754-.148.284-.222.47-.433.719-.217.253-.446.566-.638.758-.215.215-.438.448-.188.871.25.423 1.118 1.834 2.4 2.969 1.65 1.44 3.029 1.88 3.442 2.096.414.217.65.187.895-.113.243-.297 1.026-1.19 1.296-1.598.271-.409.546-.34.932-.204.387.134 2.457 1.157 2.88 1.37.423.215.703.317.81.496.11.175.11 1.015-.255 2.014z" />
                    </svg>
                    <span>
                        WhatsApp
                    </span>
                </motion.a>

                {/* CV */}
                <motion.a
                    href="/portfolio-v.2/cv-AlfaroFernando-01-2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-200"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M19 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2zm-4 13h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6v-2h6v2z" />
                    </svg>
                    <span>Curriculum</span>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                    href="https://www.linkedin.com/in/fernando-alfaro-132973246/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" flex flex-col items-center justify-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                    whileHover={{ scale: 1.2, rotate: -360 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.83-1.17 2.17-1.5 3.5-1.5 2.48 0 4.5 2.02 4.5 4.5v5.5z" />
                    </svg>
                    <span>LinkedIn</span>
                </motion.a>
            </div>
        </footer>
    );
}
