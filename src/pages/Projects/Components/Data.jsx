// src/data/projectData.jsx (o la ruta que uses)

import alfateamLogo from "../assets/images/AlfaTeam/alfateamLogo.webp";
import alfateam1 from "../assets/images/AlfaTeam/1.webp";
import alfateam2 from "../assets/images/AlfaTeam/2.webp";
import alfateam3 from "../assets/images/AlfaTeam/3.webp";
import alfateam4 from "../assets/images/AlfaTeam/4.webp";
import alfateam5 from "../assets/images/AlfaTeam/5.webp";
import alfateam6 from "../assets/images/AlfaTeam/6.webp";
import alfateam7 from "../assets/images/AlfaTeam/7.webp";
import alfateam8 from "../assets/images/AlfaTeam/8.webp";
import alfateam9 from "../assets/images/AlfaTeam/9.webp";
import alfateam10 from "../assets/images/AlfaTeam/10.webp";
import alfateam11 from "../assets/images/AlfaTeam/11.webp";
import alfateam12 from "../assets/images/AlfaTeam/12.webp";

import storepcLogo from "../assets/images/StorePC/storepcLogo.webp";
import storepc1 from "../assets/images/StorePC/1.webp";
import storepc2 from "../assets/images/StorePC/2.webp";
import storepc3 from "../assets/images/StorePC/3.webp";
import storepc4 from "../assets/images/StorePC/4.webp";
import storepc5 from "../assets/images/StorePC/5.webp";
import storepc6 from "../assets/images/StorePC/6.webp";
import storepc7 from "../assets/images/StorePC/7.webp";
import storepc8 from "../assets/images/StorePC/8.webp";
import storepc9 from "../assets/images/StorePC/9.webp";
import storepc10 from "../assets/images/StorePC/10.webp";
import storepc11 from "../assets/images/StorePC/11.webp";
import storepc12 from "../assets/images/StorePC/12.webp";
import storepc13 from "../assets/images/StorePC/13.webp";
import storepc14 from "../assets/images/StorePC/14.webp";
import storepc15 from "../assets/images/StorePC/15.webp";
import storepc16 from "../assets/images/StorePC/16.webp";
import storepc17 from "../assets/images/StorePC/17.webp";

import portfolioOldLogo from "../assets/images/PortfolioOld/portfolioOldLogo.webp";
import portfolioOld from "../assets/images/PortfolioOld/portfolioOld.webp";

import noteItLogo from "../assets/images/NoteIt/noteItLogo.webp";
import noteIt1 from "../assets/images/NoteIt/1.webp";
import noteIt2 from "../assets/images/NoteIt/2.webp";
import noteIt3 from "../assets/images/NoteIt/3.webp";
import noteIt4 from "../assets/images/NoteIt/4.webp";
import noteIt5 from "../assets/images/NoteIt/5.webp";
import noteIt6 from "../assets/images/NoteIt/6.webp";
import noteIt7 from "../assets/images/NoteIt/7.webp";
import noteIt8 from "../assets/images/NoteIt/8.webp";
import noteIt9 from "../assets/images/NoteIt/9.webp";
import noteIt10 from "../assets/images/NoteIt/10.webp";

export const getProjects = (locales, language) => [
    {
        title: "AlfaTeam",
        description: locales[language].project1Description,
        image: alfateamLogo,
        link: "https://github.com/alfarofernando/Alfa_Team_Frontend",
        screenshots: [
            { original: alfateam1, thumbnail: alfateam1 },
            { original: alfateam2, thumbnail: alfateam2 },
            { original: alfateam3, thumbnail: alfateam3 },
            { original: alfateam4, thumbnail: alfateam4 },
            { original: alfateam5, thumbnail: alfateam5 },
            { original: alfateam6, thumbnail: alfateam6 },
            { original: alfateam7, thumbnail: alfateam7 },
            { original: alfateam8, thumbnail: alfateam8 },
            { original: alfateam9, thumbnail: alfateam9 },
            { original: alfateam10, thumbnail: alfateam10 },
            { original: alfateam11, thumbnail: alfateam11 },
            { original: alfateam12, thumbnail: alfateam12 },
        ],
    },
    {
        title: "StorePC",
        description: locales[language].project2Description,
        image: storepcLogo,
        link: "https://github.com/zfranco21/storepc-frontend",
        screenshots: [
            { original: storepc1, thumbnail: storepc1 },
            { original: storepc2, thumbnail: storepc2 },
            { original: storepc3, thumbnail: storepc3 },
            { original: storepc4, thumbnail: storepc4 },
            { original: storepc5, thumbnail: storepc5 },
            { original: storepc6, thumbnail: storepc6 },
            { original: storepc7, thumbnail: storepc7 },
            { original: storepc8, thumbnail: storepc8 },
            { original: storepc9, thumbnail: storepc9 },
            { original: storepc10, thumbnail: storepc10 },
            { original: storepc11, thumbnail: storepc11 },
            { original: storepc12, thumbnail: storepc12 },
            { original: storepc13, thumbnail: storepc13 },
            { original: storepc14, thumbnail: storepc14 },
            { original: storepc15, thumbnail: storepc15 },
            { original: storepc16, thumbnail: storepc16 },
            { original: storepc17, thumbnail: storepc17 },
        ],
    },
    {
        title: "Portafolio V-1",
        description: locales[language].project3Description,
        image: portfolioOldLogo,
        link: "https://github.com/alfarofernando/portfolio-v.1",
        screenshots: [{ original: portfolioOld, thumbnail: portfolioOld }],
    },
    {
        title: "Note:It",
        description: locales[language].project4Description,
        image: noteItLogo,
        link: "https://github.com/alfarofernando/NoteIt/",
        screenshots: [
            { original: noteIt1, thumbnail: noteIt1 },
            { original: noteIt2, thumbnail: noteIt2 },
            { original: noteIt3, thumbnail: noteIt3 },
            { original: noteIt4, thumbnail: noteIt4 },
            { original: noteIt5, thumbnail: noteIt5 },
            { original: noteIt6, thumbnail: noteIt6 },
            { original: noteIt7, thumbnail: noteIt7 },
            { original: noteIt8, thumbnail: noteIt8 },
            { original: noteIt9, thumbnail: noteIt9 },
            { original: noteIt10, thumbnail: noteIt10 },
        ],
    },
];

