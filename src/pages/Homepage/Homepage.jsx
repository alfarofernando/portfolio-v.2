import Welcome from "./components/Welcome";
import Projects from "../Projects/Projects";
import AboutMe from "./components/AboutMe";

const HomePage = () => {
    return (
        <>
            <Welcome />
            <Projects />
            <AboutMe />
        </>
    );
};

export default HomePage;
