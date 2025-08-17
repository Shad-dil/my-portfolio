import Aos from "aos";
import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { ScrollFadeIn } from "./components/ScrollFadeIn";
import Skills from "./components/Skills";
import "./index.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);
  return (
    <div className="font-sans text-textPrimary dark:text-gray-100 bg-white dark:bg-background max-w-screen overflow-x-hidden">
      
      
      <Navbar />
      <Hero />
      <ScrollFadeIn>
        <About />
      </ScrollFadeIn>
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
