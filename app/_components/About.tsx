"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { BsActivity } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiTestinglibrary } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

export default function About() {
  const a = useTranslations("about");
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
            <Image
              src="/Profile.jpg"
              alt="MD Dilshad"
              className="w-full h-full object-cover"
              width={100}
              height={100}
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
          {a("heading")}
        </motion.h2>

        {/* DESCRIPTION (senior rewritten) */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gray-300 text-center leading-relaxed max-w-2xl text-lg"
        >
          {a("body")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gray-300 text-center leading-relaxed max-w-2xl text-lg"
        >
          {a("open_to")}
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
              label: "React.js → Component architecture & composition",
            },
            {
              icon: <RiNextjsFill />,
              label: "Next.js → SSR vs SSG & RSC ",
            },
            {
              icon: <TbBrandRedux />,
              label: "Redux Toolkit → Predictable global state",
            },
            {
              icon: <SiTestinglibrary />,
              label: "Testing → Regression safety",
            },
            {
              icon: <BsActivity />,
              label: "Performance → Render control & data flow",
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
