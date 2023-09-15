import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Loader from "./components/Loader";
//
import React, { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simula una carga asíncrona (puedes reemplazar esto con tu lógica real)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 segundos de simulación de carga
  }, []);
  return (
    <div className="bg-[#181818] lekton">
      {isLoading ? (
        <Loader className="" /> // Muestra el Loader mientras isLoading sea true
      ) : (
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2">
          <div className="my-4 ">
            <div className="lg:fixed">
              <Hero />
            </div>
          </div>
          <div>
            <About />
            <Education />
            {/* <Experience /> */}
            <Projects />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
