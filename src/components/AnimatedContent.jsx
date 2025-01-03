import { motion, AnimatePresence } from "framer-motion";

const AnimatedContent = ({ children, keyProp }) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={keyProp}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default AnimatedContent;
