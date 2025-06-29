const skills = [
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Redux", icon: "/icons/redux.svg" },
  { name: "Next Js", icon: "/icons/nextjs.svg" },
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "Tailwind", icon: "/icons/tailwind.svg" },
  { name: "Vite", icon: "/icons/vite.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
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
