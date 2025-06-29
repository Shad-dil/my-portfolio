const skills = [
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  },
  {
    name: "Next Js",
    icon: "/icons/nextjs.svg",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  },
  {
    name: "Vite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/iconsvitejs/vitejs-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
];

const Skills = () => (
  <section className="py-12 bg-transparent" id="tech">
    <h2
      className="text-3xl font-bold text-center mb-8 text-white"
      data-aos="fade-up"
    >
      Tech Stack
    </h2>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 max-w-4xl mx-auto text-white">
      {skills.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-center cursor-pointer"
          data-aos="zoom-in"
        >
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-12 h-12 mb-2 transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-white/20"
          />

          <p className="text-sm text-gray-700 dark:text-gray-400 ">
            {tech.name}
          </p>
        </div>
      ))}
    </div>
  </section>
);
export default Skills;
