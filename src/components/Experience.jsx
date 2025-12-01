"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const jobs = [
    {
      role: "Frontend Developer",
      company: "Infosys",
      duration: "2022 – Present",
      desc: [
        "Developing high-performance UI for enterprise banking systems (UAE & KSA markets).",
        "Building reusable, scalable React + Next.js components used across multiple product modules.",
        "Improved UI load speed by optimizing rendering, reducing bundle size, and implementing best-practice caching.",
      ],
    },
    {
      role: "Digital Banking Portal – Frontend Lead",
      company: "Infosys",
      duration: "2024 – Present",
      desc: [
        "Led UI revamp for customer & admin portals using React, Next.js, and modern state management.",
        "Reduced LCP and CLS issues and improved Lighthouse performance scores to 90+.",
        "Collaborated with backend, QA, and design teams to deliver seamless feature rollouts in Agile sprints.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-16 lg:px-32 bg-[#0f0f13] text-white"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-16 text-gray-100"
      >
        Experience
      </motion.h2>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/5"></div>

        <div className="space-y-14">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-16"
            >
              {/* Timeline Node */}
              <div className="absolute left-[14px] top-2 w-4 h-4 rounded-full bg-[#A26BFF] shadow-[0_0_10px_#A26BFF]"></div>

              {/* Card */}
              <div
                className="
                  bg-[#131319] border border-white/10 rounded-xl
                  p-6 shadow-sm hover:shadow-lg 
                  hover:border-white/20 transition-all duration-300
                "
              >
                <h3 className="text-xl font-semibold text-gray-100">
                  {job.role}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {job.company} • {job.duration}
                </p>

                <ul className="space-y-2">
                  {job.desc.map((line, i) => (
                    <li
                      key={i}
                      className="text-gray-300 leading-relaxed text-[15px]"
                    >
                      • {line}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
