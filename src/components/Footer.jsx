import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-200 dark:bg-gray-900 py-4">
            <div className="container mx-auto flex justify-center items-center space-x-10">
                {/* GitHub */}
                <motion.a
                    href="https://github.com/alfarofernando"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.125-.305-.535-1.53.115-3.18 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013.005-.405c1.02.005 2.045.138 3.005.405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.65.245 2.875.12 3.18.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.1.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .32.21.705.825.585C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                </motion.a>

                {/* CV */}
                <motion.a
                    href="/portfolio-v.2/cv-AlfaroFernando-01-2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M19 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2zm-4 13h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6v-2h6v2z" />
                    </svg>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                    href="https://www.linkedin.com/in/fernando-alfaro-132973246/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    whileHover={{ scale: 1.3, rotate: -360 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.83-1.17 2.17-1.5 3.5-1.5 2.48 0 4.5 2.02 4.5 4.5v5.5z" />
                    </svg>
                </motion.a>
            </div>
        </footer>
    );
}
