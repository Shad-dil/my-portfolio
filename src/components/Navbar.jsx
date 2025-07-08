import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Close menu on window resize if desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="flex justify-between items-center px-8 py-5 bg-white dark:bg-[#0f0f11] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <h1 className="text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
        <a
          href="/"
          className="text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-400"
          aria-label="Home"
          style={{ fontFamily: "monospace" }}
        >
          &lt; Dilshad.dev /&gt;
        </a>
      </h1>
      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-6 text-sm items-center">
        <a
          href="#about"
          className="hover:text-blue-500 dark:hover:text-blue-400"
        >
          About
        </a>
        <a
          href="#projects"
          className="hover:text-blue-500 dark:hover:text-blue-400"
        >
          Projects
        </a>
        <a
          href="#experience"
          className="hover:text-blue-500 dark:hover:text-blue-400"
        >
          Experience
        </a>
        <a
          href="#contact"
          className="hover:text-blue-500 dark:hover:text-blue-400"
        >
          Contact
        </a>
        {/* <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-4"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button> */}
      </nav>
      {/* Mobile menu button */}
      <button
        className="md:hidden flex items-center text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✖️" : "☰"}
      </button>
      {/* Mobile nav */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-[#0f0f11] border-b border-gray-200 dark:border-gray-800 flex flex-col items-center py-4 md:hidden z-50 animate-fade-in">
          <a
            href="#about"
            className="py-2 w-full text-center hover:text-blue-500 dark:hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="py-2 w-full text-center hover:text-blue-500 dark:hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#experience"
            className="py-2 w-full text-center hover:text-blue-500 dark:hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#contact"
            className="py-2 w-full text-center hover:text-blue-500 dark:hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
