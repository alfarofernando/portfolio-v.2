import { Route, Routes } from "react-router-dom";
import ProjectPage from "../pages/Projects/components/ProjectPage";
import Welcome from "../pages/Homepage/Welcome";
import Projects from "../pages/Projects/Projects";
import AboutMe from "../pages/AboutMe/AboutMe";

const Router = () => {
    return (
        <Routes>
            <Route path="/portfolio-v.2/" element={<Welcome />} />
            <Route path="/portfolio-v.2/Home" element={<Welcome />} />
            <Route path="/portfolio-v.2/Projects" element={<Projects />} />
            <Route path="/portfolio-v.2/AboutMe" element={<AboutMe />} />
            <Route path="/portfolio-v.2/Projects/:slug" element={<ProjectPage />} />
        </Routes>
    );
};

export default Router;
