import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  const menuItems = ["about", "projects", "experience", "contact"];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 px-8 py-5 flex justify-between items-center
        transition-all duration-300
        ${
          scrolled
            ? "bg-[#0f0f13]/90 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }
      `}
    >
      {/* Logo */}
      <a
        href="/"
        className="text-purple-400 text-xl font-bold"
        style={{ fontFamily: "monospace" }}
      >
        &lt; Dilshad.dev /&gt;
      </a>

      {/* Desktop Nav (fixed) */}
      <nav className="hidden md:flex space-x-8 text-sm items-center">
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setActive(item)}
            className="relative text-gray-300 hover:text-purple-400 transition"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}

            {active === item && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-purple-400 rounded-full"
              />
            )}
          </a>
        ))}
      </nav>

      {/* Mobile Button */}
      <button
        className="md:hidden text-3xl text-gray-200"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖️" : "☰"}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="
              absolute top-full left-0 w-full 
              bg-[#0f0f13]/95 backdrop-blur-xl 
              border-b border-white/10 
              flex flex-col items-center py-4 md:hidden
            "
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => {
                  setActive(item);
                  setMenuOpen(false);
                }}
                className="py-3 w-full text-center text-gray-200 hover:text-purple-400 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
