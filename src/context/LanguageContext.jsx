import React, { createContext, useState, useContext } from "react";
import { locales } from "../locales/locales.js";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');

    const changeLanguage = (lng) => {
        setLanguage(lng);
    };


    return (
        <LanguageContext.Provider value={{ language, changeLanguage, locales }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);