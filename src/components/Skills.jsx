const skills = [
  "JavaScript",
  "React",
  "Redux Toolkit",
  "Next Js",
  "React-Router",
  "Tailwind CSS",
  "Git",
];

const Skills = () => (
  <section className="px-8 py-16 bg-gray-50 dark:bg-[#121215]" id="skills">
    <h2 className="text-3xl font-semibold mb-6">Skills</h2>
    <ul className="flex flex-wrap gap-3 text-sm text-gray-700 dark:text-gray-300">
      {skills.map((skill, i) => (
        <li
          key={i}
          className="px-4 py-1 bg-gray-200 dark:bg-[#1d1d22] rounded-full cursor-pointer hover:bg-slate-100"
        >
          {skill}
        </li>
      ))}
    </ul>
  </section>
);
export default Skills;
