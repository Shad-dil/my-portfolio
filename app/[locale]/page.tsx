import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Work from "@/components/portfolio/Work";
import Performance from "@/components/portfolio/Performance";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Performance />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
