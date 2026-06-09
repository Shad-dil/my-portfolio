"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const skills = [
  {
    name: "JavaScript (ES6+) → Core language",
    icon: "/icons/javascript.svg",
  },
  {
    name: "React.js → Primary framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js → Production usage",
    level: 70,
    icon: "/icons/nextjs.svg",
  },
  {
    name: "TypeScript → Daily development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Testing → Regression safety",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
  },
  {
    name: "Tailwind → Design systems & UI consistency",
    level: 73,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
];

const SkillsSection = () => {
  const s = useTranslations("skills");
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
        {s("heading")}
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
