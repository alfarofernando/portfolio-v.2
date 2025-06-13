import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage/Homepage";
import Projects from "../pages/Projects/Projects";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    );
};

export default Router;
