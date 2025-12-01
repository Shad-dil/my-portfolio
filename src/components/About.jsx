"use client";

import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";

export default function About() {
  return (
    <section
      id="about"
      className="px-8 py-24 bg-[#0f0f13] text-white relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-40 h-40 mb-8"
        >
          {/* subtle glow */}
          <div className="absolute inset-0 rounded-full bg-[#A26BFF]/20 blur-2xl" />

          <div className="relative w-40 h-40 rounded-full overflow-hidden border border-white/10 shadow-xl">
            <img
              src="/Profile.jpg"
              alt="MD Dilshad"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight mb-4"
        >
          About Me
        </motion.h2>

        {/* DESCRIPTION (senior rewritten) */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gray-300 text-center leading-relaxed max-w-2xl text-lg"
        >
          I'm a Frontend Engineer with 3+ years of experience building
          data-intensive dashboards, SaaS products, and high-performance
          interfaces using React and Next.js.
          <br />
          My background includes working on enterprise banking applications for
          GCC clients (UAE, KSA) at Infosys, focusing on performance,
          accessibility, and scalable UI architecture.
          <br />I care deeply about design systems, DX, and turning complex data
          into simple, usable interfaces.
        </motion.p>

        {/* SKILL GROUP – clean, senior, minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-2xl"
        >
          {[
            {
              icon: <IoLogoJavascript />,
              label: "JavaScript (ES6+)",
            },
            {
              icon: <FaReact />,
              label: "React.js",
            },
            {
              icon: <RiNextjsFill />,
              label: "Next.js",
            },
            {
              icon: <TbBrandRedux />,
              label: "Redux Toolkit",
            },
            {
              icon: <TbBrandRedux />,
              label: "Testing (RTL & Jest)",
            },
            {
              icon: <FaReact />,
              label: "Performance & Optimization",
            },
          ].map(({ icon, label }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 
              border border-white/10 shadow-md backdrop-blur-sm"
            >
              <span className="text-xl text-[#A26BFF]">{icon}</span>
              <span className="text-sm text-gray-200">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
