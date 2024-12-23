import './App.css';
import { useEffect, useState } from "react";
import NavBar from './components/Navbar';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';

function App() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Función para generar pelotitas con tamaños, posiciones y colores aleatorios
    const generateParticles = () => {
      const numParticles = 200; // Número de pelotitas a generar
      const particlesArray = [];

      for (let i = 0; i < numParticles; i++) {
        const size = Math.floor(Math.random() * 3) + 3; // Tamaño aleatorio
        const leftPosition = Math.floor(Math.random() * window.innerWidth); // Posición aleatoria en el eje X
        const topPosition = Math.floor(Math.random() * window.innerHeight); // Posición aleatoria en el eje Y
        const animationDelay = Math.random() * 10; // Retraso aleatorio en la animación

        particlesArray.push({
          size,
          left: leftPosition,
          top: topPosition,
          delay: animationDelay,
        });
      }

      setParticles(particlesArray);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 100000); // Generar nuevas pelotitas cada 100 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div >
      {/* Contenedor de pelotitas detrás de todo el contenido */}
      <div className="particle-container">
        {/* Genera las pelotitas con posiciones aleatorias */}
        {particles.map((particle, index) => (
          <div
            key={index}
            className="particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}px`,
              top: `${particle.top}px`,
              animationDelay: `${particle.delay}s`,
            }}
          ></div>
        ))}
      </div>
      <NavBar />
      <Welcome />
      <Projects />
      <AboutMe />
    </div>
  )
}

export default App
