import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-black">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2">
        <div className="my-4 ">
          <div className="lg:fixed">
            <Hero />
          </div>
        </div>
        <div>
          <About />
          <Education />
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
