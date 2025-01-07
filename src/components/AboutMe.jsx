import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

import AnimatedContent from "./AnimatedContent";

const AboutMe = () => {
    const { language, locales } = useLanguage();

    const items = [
        {
            title: locales[language].cardOneTitle,
            date: locales[language].cardOneDate,
            description: locales[language].cardOneDescription,
        },
        {
            title: locales[language].cardTwoTitle,
            date: locales[language].cardTwoDate,
            description: locales[language].cardTwoDescription,
        },
        {
            title: locales[language].cardThreeTitle,
            date: locales[language].cardThreeDate,
            description: locales[language].cardThreeDescription,
        },
        {
            title: locales[language].cardFourTitle,
            date: locales[language].cardFourDate,
            description: locales[language].cardFourDescription,
        },
        {
            title: locales[language].cardFiveTitle,
            date: locales[language].cardFiveDate,
            description: locales[language].cardFiveDescription,
        },
        {
            title: locales[language].cardSixTitle,
            date: locales[language].cardSixDate,
            description: locales[language].cardSixDescription,
        },
        {
            title: locales[language].cardSevenTitle,
            date: locales[language].cardSevenDate,
            description: locales[language].cardSevenDescription,
        },
        {
            title: locales[language].cardEightTitle,
            date: locales[language].cardEightDate,
            description: locales[language].cardEightDescription,
        },
        {
            title: locales[language].cardNineTitle,
            date: locales[language].cardNineDate,
            description: locales[language].cardNineDescription,
        },
        {
            title: locales[language].cardTenTitle,
            date: locales[language].cardTenDate,
            description: locales[language].cardTenDescription,
        },
        {
            title: locales[language].cardElevenTitle,
            date: locales[language].cardElevenDate,
            description: locales[language].cardElevenDescription,
        },
        {
            title: locales[language].cardTwelveTitle,
            date: locales[language].cardTwelveDate,
            description: locales[language].cardTwelveDescription,
        },
        {
            title: locales[language].cardThirteenTitle,
            date: locales[language].cardThirteenDate,
            description: locales[language].cardThirteenDescription,
        },
    ];

    return (
        <section id="AboutMe" className="py-12 bg-gray-100 dark:bg-black">

            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
                <AnimatedContent keyProp={language}>
                    {locales[language].aboutMeTitle}
                </AnimatedContent>
            </h2>
            <div className="relative w-full max-w-4xl mx-auto">
                {/* Línea central */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 dark:bg-gray-600 h-full"></div>

                {/* Elementos del timeline */}
                {items.map((item, index) => (
                    <AnimatedContent key={`animated-${index}`} keyProp={language}>
                        <TimelineItem
                            key={`timeline-${index}`}
                            title={item.title}
                            date={item.date}
                            description={item.description}
                            align={index % 2 === 0 ? "left" : "right"}
                        />
                    </AnimatedContent>
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
            className={`flex w-full transition duration-1000 ease ${align === "left"
                ? "justify-start sm:justify-center md:justify-start"
                : "justify-end sm:justify-center md:justify-end"
                } hover:scale-125`}
        >
            <motion.div
                initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
                animate={{
                    opacity: inView ? 1 : 0,
                    x: inView ? 0 : align === "left" ? -50 : 50,
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`relative hover:shadow-2xl hover:shadow-gray-500 dark:hover:shadow-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-6 max-w-sm mx-auto ${align === "left" ? "md:mr-8" : "md:ml-8"
                    }`}
            >
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                    {title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
                {/* Conector a la línea central */}
                <div
                    className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full ${align === "left" ? "-left-2" : "-right-2"
                        }`}
                ></div>
            </motion.div>
        </div>
    );

};

export default AboutMe;
