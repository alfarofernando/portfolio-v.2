import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [color, setColor] = useState("rgb(255, 0, 0)");

    // Actualiza la posición del cursor
    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // Cambiar el color y comportamiento cuando se pasa el ratón por encima de un elemento
    const handleMouseEnter = () => {
        setIsHovered(true);
        setColor(`rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setColor("rgb(255, 0, 0)");
    };

    return (
        <>
            <motion.div
                className="cursor"
                style={{
                    position: "fixed",
                    top: cursorPos.y - 10,
                    left: cursorPos.x - 10,
                    width: isHovered ? 20 : 10,
                    height: isHovered ? 20 : 10,
                    backgroundColor: color,
                    borderRadius: "50%",
                    pointerEvents: "none",
                    transition: "all 0.2s ease",
                    zIndex: 9999,
                    boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
                }}
                initial={{ scale: 1 }}
                animate={{
                    scale: isHovered ? 2 : 1,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
            />
            {/* Puedes agregar eventos en cualquier parte que quieras que el cursor reaccione */}
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ display: "inline-block", margin: "50px", padding: "20px", border: "1px solid #ccc" }}
            >
                Hover Me!
            </div>
        </>
    );
};

export default CustomCursor;
