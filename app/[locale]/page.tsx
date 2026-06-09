"use client";

import About from "../_components/About";
import ContactSection from "../_components/Contact";
import Experience from "../_components/Experience";
import Hero from "../_components/Hero";
import Navbar from "../_components/Navbar";
import Projects from "../_components/Projects";

import { ScrollFadeIn } from "../_components/ScrollFadeIn";
import SkillsSection from "../_components/Skills";
import WebVitals from "../_components/WebVitals";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ScrollFadeIn>
        <About />
      </ScrollFadeIn>
      <SkillsSection />
      <section data-aos="fade-up">
        <Projects />
      </section>
      <WebVitals />
      <Experience />
      <ContactSection />

      {/* <About /> */}
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Experience /> */}
      {/* <Contact /> */}
    </main>
  );
}
