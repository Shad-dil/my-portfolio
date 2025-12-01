// const skills_old = [
//   { name: "JavaScript", icon: "/icons/javascript.svg" },
//   {
//     name: "React",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
//   },
//   {
//     name: "Redux",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
//   },
//   {
//     name: "Next Js",
//     icon: "/icons/nextjs.svg",
//   },
//   {
//     name: "HTML",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
//   },
//   {
//     name: "CSS",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
//   },
//   {
//     name: "Tailwind",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
//   },
//   {
//     name: "Vite",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
//   },
//   {
//     name: "Git",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
//   },
//   {
//     name: "GitHub",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
//   },
// ];

// import React from "react";
// import { motion } from "framer-motion";

// const skills = [
//   { name: "JavaScript (ES6+)", level: 90 },
//   { name: "React.js", level: 90 },
//   { name: "Next.js", level: 70 },
//   { name: "Tailwind CSS", level: 73 },

//   { name: "TypeScript", level: 70 },
// { name: "React Testing / Jest", level: 71},
// ];

// const SkillsSection = () => {
//   return (
//     <section id="skills" className="relative z-10 py-20 px-6 md:px-12 lg:px-24">
//       <h2 className="text-4xl font-bold text-center text-cyan-300 drop-shadow-[0_0_10px_#00f5d4] mb-12">
//         Skills
//       </h2>

//       <div className="grid gap-8 md:grid-cols-2">
//         {skills.map((skill, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg"
//           >
//             <div className="flex justify-between mb-2">
//               <span className="text-white font-medium">{skill.name}</span>
//               <span className="text-cyan-300">{skill.level}%</span>
//             </div>
//             <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
//               <motion.div
//                 className="h-3 bg-gradient-to-r from-cyan-400 to-cyan-600"
//                 initial={{ width: 0 }}
//                 whileInView={{ width: `${skill.level}%` }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//                 viewport={{ once: true }}
//               />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;

import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "JavaScript (ES6+)",
    level: 90,
    icon: "/icons/javascript.svg",
  },
  {
    name: "React.js",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    level: 70,
    icon: "/icons/nextjs.svg",
  },
  {
    name: "Tailwind CSS",
    level: 73,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "TypeScript",
    level: 70,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "React Testing / Jest",
    level: 71,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-16 lg:px-32 bg-[#0f0f13] text-white"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-200"
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="
              bg-[#131319] border border-white/10 
              rounded-xl p-6 shadow-sm 
              hover:shadow-md hover:border-white/20
              transition-all duration-300
            "
          >
            {/* Title Row */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-7 h-7 opacity-80"
                />
                <span className="text-lg font-medium text-gray-200">
                  {skill.name}
                </span>
              </div>

              <span className="text-gray-400 font-semibold">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="h-full bg-gray-300 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
