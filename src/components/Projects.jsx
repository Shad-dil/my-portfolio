"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

// ----------------------
// Project Data
// ----------------------
const projects = [
  // 🔥 Featured Project (Top)
  {
    featured: true,
    title: "PulseBoard – SaaS Admin Dashboard",
    desc: "A full-stack SaaS analytics dashboard with authentication, user management, real-time analytics, traffic charts, conversion funnel, settings system, and infinite-scroll tables. Built with Next.js, Prisma, NeonDB, Tailwind, ShadCN UI, and React Query.",
    screenshot: "/dashboard_preview.png",
    mobile: "/dash_mobile.png",
    Githublink: "https://github.com/Shad-dil/pulse-board",
    Livelink: "https://pulse-board-5u2d.vercel.app/dashboard",
    tech: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "NeonDB",
      "React Query",
      "TailwindCSS",
      "ShadCN UI",
      "Chart.js",
    ],
  },

  // ✔️ Regular Projects Below
  {
    title: "Klimate – Weather Forecast App",
    desc: "A modern weather forecasting app with real-time API data, animated UI, location search, and theme switching.",
    Githublink: "https://github.com/Shad-dil/Klimate-app",
    Livelink: "https://klimate-app-shad.vercel.app/",
    screenshot: "/klimate.png",
    tech: [
      "TypeScript",
      "Next.js",
      "Tailwind",
      "ShadCN UI",
      "OpenWeatherMap API",
    ],
  },
  {
    title: "Reflct – Minimal Blog & Journal",
    desc: "A distraction-free writing app built with authentication, theme switching, and a clean, minimal writing experience.",
    Githublink: "https://github.com/Shad-dil/reflct",
    Livelink: "https://reflct-pi.vercel.app/",
    screenshot: "/reflect.png",
    tech: ["Next.js", "Prisma", "TailwindCSS", "Clerk Auth", "ShadCN UI"],
  },
];

// -------------------------------------------------
// MAIN COMPONENT
// -------------------------------------------------
export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="px-6 md:px-12 lg:px-20 py-20 bg-[#0f0f11] text-violet-600"
    >
      {/* Title */}
      <h2 className="text-4xl font-semibold mb-12 text-center">My Projects</h2>

      {/* --------------------------------------
          FEATURED PROJECT (Premium Layout)
      --------------------------------------- */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-[5rem] items-center">
            {/* MOCKUPS */}
            <div className="relative flex justify-center">
              {/* Laptop */}
              <div
                className="relative bg-gray-900 p-3 rounded-xl shadow-2xl border border-gray-600 w-full max-w-xl cursor-pointer"
                onClick={() => openModal(featured)}
              >
                <img
                  src={featured.screenshot}
                  alt={featured.title}
                  className="rounded-lg"
                />
                <div className="h-2 bg-gray-800 rounded-b-xl mt-1" />
              </div>

              {/* Mobile */}
              <div
                className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 hidden lg:block"
                onClick={() => openModal(featured)}
              >
                <div className="bg-black rounded-2xl p-2 shadow-lg border border-gray-700 w-40">
                  <img
                    src={featured.mobile}
                    alt={featured.title}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* TEXT SECTION */}
            <div>
              <h3 className="text-3xl font-bold mb-4 text-violet-700 dark:text-blue-300">
                {featured.title}
              </h3>

              <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed">
                {featured.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {featured.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full text-gray-800 dark:text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={featured.Livelink}
                  target="_blank"
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Live Demo ↗
                </a>
                <a
                  href={featured.Githublink}
                  target="_blank"
                  className="px-5 py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* --------------------------------------
          OTHER PROJECTS GRID
      --------------------------------------- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[6rem]">
        {others.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="bg-white/10 dark:bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:shadow-blue-400/20 hover:scale-[1.02] transition cursor-pointer"
            onClick={() => openModal(project)}
          >
            <img
              src={project.screenshot}
              alt={project.title}
              className="w-full h-44 object-cover rounded-lg border border-gray-300 dark:border-gray-700 mb-4"
            />

            <h3 className="text-xl font-semibold mb-2 text-violet-700 dark:text-violet-700">
              {project.title}
            </h3>

            <p className="text-gray-300 dark:text-gray-200 text-sm mb-3">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-1">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-[11px] px-2 py-[2px] bg-gray-200 dark:bg-gray-700 rounded-full text-gray-900 dark:text-gray-100"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* --------------------------------------
          MODAL
      --------------------------------------- */}
      {modalOpen && selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/90 z-50 px-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#18181c] dark:bg-[#18181c] max-w-2xl w-full rounded-xl p-4 relative "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-3xl text-violet-700 dark:text-gray-300"
              onClick={closeModal}
            >
              <IoMdCloseCircle />
            </button>

            <img
              src={selectedProject.screenshot}
              className="w-full rounded-lg mb-4"
            />

            <h3 className="text-2xl font-bold mb-2 text-violet-700 dark:text-blue-300">
              {selectedProject.title}
            </h3>

            <p className="text-gray-300 dark:text-gray-400 mb-3 leading-relaxed">
              {selectedProject.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex justify-between">
              <a
                href={selectedProject.Livelink}
                target="_blank"
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                Live Demo ↗
              </a>

              <a
                href={selectedProject.Githublink}
                target="_blank"
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                GitHub ↗
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
