"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import PulseBoardCaseStudy from "./PulseboardCaseStudy";
import CaseStudyModal from "./CaseStudyModal";
import { useTranslations } from "next-intl";

// ----------------------
// Project Data
// ----------------------
interface Project {
  featured?: boolean;
  title: string;
  subtitle?: string;
  desc: string;
  screenshot: string;
  mobile?: string;
  Githublink: string;
  Livelink: string;
  tech: string[];
  highlights: string[];
}

const projects: Project[] = [
  // ⭐ Featured Project
  {
    featured: true,
    title: "PulseBoard — Role-Based Frontend Architecture",
    subtitle:
      "Data-heavy system with RBAC, schema validation, and scalable state management",
    desc: "A frontend system designed to handle role-based access, real-time KPI data, and complex user interactions while remaining predictable and scalable as features grow.",
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
    highlights: [
      "Implemented RBAC at route, component, and action levels",
      "Separated server state and UI state using React Query",
      "Schema-driven form validation with Zod for safer refactors",
      "Designed tables and charts to handle large, paginated datasets",
    ],
  },

  // 🔹 Regular Projects
  {
    title: "Klimate → Performance & UX",
    desc: "A modern weather app with live OpenWeather API, search, animated UI & theme switching.",
    screenshot: "/klimate.png",
    Githublink: "https://github.com/Shad-dil/Klimate-app",
    Livelink: "https://klimate-app-shad.vercel.app/",
    highlights: [
      "API handling",
      "loading states",
      "graceful failures",
      "visual clarity under changing data",
    ],
    tech: ["TypeScript", "Next.js", "Tailwind", "ShadCN UI", "OpenWeather API"],
  },

  {
    title: "Reflct → Forms & Workflow",
    desc: "A distraction-free writing app with authentication, theme switching & clean UI.",
    screenshot: "/reflect.png",
    Githublink: "https://github.com/Shad-dil/reflct",
    Livelink: "https://reflct-pi.vercel.app/",
    highlights: [
      "auth flows",
      "controlled inputs",
      "validation",
      "state transitions",
    ],
    tech: ["Next.js", "Prisma", "TailwindCSS", "Clerk Auth", "ShadCN UI"],
  },
];

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showCase, setShowCase] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const p = useTranslations("projects");
  return (
    <section
      id="projects"
      className="px-6 md:px-12 lg:px-20 py-24 bg-[#0f0f11] text-white"
    >
      <h2 className="text-4xl font-bold mb-16 text-center text-violet-400">
        {p("heading")}
      </h2>

      {/* ----------------------------------------------------------
          FEATURED PROJECT (Premium SaaS Layout)
      ---------------------------------------------------------- */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* IMAGES */}
            <div className="relative flex justify-center">
              {/* Laptop */}
              <div
                onClick={() => openModal(featured)}
                className="relative bg-[#1a1a1d] p-3 rounded-2xl shadow-2xl border border-white/10 w-full max-w-xl cursor-pointer hover:shadow-violet-500/20 transition"
              >
                <img
                  src={featured.screenshot}
                  alt={featured.title}
                  className="rounded-xl"
                />
                <div className="h-2 bg-black/40 rounded-b-xl mt-1"></div>
              </div>

              {/* Mobile Preview */}
              <div
                className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 hidden lg:block"
                onClick={() => openModal(featured)}
              >
                <div className="bg-black p-2 rounded-2xl shadow-xl border border-white/10 w-40">
                  <img
                    src={featured.mobile}
                    alt="Mobile preview"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <h3 className="text-3xl font-bold mb-4 text-violet-400">
                {featured.title}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                {featured.desc}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {featured.highlights?.map((h: string, i: number) => (
                  <li
                    key={i}
                    className="text-gray-300 flex items-start gap-2 text-sm"
                  >
                    <span className="text-violet-400 mt-1">•</span> {h}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {featured.tech.map((t: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-white/10 border border-white/20 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => setShowCase(true)}
                  className="px-5 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition"
                >
                  {p("case_study")} ↗
                </button>
                <a
                  target="_blank"
                  href={featured.Livelink}
                  className="px-5 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition"
                >
                  {p("live")} ↗
                </a>

                <a
                  target="_blank"
                  href={featured.Githublink}
                  className="px-5 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition"
                >
                  {p("github")} ↗
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* ----------------------------------------------------------
          OTHER PROJECTS (Premium Grid)
      ---------------------------------------------------------- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {others.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            onClick={() => openModal(project)}
            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-violet-500/10 hover:scale-[1.02] transition cursor-pointer"
          >
            <img
              src={project.screenshot}
              alt={project.title}
              className="rounded-xl mb-4 h-44 w-full object-cover border border-white/10"
            />

            <h3 className="text-xl font-semibold text-violet-300 mb-2">
              {project.title}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-1 mt-2">
              {project.tech.map((t: string, i: number) => (
                <span
                  key={i}
                  className="text-[11px] px-2 py-0.75 rounded-full bg-white/10 border border-white/20 text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ----------------------------------------------------------
          MODAL (Redesigned & Premium)
      ---------------------------------------------------------- */}
      {modalOpen && selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/90 z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#18181c] max-w-2xl w-full rounded-2xl p-6 border border-white/10 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-3xl text-violet-400 hover:opacity-80 transition"
              onClick={closeModal}
            >
              <IoMdCloseCircle />
            </button>

            <img
              src={selectedProject.screenshot}
              alt={selectedProject.title}
              className="rounded-xl mb-4 w-full"
            />

            <h3 className="text-3xl font-bold text-violet-300 mb-3">
              {selectedProject.title}
            </h3>

            <p className="text-gray-300 mb-4">{selectedProject.desc}</p>
            <h4 className="text-sm uppercase tracking-wide text-gray-400 mt-6 mb-2">
              Key Engineering Considerations
            </h4>
            <ul className="text-sm text-gray-300 space-y: string-2 mb-2">
              {selectedProject.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-5">
              {selectedProject.tech.map((t: string, i: number) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-white/10 border border-white/20 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex justify-between">
              <a
                href={selectedProject.Livelink}
                target="_blank"
                className="text-violet-400 hover:underline"
              >
                Live Demo ↗
              </a>
              <a
                href={selectedProject.Githublink}
                target="_blank"
                className="text-violet-400 hover:underline"
              >
                GitHub ↗
              </a>
            </div>
          </motion.div>
        </div>
      )}
      {/* ----------------------------------------------------------
          Case Study
      ---------------------------------------------------------- */}
      <CaseStudyModal open={showCase} onClose={() => setShowCase(false)}>
        <PulseBoardCaseStudy />
      </CaseStudyModal>
    </section>
  );
}
