"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  const menuItems = ["about", "projects", "experience", "contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 
        px-6 md:px-12 py-4 flex justify-between items-center
        transition-all duration-300 
        ${
          scrolled
            ? "bg-[#0f0f13]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10"
            : "bg-transparent"
        }
      `}
    >
      {/* LOGO */}
      <a
        href="/"
        className="text-[#A26BFF] text-xl font-bold tracking-wide hover:opacity-90 transition"
        style={{ fontFamily: "monospace" }}
      >
        &lt; Dilshad.dev /&gt;
      </a>

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex items-center gap-10 text-sm">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className="relative text-gray-300 hover:text-[#A26BFF] transition"
          >
            <a href={`#${item}`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>

            {active === item && (
              <motion.div
                layoutId="nav-underline"
                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#A26BFF] rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
          </button>
        ))}
      </nav>

      {/* MOBILE HAMBURGER */}
      <button
        className="md:hidden text-3xl text-gray-200 active:scale-90 transition"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <IoClose /> : <HiMenuAlt4 />}
      </button>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="
              absolute top-full left-0 w-full 
              bg-[#0f0f13]/95 backdrop-blur-xl border-b border-white/10 
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
                className="py-4 w-full text-center text-gray-200 hover:text-[#A26BFF] transition text-lg tracking-wide"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
