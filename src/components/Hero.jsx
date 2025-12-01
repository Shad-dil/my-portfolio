"use client";

import { motion } from "framer-motion";
import { BiDownArrowCircle } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 text-center bg-[#0e021b] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
        >
          I design & build{" "}
          <span className="text-[#A26BFF]">data-driven dashboards</span>
          <br className="hidden sm:block" />
          and high-performance SaaS UIs.
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="mt-5 text-lg text-gray-300 leading-relaxed"
        >
          Frontend engineer specialized in React, Next.js & design systems —
          creating analytical interfaces that feel fast, intuitive and scalable.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-[#A26BFF] text-black font-medium shadow-md hover:bg-transparent hover:text-white hover:border-white hover:border transition flex items-center justify-center gap-2"
          >
            View Projects <BsEye className="text-lg" />
          </a>

          <a
            href="/dev_resume.pdf"
            className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-[#A26BFF] hover:text-black transition flex items-center justify-center gap-2"
          >
            Resume <BiDownArrowCircle className="text-lg" />
          </a>
        </motion.div>

        {/* DASHBOARD PREVIEW FADE-IN */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="mt-14 mx-auto max-w-5xl p-4 sm:p-6 rounded-2xl bg-[#0A0911] border border-white/10 shadow-[0px_0px_40px_rgba(162,107,255,0.15)]"
        >
          <img
            src="/dashboard_preview.png"
            alt="SaaS Dashboard Preview"
            className="w-full rounded-xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[700px] h-[700px] bg-[#A26BFF]/20 blur-[180px] opacity-30"></div>
      </div>
    </section>
  );
}
