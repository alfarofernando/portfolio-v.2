import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage/Homepage";
import ProjectPage from "../pages/Projects/ProjectPage";

const Router = () => {
    return (
        <Routes>
            <Route path="/portfolio-v.2" element={<HomePage />} />
            <Route path="/portfolio-v.2/projects" element={<ProjectPage />} />
        </Routes>
    );
};

export default Router;
