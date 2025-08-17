import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
const projects = [
  {
    title: "FastReact Pizza Co. – Pizza Ordering App",
    desc: "A sleek and responsive pizza ordering web app built with React, Redux Toolkit, Tailwind CSS, and React Router. Users can browse a dynamic menu, customize orders, and track them in real time. The app features efficient state management with Redux, priority ordering logic, and a clean UI that enhances the user experience. Ideal for showcasing practical frontend skills and modern development practices.",
    Githublink: "https://github.com/Shad-dil/fastReactPizzaCo",
    Livelink: "https://fast-react-pizza-coo.vercel.app/",
    screenshot: "/pizzass.png",
    tech: [
      "JavaScript",
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Shadcn-ui",
      "Vercel",
    ],
  },
  {
    title: "Klimate – Weather Forecast App",
    desc: "Klimate is a sleek and responsive weather forecast web app that provides real-time weather data for any location. Built using Next.js, Tailwind CSS, and ShadCN UI, it leverages the OpenWeatherMap API to display temperature, weather conditions, humidity, and wind speed in a clean and modern UI. The app includes theme switching (light/dark mode) and intuitive user interaction.",
    Githublink: "https://github.com/Shad-dil/Klimate-app",
    Livelink: "https://klimate-app-shad.vercel.app/",
    screenshot: "/klimate.png",
    tech: [
      "TypeScript",
      "React Js",
      "Redux",
      "ShadCN UI",
      "OpenWeatherMap API",
      "Tailwind CSS",
    ],
  },
  {
    title: "Reflct – Minimal Blog & Reflection Journal",
    desc: "Reflct is a minimalistic personal blogging and journaling platform designed for writing reflections and ideas. Built with Next.js, Tailwind CSS, and ShadCN UI, it offers a clean, distraction-free interface for expressive writing, with support for theme switching and responsive design.",
    Githublink: "https://github.com/Shad-dil/reflct",
    Livelink: "https://reflct-pi.vercel.app/",
    screenshot: "/reflect.png",
    tech: ["Javascript", "Next Js", "Tailwind CSS", "Clerk Api", "Prisma"],
  },
];

// ...existing code...

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleImageClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="px-8 py-16 bg-white dark:bg-[#0f0f11]" id="projects">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
           <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-300"
          >
              <h3 className="text-xl font-bold mb-1 text-blue-600 dark:text-blue-300">
                {project.title}
              </h3>
              {project.screenshot && (
                <div
                  className="relative mb-3 group cursor-pointer"
                  onClick={() => handleImageClick(project)}
                >
                  <img
                    src={project.screenshot}
                    alt={`${project.title} screenshot`}
                    className="w-full h-40 object-cover rounded border border-gray-200 dark:border-gray-700 hover:scale-105 transition"
                  />
                  <div className="absolute inset-0 rounded bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">
                      Preview
                    </span>
                  </div>
                </div>
              )}
              {/* ...rest of your card... */}
              <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech?.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a
                  href={project.Livelink}
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 dark:text-blue-400 hover:underline text-sm"
                >
                  View Live ↗
                </a>
                <a
                  href={project.Githublink}
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 dark:text-blue-400 hover:underline text-sm"
                >
                  View on GitHub ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeModal} // Close when clicking the overlay
        >
          <div
            className="bg-white dark:bg-[#18181c] rounded-lg p-4 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              className="absolute top-2 right-2 text-2xl text-gray-700 dark:text-gray-200"
              onClick={closeModal}
              aria-label="Close"
            >
              <IoMdCloseCircle />
            </button>
            <img
              src={selectedProject.screenshot}
              alt={`${selectedProject.title} screenshot`}
              className="w-full h-64 object-contain rounded mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-300">
              {selectedProject.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {selectedProject.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              {selectedProject.tech?.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              <a
                href={selectedProject.Livelink}
                target="_blank"
                rel="noopener"
                className="text-blue-500 dark:text-blue-400 hover:underline text-sm"
              >
                View Live ↗
              </a>
              <a
                href={selectedProject.Githublink}
                target="_blank"
                rel="noopener"
                className="text-blue-500 dark:text-blue-400 hover:underline text-sm"
              >
                View on GitHub ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
