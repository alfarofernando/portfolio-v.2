import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage/Homepage";
import Projects from "../pages/Projects/Projects";

const Router = () => {
    return (
        <Routes>
            <Route path="/portfolio-v.2" element={<HomePage />} />
            <Route path="/portfolio-v.2/projects" element={<Projects />} />
        </Routes>
    );
};

export default Router;
