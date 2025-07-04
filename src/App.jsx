import Aos from "aos";
import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./index.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);
  return (
    <div className="font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-[#0f0f11]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <section data-aos="fade-up">
        <Projects />
      </section>
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
